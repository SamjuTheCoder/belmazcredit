<template>
<b-container>
    <div>
        <div>
            <v-data-table :headers="headers" :items="indexSn" class="elevation-1">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>Investment Applicant</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <!-- <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on, attrs }">
                                
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
                                                <b-form-input v-model="editedItem.contributed_amount" placeholder="Contribution Amount"></b-form-input>

                                            </v-col>

                                            <v-col cols="12">
                                                <b-form-input v-model="editedItem.receive" placeholder="Receive Amount"></b-form-input>

                                            </v-col>
                                            <v-col cols="12">
                                                <b-form-input v-model="editedItem.withdrawal" placeholder="Withdrawal Amount"></b-form-input>

                                            </v-col>
                                           
                                            <v-col cols="12">
                                                <b-button v-b-modal.modal-multi-1 style="background: #20618c; color: #fff; width: 100%" @click="save" size="lg">Create</b-button>
                                            </v-col>

                                        </v-row>
                                    </v-container>
                                </v-card-text>

                            </v-card>
                        </v-dialog> -->
                        <!-- <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog> -->
                    </v-toolbar>
                </template>

                <template v-slot:item.name="{item}">
                <div>
                    {{ item.name }}
                </div>
                </template>

                 <template v-slot:item.phase="{item}">
                <div>
                    {{ item.phase }}
                </div>
                </template>
                <template v-slot:item.amount="{item}">
                <div>
                    {{ formatMoney(item.amount) }}
                </div>
                </template>
                 <template v-slot:item.investmentlimit="{item}">
                <div>
                    {{ item.investmentlimit }}
                </div>
                </template>

                <!-- <template v-slot:item.status="{item}">
                <div v-if="item.status == 0">
                    <span class="text-danger"> Pending Approval </span>
                </div>
                 <div v-else-if="item.status == 1">
                     <span class="text-green">Approved</span>
                </div>
                </template> -->
               
                <template v-slot:item.action="{item }">
                    <v-icon small class="mr-2">
                        mdi-dots-horizontal
                    </v-icon>
                </template>
                <!-- <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize">
                        Reset
                    </v-btn>
                </template> -->
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
                text: 'Fullame',
                value: 'name',
                class: "orange lighten-5"
            },
            {
                text: 'Phase',
                value: 'phase',
                class: "orange lighten-5"
            },
            {
                text: 'Amount',
                value: 'amount',
                class: "orange lighten-5"
            },
            //  {
            //     text: 'Investment Limit',
            //     value: 'investmentlimit',
            //     class: "orange lighten-5"
            // },
            //  {
            //     text: 'Status',
            //     value: 'status',
            //     class: "orange lighten-5"
            // },
            {
                text: 'Action',
                value: 'action',
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
            name: '',
            phase: '',
            amount: '',
           // investmentlimit: '',
            //status: '',
            action: '',
            edit: '...',
        },
        defaultItem: {
            sn: [],
            name: '',
            phase: '',
            amount: '',
            //investmentlimit: '',
           // status: '',
            action: '',
            edit: '',
        },
    }),

 beforeMount(){
    const list = this.listContributors(); 

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
        

async listContributors(){
    try{
   const response = await this.$http.get('/list-investments', )
   this.desserts = response.data.list_investment;
   this.desserts = [];
   //Getting the data and pushing it into the desserts array for each object in the array 
   response.data.list_investment.forEach(el => {
                
            this.desserts.push(
                {
                    id: el.uid,         
                    name: el.name,
                    phase:  el.phases,
                    amount: el.investment_amount,
                   // investmentlimit: formatMoney(el.min_amount) - formatMoney(el.max_amount),
                    //status: el.status

                }
            )
            
   });
    console.log(response);
}catch (err) {
                console.log(err);
            }
},
       async save() {
            if (!this.editedItem.phases || !this.editedItem.contributed_amount || !this.editedItem.receive || !this.editedItem.withdrawal ) {
                swal.fire('Make sure you entered all fields properly', 'error');
                return;
            }
              try {
              //  console.log(this.institution_name, this.institution_code, "=-------------")
                const response = await this.$http.post('/setup-contributions', {
                    phases: this.editedItem.phases,
                    contributed_amount: this.editedItem.contributed_amount,
                    receive: this.editedItem.receive,
                    withdrawal: this.editedItem.withdrawal,
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
