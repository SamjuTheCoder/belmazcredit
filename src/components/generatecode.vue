<template>
<b-container>
    <div>
        <div>
            <v-data-table :headers="headers" :items="indexSn" class="elevation-1">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>Transaction Code</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                    <v-icon small class="mr-2">
                                        mdi-plus-box-multiple-outline
                                    </v-icon> Generate
                                </v-btn>
                            </template>
                            <v-card>
                                <!-- <div class="title pt-4">
                                    <span class="text-h6">Enter information </span>
                                </div> -->

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                                                                      
                                            <v-col cols="12">
                                                <b-button v-b-modal.modal-multi-1 style="background: #20618c; color: #fff; width: 100%" @click="save" size="lg">Generate</b-button>
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

                <template v-slot:item.transaction_code="{item}">
                <div>
                    {{item.transaction_code }}
                </div>
                </template>

                <template v-slot:item.status="{item}">
                <div v-if="item.status==1">
                    <span style="color: red"> Active</span>
                </div>
                <div v-else-if="item.status==0">
                    <span style="color:green"> In-Active ( Used )</span>
                </div>
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
                text: 'Transaction Code',
                value: 'transaction_code',
                class: "orange lighten-5"
            },
            {
                text: 'Status',
                value: 'status',
                class: "orange lighten-5"
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
            transaction_code: '',
            status: '',
            edit: '...',
        },
        defaultItem: {
            sn: [],
            transaction_code: '',
            status: '',
            edit: '',
        },
    }),
 beforeMount(){
    const list = this.displayCode();
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
    
async displayCode(){
    try{
   const response = await this.$http.get('/list-transaction-code', )
   this.desserts = response.data.transaction_code;
   this.desserts = [];
   //Getting the data and pushing it into the desserts array for each object in the array 
   response.data.transaction_code.forEach(el => {
                
            this.desserts.push(
                {
                    id: el.id,         
                    transaction_code: el.code,
                    status:  el.status,
                  
                }
            )
            
   });
    console.log(response);
}catch (err) {
                console.log(err);
            }
},
       async save() {
            // if (!this.editedItem.phases || !this.editedItem.loan_amount || !this.editedItem.percentage ) {
            //     swal.fire('Make sure you entered all fields properly', 'error');
            //     return;
            // }
              try {
              //  console.log(this.institution_name, this.institution_code, "=-------------")
                const response = await this.$http.post('/generate-transaction-code', {
                    transaction_code: this.editedItem.transaction_code,
                    status: this.editedItem.status,
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
