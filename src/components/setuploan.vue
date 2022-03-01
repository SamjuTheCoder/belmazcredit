<template>
<b-container>
    <div>
        <div>
            <v-data-table :headers="headers" :items="indexSn" class="elevation-1">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>Setup Loan</v-toolbar-title>
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
                                                <b-form-select v-model="editedItem.phases" class="select p-2 " style="width:100%; background:#fff;" :options="options"></b-form-select>
                                            </v-col>

                                            <v-col cols="12">
                                                <b-form-input v-model="editedItem.loan_amount" placeholder="Loan Amount"></b-form-input>

                                            </v-col>

                                            <v-col cols="12">
                                                <b-form-input v-model="editedItem.percentage" placeholder="Percentage"></b-form-input>

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

                <template v-slot:item.loan_amount="{item}">
                <div>
                    {{ formatMoney(item.loan_amount) }}
                </div>
                </template>

                <template v-slot:item.percentage="{item}">
                <div>
                    {{ item.percentage }}%
                </div>
                </template>
               
                <template v-slot:item.actions="{ item }">
                    <v-icon small class="mr-2">
                        mdi-dots-horizontal
                    </v-icon>
                </template>
                <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize">
                        Reset
                    </v-btn>
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
                text: 'Phases Name',
                value: 'phases',
                class: "orange lighten-5"
            },
            {
                text: 'Loan Amount',
                value: 'loan_amount',
                class: "orange lighten-5"
            },
            {
                text: 'Percentage',
                value: 'percentage',
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
            phases: '',
            loan_amount: '',
            percentage: '',
            edit: '...',
        },
        defaultItem: {
            sn: [],
            phases: '',
            loan_amount: '',
            percentage: '',
            edit: '',
        },
    }),
 beforeMount(){
    const list = this.find();
    const findPhases = this.findPhases();
  

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
        async findPhases(){
            const response = await this.$http.get('/list-phases')
           // this.editedItem.sponsor_name =response.data.data
            response.data.data.forEach(el => {
       this.options.push(
           { 
               value:el.id,                  
               text: el.phases, 

           }
           
       )
         console.log(response)    
   });

        },
    
async find(){
    try{
   const response = await this.$http.get('/list-loan', )
   this.desserts = response.data.data;
   this.desserts = [];
   //Getting the data and pushing it into the desserts array for each object in the array 
   response.data.data.forEach(el => {
                
            this.desserts.push(
                {
                    id: el.id,         
                    phases: el.phases,
                    loan_amount:  el.loan_amount,
                    percentage: el.percentage,

                }
            )
            
   });
    console.log(response);
}catch (err) {
                console.log(err);
            }
},
       async save() {
            if (!this.editedItem.phases || !this.editedItem.loan_amount || !this.editedItem.percentage ) {
                swal.fire('Make sure you entered all fields properly', 'error');
                return;
            }
              try {
              //  console.log(this.institution_name, this.institution_code, "=-------------")
                const response = await this.$http.post('/setup-loan', {
                    phases: this.editedItem.phases,
                    loan_amount: this.editedItem.loan_amount,
                    percentage: this.editedItem.percentage,
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
