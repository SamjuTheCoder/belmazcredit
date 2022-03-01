<template>
<b-container>
    <div>
        <div>
            <v-data-table :headers="headers" :items="indexSn" class="elevation-1">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>Setup Bank Account</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                    <v-icon small class="mr-2">
                                        mdi-plus-box-multiple-outline
                                    </v-icon> Setup
                                </v-btn>
                            </template>
                            <v-card>
                                <div class="title pt-4">
                                    <span class="text-h6">Enter information </span>
                                </div>

                                <v-card-text>
                                    <v-container>
                                        <v-row>

                                             <v-col cols="12">
                                                <b-form-input v-model="editedItem.name" placeholder="Account Name"></b-form-input>

                                            </v-col>

                                            <v-col cols="12">
                                                <b-form-input v-model="editedItem.bank_name" placeholder="Bank Name"></b-form-input>

                                            </v-col>

                                            <v-col cols="12">
                                                <b-form-input v-model="editedItem.account_name" placeholder="Account Number"></b-form-input>

                                            </v-col>
                                           
                                            <v-col cols="12">
                                                <b-button v-b-modal.modal-multi-1 style="background: #20618c; color: #fff; width: 100%" @click="save" size="lg">Save</b-button>
                                            </v-col>

                                        </v-row>
                                    </v-container>
                                </v-card-text>

                            </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>

                <template v-slot:item.fullname="{item}">
                <div>
                    {{ item.fullname }}
                </div>
                </template>

                <template v-slot:item.bank="{item}">
                <div>
                    {{ item.bank }}
                </div>
                </template>
                <template v-slot:item.account="{item}">
                <div>
                    {{ item.account }}
                </div>
                </template>
               
                <template v-slot:item.actions="{ item }">
                    <v-icon small class="mr-2">
                        mdi-dots-horizontal
                    </v-icon>
                </template>
               
            </v-data-table>

        </div>
        <div>
            <div>
                <b-table striped hover :items="items"></b-table>
            </div>
        </div>
    </div>
</b-container>
</template>

<script>
import swal from 'sweetalert2';
export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        
        options: [

         ],      
     
        headers: [{
                text: 'S/N',
                align: 'start',
                sortable: false,
                value: 'sn',
                class: "orange lighten-5"
            },
            {
                text: 'Account Name',
                value: 'name',
                class: "orange lighten-5"
            },
            {
                text: 'Bank Name',
                value: 'bank_name',
                class: "orange lighten-5"
            },
            {
                text: 'Account Name',
                value: 'account_name',
                class: "orange lighten-5"
            },
            {
                value: 'id',
                align: ' d-none'
                
            },
            {
                text: '',
                value: 'edit',
                sortable: false,
                class: "orange lighten-5"
            },
        ],
        sponsor_n: '',
        desserts: [],
        editedIndex: -1,
        editedItem: {
            sn: [],
            name: '',
            bank_name: '',
            account_name: '',
            edit: '...',
        },
        defaultItem: {
            sn: [],
            name: '',
            bank_name: '',
            account_name: '',
            edit: '',
        },
    }),
 beforeMount(){
    const list = this.displayBankInfo();
 
    },
    computed: {
        indexSn() {
            return this.desserts.map((d, index) => ({
                ...d,
                sn: index + 1
            }))
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

   

    methods: {
        formatMoney(num) {
        return Number(num).toLocaleString("en-US", {
            style: "currency",
            currency: "ngn"
        });
        },
        
        initialize() {
            this.desserts = [
            ]
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        async displayBankInfo(){
            const response = await this.$http.get('/list-bank-details')
           // this.editedItem.sponsor_name =response.data.data
            response.data.bank_detail.forEach(el => {
       this.options.push(
           { 
               value:el.id,                  
               name: el.name, 
               bank_name: el.bank_name, 
               account_name: el.account_name, 

           }
           
       )
         console.log(response)    
   });

        },
    
       async save() {
            if (!this.editedItem.name || !this.editedItem.bank_name || !this.editedItem.account_name ) {
                swal.fire('Make sure you entered all fields properly', 'error');
                return;
            }
              try {
              //  console.log(this.institution_name, this.institution_code, "=-------------")
                const response = await this.$http.post('/setup-bank', {
                    name: this.editedItem.name,
                    bank_name: this.editedItem.bank_name,
                    account_name: this.editedItem.account_name,
                });

                console.log(response);
                if (response.data.code == '00') {
                    const success_message = response.data.message;
                      const success_status = response.data.success;
                    swal.fire({
                        icon: 'success',
                        title: success_status,
                        text: success_message,
                    });
                } else {
                    const error_message = response.data.message;
                    swal.fire({
                        icon: 'Error',
                        title: 'error',
                        text: error_message,
                    });
                }
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }

                this.close()

            } catch (err) {
                console.log(err);
            }
           

           },
    },
}
</script>

<style scoped>
.title {
    text-align: center;
}
.select {
    width: 100%;
    background: #fff;
    border: 2px solid #bcc1c4;
}
</style>
