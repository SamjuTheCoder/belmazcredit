<template>
<b-container>
    <div class="row cards" style="background-color:#fff">
    <h5>Dashboard</h5>
    <p>Home / <strong>Dashboard</strong> | <strong>Membership ID:</strong> <strong> <span class="text-danger"> {{  user_referral_id}}</span> </strong> | Download <a href="belmazppt.pptx">How to Invest Material</a> </p>
    
    <v-row>
    <v-divider role="presentation"></v-divider>
    </v-row>
        <div class="col-md-3">
            <div class="card card-height">
                <div class="card-body">
                    <h6 class="card-title"> Contribution <span>| {{ formatMoney(contribution_amount - contribution_withdrawal_amount ) }} <br/></span></h6>
                    <div class="d-flex align-items-center">
                    <div class="card-icon d-flex align-items-center justify-content-center">
                    <v-icon>{{ icons.mdiPencil }}</v-icon> <strong>Contributors:</strong> &nbsp; {{ stage_users }} &nbsp;&nbsp;|&nbsp;
                    </div>
                    <span style="font-size:13px;"><strong> Stage:</strong>  {{ user_phase }}</span>
                  </div>
                       <span v-if="contribution_amount > 0">
                      <v-dialog v-model="dialog3" max-width="400px">
                          <template v-slot:activator="{ on, attrs }">
                              <v-btn style="font-size:11px; font-weight:bold" color="orange" dark class="mb-2" v-bind="attrs" v-on="on">
                                  Withdraw
                              </v-btn>
                          </template>
                          <v-card>
                              <div class="title pt-4">
                                  <span class="text-h6">Contribution Withdrawal </span>
                              </div>

                              <v-card-text>
                                  <v-container>
                                      <v-row> 
                                      <v-col>
                                        <v-col cols="12">
                                                        <b-form-input v-model="wamount" placeholder="Withdrawal Amount" required></b-form-input>

                                          </v-col>
                                      </v-col>                                   
                                          <v-col cols="12">
                                              <b-button v-b-modal.modal-multi-1 style="background-color: orange; color: #fff; width: 100%" @click="save3" size="lg">Withdraw</b-button>
                                          </v-col>

                                      </v-row>
                                  </v-container>
                              </v-card-text>

                          </v-card>
                      </v-dialog>
                  </span>
                </div>
            </div>
        </div>
        <div class="col-md-3">
              <div class="card card-height">
                <div class="card-body">
                    <h6 class="card-title"> Referral:  {{ referral_count }} <span>| Amt: {{ formatMoney(walletsum - referral_withdrawal_amount) }} </span></h6>
                    <div class="d-flex align-items-center">
                    <div class="ps-3">
                       
                <span v-if="walletsum >= 7000">
                      <v-dialog v-model="dialog2" max-width="400px">
                          <template v-slot:activator="{ on, attrs }">
                              <v-btn style="font-size:11px; font-weight:bold" color="orange" dark class="mb-2" v-bind="attrs" v-on="on">
                                  Withdraw
                              </v-btn>
                          </template>
                          <v-card>
                              <div class="title pt-4">
                                  <span class="text-h6">Referral Withdrawal </span>
                              </div>

                              <v-card-text>
                                  <v-container>
                                      <v-row> 
                                      <v-col>
                                        <v-col cols="12">
                                                        <b-form-input v-model="amount" placeholder="Withdrawal Amount" required></b-form-input>

                                          </v-col>
                                      </v-col>                                   
                                          <v-col cols="12">
                                              <b-button v-b-modal.modal-multi-1 style="background-color: orange; color: #fff; width: 100%" @click="save2" size="lg">Withdraw</b-button>
                                          </v-col>

                                      </v-row>
                                  </v-container>
                              </v-card-text>

                          </v-card>
                      </v-dialog>
                  </span>
                  </div>
                    
                  </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
              <div class="card card-height">
                <div class="card-body">
                    <h6 class="card-title"><v-avatar color="orange" size="30">
                           <i class="fa-solid fa-money-bill-1-wave" style="color:white"></i>
                        </v-avatar> Investment <span> | {{ formatMoney(investment_amount) }} </span></h6>
                    <div class="d-flex align-items-center">
                    <div class="card-icon d-flex align-items-center justify-content-center">
                      <v-icon>{{ icons.mdiPencil }}</v-icon> Interest: 
                    </div>
                    <div class="ps-3">
                      
                        <span class="black--text">0.00</span>
                      
                    </div>
                  </div>
                </div>
            </div>
        </div>

        <div class="col-md-3">
              <div class="card card-height">
                <div class="card-body">
                    <h6 class="card-title"><v-avatar color="orange" size="30">
                           <i class="fa-solid fa-money-bill-1-wave" style="color:white"></i>
                        </v-avatar> Loan <span> | {{ formatMoney(myloan_amount) }} </span></h6>
                    <div class="d-flex align-items-center">
                    <div class="card-icon d-flex align-items-center justify-content-center">
                      <v-icon>{{ icons.mdiPencil }}</v-icon> Status: 
                    </div>
                    <span v-if="user_phase == 1">
                    <div class="ps-3">
                        <span style="font-size:14px; font-weight:bold color:green !important;"> Not Qualified</span>
                    </div>
                    </span>
                    <span v-else>
                    <div class="ps-3">
                        <span class="black--text" v-if="loan_status == 0" style="font-size:14px; color:red !important;"> Not Approve</span>
                        <span v-else-if="loan_status == 1" style="font-size:14px; color:green !important;"> Approved</span>
                    </div>
                    </span>
                  </div>
                </div>
            </div>
        </div>
     <v-card
        class="mx-auto"
        max-width="320"
        outlined
    >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4" style="font-weight:bold">
          CONTRIBUTION
        </div>
        <v-list-item-title class="text-h5 mb-1" style="font-size:14px !important; font-weight:bold">
              {{ formatMoney(phase_amount) }} to receive {{ formatMoney(phase_amount_receive) }}             
        </v-list-item-title>
        <v-list-item-subtitle>Above is your contribution amount on stage <span style="font-size:14px;font-weight:bold"> {{ user_phase }}</span></v-list-item-subtitle>
      </v-list-item-content>
     
      <v-list-item-avatar
        tile
        size="60"
        color="grey"
      >
        <v-icon>{{ icons.mdiAccount }}</v-icon> 
      </v-list-item-avatar>
    </v-list-item>

    <a href="/contribute-fund">
    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        View / Contribute
      </v-btn>
    </v-card-actions>
    </a>
  </v-card>

  <v-card
        class="mx-auto"
        max-width="320"
        outlined
    >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4" style="font-weight:bold">
          INVESTMENT
        </div>
        
        <v-list-item-title class="text-h5 mb-1" style="font-size:14px !important; font-weight:bold">
        <span v-if="min_amount == '0.00'"> 0.00</span> <span v-else> {{ formatMoney(min_amount) }} - {{ formatMoney(max_amount) }}</span>
        </v-list-item-title>
        <v-list-item-subtitle>Above is your investment limit at <span style="font-size:14px;font-weight:bold"> {{ per}}% </span> interest rate </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="60"
        color="orange"
      >
       <i class="fa-solid fa-money-bill-1-wave" style="color:white; font-size:40px;margin-left:8px"></i>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        v-for="item in itemsx"
          :key="item.title"
          :to="item.to"
          link
      >
        {{ item.title }}
      </v-btn>
    </v-card-actions>
  </v-card>

  <v-card
        class="mx-auto"
        max-width="320"
        outlined
    >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4" style="font-weight:bold">
          LOAN
        </div>
        <span v-if="user_phase == 1">
          <v-list-item-subtitle>You're not yet qualified for a loan</v-list-item-subtitle>
        </span>
        <span v-else>
        <v-list-item-title class="text-h5 mb-1" style="font-size:14px !important; font-weight:bold">
         {{ formatMoney(loan_amount) }}
        </v-list-item-title>
        <v-list-item-subtitle>You're entitle to above loan at <span style="font-size:14px;font-weight:bold"> {{ loan_interest }}%</span> interest rate.</v-list-item-subtitle>
        </span>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="60"
        color="teal"
      >
       <i class="fa-solid fa-money-bill-1-wave" style="color:white; font-size:40px;margin-left:8px"></i>
      </v-list-item-avatar>
    </v-list-item>

    <span v-if="user_phase == 1">

    </span>
    <span v-else>
    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
      >
     
      
     {{ item.title }}
      
      </v-btn>
    </v-card-actions>
     </span>
    </v-card> 
    <p></p>
   
    <v-card
        class="mx-auto"
        max-width="1050"
        outlined
    >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4" style="font-weight:bold">
          <strong>EARNING STATUS</strong>
        </div>

        <span>
            <v-dialog v-model="dialog" max-width="400px">
                  <template v-slot:activator="{ on, attrs }">
                      <v-btn color="orange" dark class="mb-2" v-bind="attrs" v-on="on">
                          <v-icon small class="mr-2">
                              
                          </v-icon> Claim Fund
                      </v-btn>
                  </template>
                  <v-card>
                      <div class="title pt-4">
                          <span class="text-h6">Contribution Claim Fund </span>
                      </div>

                      <v-card-text>
                          <v-container>
                              <v-row> 
                              <v-col>                                     
                                      <i> Note: Your fund wil be paid into your wallet</i>
                              </v-col> 
                                  <v-col cols="12">
                                      <b-form-input v-model="user_phase" value="" hidden></b-form-input>
                                  </v-col>                                         
                                  <v-col cols="12">
                                      <b-button v-b-modal.modal-multi-1 style="background-color: orange; color: #fff; width: 100%" @click="save" size="lg">Claim</b-button>
                                  </v-col>

                              </v-row>
                          </v-container>
                      </v-card-text>

                  </v-card>
              </v-dialog>
              
         </span>

        <div v-if="earning_status_code == 0">
        <v-list-item-title class="text-h5 mb-1" style="font-size:14px !important; font-weight:bold">           
        </v-list-item-title>
        <v-list-item-subtitle>{{ earning_status }} </v-list-item-subtitle>
        </div>
         <div v-else-if="earning_status_code == 1">
        <v-list-item-title class="text-h5 mb-1" style="font-size:14px !important; font-weight:bold">           
        </v-list-item-title>
        <v-list-item-subtitle>{{ earning_status }}  </v-list-item-subtitle>
        </div>
         <div v-else-if="earning_status_code == 2">
        <v-list-item-title class="text-h5 mb-1" style="font-size:14px !important; font-weight:bold">
            <strong style="color:red">Congratulations!!!</strong>             
        </v-list-item-title>
        <v-list-item-subtitle>{{ earning_status }}  {{ formatMoney(phase_amount_receive) }} </v-list-item-subtitle>
        </div>
        
      </v-list-item-content>
     
     <v-list-item-avatar
        tile
        size="60"
        color="teal"
      >
       <i class="fa-solid fa-money-bill-1-wave" style="color:white; font-size:40px;margin-left:8px"></i>
      </v-list-item-avatar>
    </v-list-item>
    
  </v-card>  
      
    </div>
