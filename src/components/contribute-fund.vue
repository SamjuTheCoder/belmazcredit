<template>
<b-container>
    <div>
        <div>
            <v-data-table :headers="headers" :items="indexSn" class="elevation-1">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>My Contribution</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="info" dark class="mb-2" v-bind="attrs" v-on="on">
                                    <v-icon small class="mr-2">
                                        mdi-plus-box-multiple-outline
                                    </v-icon> Contribute
                                </v-btn>
                            </template>
                            <v-card>
                                <div class="title pt-4">
                                    <span class="text-h6">Contribute </span>
                                </div>

                                <v-card-text>
                                    <v-container>
                                        <v-row> 
                                        <v-col>
                                        <h4>Pay into the following bank details: </h4>
                                                Account Name: <strong>Belmaz Multipurpose Cooperative Society Limited</strong><br/>
                                                Bank Name: <strong>GT Bank Plc</strong><br/>
                                                Account Number: <strong>0672931760</strong><br/>

                                               <i> Note: After payment click on the contribute button below</i>

                                        </v-col> 
                                            <v-col cols="12">
                                                <b-form-input v-model="user_phase" value="" hidden></b-form-input>
                                            </v-col>                                         
                                            <v-col cols="12">
                                                <b-button v-b-modal.modal-multi-1 style="background: #20618c; color: #fff; width: 100%" @click="save" size="lg">Contribute</b-button>
                                            </v-col>

                                        </v-row>
                                    </v-container>
                                </v-card-text>

                            </v-card>
                        </v-dialog>
                       
                    </v-toolbar>
                </template>
               <template v-slot:item.contribution_amount="{item}">
                <div>
                    {{ formatMoney(item.contribution_amount) }}
                </div>
                </template>
                 <template v-slot:item.referralid="{item}">
                <div>
                    {{ item.referralid }}
                </div>
                </template>
                 <template v-slot:item.contributor="{item}">
                <div>
                    {{ item.contributor }}
                </div>
                </template>
                <template v-slot:item.status="{item}">
                <div v-if="item.status == 0">
                   <span style="color: red; font-weight: bold">Not Approved</span>
                </div>
                 <div v-else>
                   <span style="color: green; font-weight: bold"> Approved</span>
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
                text: 'Phases Name',
                value: 'phases',
                class: "orange lighten-5"
            },
            {
                text: 'Amount',
                value: 'contribution_amount',
                class: "orange lighten-5"
            },
             {
                text: 'Beneficiary',
                value: 'beneficiary',
                class: "orange lighten-5"
            },
             {
                text: 'Contributor',
                value: 'contributor',
                class: "orange lighten-5"
            },
            {
                text: 'Status',
                value: 'status',
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
            contribution_amount: '',
            beneficiary: '',
            contributor: '',
            status: '',
            edit: '...',
        },
        defaultItem: {
            sn: [],
            phases: '',
            contribution_amount: '',
            beneficiary: '',
            contributor: '',
            status: '',
            edit: '',
        },
        user_phase: '',
    }),
 beforeMount(){
    const list = this.find();
    const dashboard = this.loadDashboard();
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
    
async find(){
    try{
   const response = await this.$http.get('/my-contributions', )
   this.desserts = response.data.data;
   this.desserts = [];
   //Getting the data and pushing it into the desserts array for each object in the array 
   response.data.data.forEach(el => {
                
        this.desserts.push(
            {
                id: el.id,         
                phases: el.phases,
                contribution_amount:  el.contribution_amount,
                beneficiary:  el.referral_id,
                contributor:  el.sponsor_id,
                status:  el.status,
            }
        )
            
   });
    console.log(response);
}catch (err) {
                console.log(err);
            }
},

 async loadDashboard(){
        try{
    const response = await this.$http.get('/dashboard', )
    this.user_phase = response.data.data.user_phase;    
    console.log(response);
        }catch (err) {
                        console.log(err);
            }
        },
       async save() {
            // if (!this.editedItem.loan_amount ) {
            //     swal.fire('Make sure you entered all fields properly', 'error');
            //     return;
            // }
              try {
              //  console.log(this.institution_name, this.institution_code, "=-------------")
                const response = await this.$http.post('/contribute-fund', {
                    phase_id: this.user_phase,
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
                } else if(response.data.code == 'E00') {
                    const error_message = response.data.message;
                    const error_status = response.data.success;
                    swal.fire({
                        icon: 'Error',
                        title: error_status,
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
