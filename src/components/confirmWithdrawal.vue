<template>
<b-container>
    <div>
        <div>
            <v-data-table :headers="headers" :items="indexSn" class="elevation-1">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>Withdrawals</v-toolbar-title>
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

                 <template v-slot:item.referralid="{item}">
                <div>
                    {{ item.referralid }}
                </div>
                </template>
                <template v-slot:item.earningtype="{item}">
                <div>
                    {{ item.earningtype }}
                </div>
                </template>
                
                <template v-slot:item.withdrawal="{item}">
                <div>
                    {{ formatMoney(item.withdrawal) }}
                </div>
                </template>

                <template v-slot:item.date="{item}">
                <div>
                    {{ item.date }}
                </div>
                </template>
               
                <template v-slot:item.action="{item }">
                    <div v-if="item.withdrawal == null"> 
                        
                    </div>
                    <div v-else>
                        <v-btn style="color:green" v-if="item.status == 1" @click="toogleStatus(item.uid)" text > Approved</v-btn>
                        <v-btn style="color:red" text v-else-if="item.status == 0" @click="toogleStatus(item.uid)" > Pending Approval</v-btn>
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
                value: 'uid',
                class: "orange lighten-5"
            },
            {
                text: 'Fullame',
                value: 'name',
                class: "orange lighten-5"
            },
            {
                text: 'Referral ID',
                value: 'referralid',
                class: "orange lighten-5"
            },
            {
                text: 'Earning Type',
                value: 'earningtype',
                class: "orange lighten-5"
            },
            {
                text: 'Withdrawal',
                value: 'withdrawal',
                class: "orange lighten-5"
            },
            {
                text: 'Date',
                value: 'date',
                class: "orange lighten-5"
            },
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
            uid: '', 
            name: '',
            referralid: '',
            earningtype: '',
            withdrawal: '',
            date:'',
            action: '',
            edit: '...',
        },
        defaultItem: {
            sn: [],
            uid: '', 
            name: '',
            referralid: '',
            earningtype: '',
            withdrawal: '',
            date:'',
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
    
     async toogleStatus(uid){
            try {
                const url = "/confirm-withdrawal";
                const resp = await this.$http.post(url, {
                    uid
                })
                console.log({uid})
                // TODO check if resp is successful

                // change the status from the front
                 if (resp.data.code == '00') {
                    const success_message = resp.data.message;
                      const success_status = resp.data.status;
                    swal.fire({
                        icon: 'success',
                        title: success_status,
                        text: success_message,
                    });
                } else {
                    const error_message = resp.data.message;
                    swal.fire({
                        icon: 'Error',
                        title: 'error',
                        text: error_message,
                    });
                }
               
                this.desserts = this.desserts.map(d => {
                    console.log();
                    if (d.uid == uid) {
                        return {...d, status: d.status == 1? 0: 1}
                    }
                    return d
                })

            } catch (error) {
                
            }
        },

async listContributors(){
    try{
   const response = await this.$http.get('/list-wallets-withdrawal', )
   this.desserts = response.data.list_wallets;
   this.desserts = [];
   //Getting the data and pushing it into the desserts array for each object in the array 
   response.data.list_wallets_withdrawal.forEach(el => {
                
            this.desserts.push(
                {
                    uid: el.uid,         
                    name: el.name,
                    referralid:  el.referral_id,
                    earningtype: el.earning_type,
                    withdrawal: el.withdrawal,
                    date:  el.created_at,
                    status: el.withdrawal_status

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