</b-container>  

</template>

<script>
  import {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
  } from '@mdi/js'
import swal from 'sweetalert2';
  export default {
    data: () => ({
      icons: {
        mdiAccount,
        mdiPencil,
        mdiShareVariant,
        mdiDelete,
      },
       desserts: [],
        editedIndex: -1,
      dialog: false,
      dialog2: false,
    options: [],
    items: [
              { title: 'View / Apply Now',icon: 'mdi-clipboard-text', to: '/apply-loan' },
          ],
    itemsx: [
              { title: 'Invest Now',icon: 'mdi-clipboard-text', to: '/my-investment' },
          ],
    user_phase: '',
    stage_users: '',
    user_referral_id: '',
    phase_amount:'',
    phase_amount_receive:'',
    min_amount:'',
    max_amount:'',
    per:'',
    loan_amount:'',
    loan_interest:'',
    myloan_amount:'',
    loan_status:'',
    referral_count:'',
    total_referral_amount:'',
    investment_amount:'',
    earning_status:'',
    earning_status_code:'',
    walletsum:'',
    amount:'',
    contribution_amount:'',
    wamount:'',
    referral_withdrawal_amount:'',
    contribution_withdrawal_amount:'',

     }),

     beforeMount(){
        const list = this.loadDashboard();
        const listx = this.claimFund();
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
         dialog2(val) {
            val || this.close()
        },
         dialog3(val) {
            val || this.close()
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
         close2() {
            this.dialog2 = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        close3() {
            this.dialog2 = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
           async save() {
            
              try {
                const response = await this.$http.post('/claim-fund', {
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
    async save2() {
            
              try {
                const response = await this.$http.post('/referral-fund-withdraw', {
                    amount: this.amount,
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
    
     async save3() {
            
              try {
                const response = await this.$http.post('/contribution-fund-withdraw', {
                    amount: this.wamount,
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
       
    async loadDashboard(){
        try{
    const response = await this.$http.get('/dashboard', )
    this.user_phase = response.data.data.user_phase;
    this.stage_users = response.data.data.stage_users;
    this.user_referral_id = response.data.data.user_referral_id;
    this.phase_amount = response.data.data.phase_amount.amount;
    this.phase_amount_receive = response.data.data.phase_amount.receive;
    this.min_amount = response.data.data.investment.min;
    this.max_amount = response.data.data.investment.max;
    this.per = response.data.data.investment.per;
    this.loan_amount = response.data.data.loan.loan_amount;
    this.loan_interest = response.data.data.loan.percentage;
    this.myloan_amount = response.data.data.myloan.loan_amount;
    this.loan_status = response.data.data.myloan.status;
    this.referral_count = response.data.data.referral_count;
    this.total_referral_amount = response.data.data.total_referral_amount;
    this.investment_amount = response.data.data.investment_amount.amount;
    this.earning_status = response.data.data.earning_status.status;
    this.earning_status_code = response.data.data.earning_status.status_code;
    this.walletsum = response.data.data.wallet;
    this.contribution_amount = response.data.data.user_contribution;
    this.referral_withdrawal_amount = response.data.data.referral_withdrawal;
    this.contribution_withdrawal_amount = response.data.data.contribution_withdrawal;
    
    console.log(response);
        }catch (err) {
                        console.log(err);
            }
        },

     async claimFund(){
        try{
    const response = await this.$http.get('/claim-fund', )
    
    if (response.data.code == '00') {
                    const success_message = response.data.message;
                    const success_status = response.data.success;
                    swal.fire({
                        icon: 'success',
                        title: success_status,
                        text: success_message,
                    });
                }
              
    console.log(response);
        }catch (err) {
                        console.log(err);
            }
        },

    },

   
  }
</script>

<style scoped>
    .icon{
        color:#F58634;
        font-size: 20px;
    }
   
    div.card {
         box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
         padding: 0 1px 1px 1px;
    }
    .cards  {
        margin-left: 10px;
        margin-right: 10px;
        font-size: 13px;
    }

    .card-height {
        box-shadow: 4px 4px;
        height: 120px;
        background: #f6f6fe;
    }
    .card-title span {
    color: #899bbd;
    font-size: 12px;
    font-weight: 400;
    }
    .ps-3 {
    padding-left: 1rem!important;
    }
    .card-icon {
  
    background: #f6f6fe;
    font-size: 13px;
    }

    .dashboard .card-icon {
        font-size: 32px;
        line-height: 0;
        width: 64px;
        height: 64px;
        flex-shrink: 0;
        flex-grow: 0;
    }
    .rounded-circle {
        border-radius: 50%!important;
    }
    .align-items-center {
        align-items: center!important;
    }
    .justify-content-center {
        justify-content: center!important;
    }
    .d-flex {
        display: flex!important;
    }
    .align-items-left {
        align-items: left!important;
    }
    .justify-content-left {
        justify-content: left!important;
    }

</style>

