<template>
<b-container>
    <div class="row cards" style="background-color:#fff">
    <h5>Dashboard</h5>
    <p>Home / <strong>Dashboard</strong></p>
    
    <v-row>
    <v-divider role="presentation"></v-divider>
    </v-row>
        <div class="col-md-3">
            <div class="card card-height">
                <div class="card-body">
                    <h6 class="card-title"><v-avatar color="orange" size="30">
                        <v-icon dark>
                            mdi-account-circle
                        </v-icon>
                        </v-avatar> Stage <span>|<strong class="text-danger"> {{ user_phase }} </strong> | <strong>Membership ID:</strong> <strong> <span class="text-danger"> {{  user_referral_id}}</span> </strong></span></h6>
                    <div class="d-flex align-items-center">
                    <div class="card-icon d-flex align-items-center justify-content-center">
                    <v-icon>{{ icons.mdiPencil }}</v-icon> Contributors: 
                    </div>
                    <div class="ps-3">
                     
                        <span class="black--text">{{ stage_users }}</span>
                      
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
              <div class="card card-height">
                <div class="card-body">
                    <h6 class="card-title"> <v-avatar color="orange" size="30">
                           <i class="fa-solid fa-money-bill-1-wave" style="color:white"></i>
                        </v-avatar>  Referral <span>| {{ formatMoney(total_referral_amount) }} </span></h6>
                    <div class="d-flex align-items-center">
                    <div class="card-icon d-flex align-items-center justify-content-center">
                     <v-icon>{{ icons.mdiPencil }}</v-icon>  Number of referral:
                    </div>
                    <div class="ps-3">
                     
                        <span class="black--text">{{ referral_count}}</span>
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
    <span v-if="earning_status_code == 0">
      
    </span>
    <span v-else-if="earning_status_code == 1">
    </span>
    <span v-else-if="earning_status_code == 2">
    <a href="/claim-your-fund">
    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Claim Now
      </v-btn>
    </v-card-actions>
    </a>
    </span>
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

  export default {
    data: () => ({
      icons: {
        mdiAccount,
        mdiPencil,
        mdiShareVariant,
        mdiDelete,
      },
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
     }),

     beforeMount(){
        const list = this.loadDashboard();
        const listx = this.claimFund();
    },

    // watch: {
    //     dialog(val) {
    //         val || this.close()
    //     },
    // },

     methods: {
        formatMoney(num) {
        return Number(num).toLocaleString("en-US", {
            //style: "currency",
            currency: "ngn"
        });
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
    }

    .card-height {
        box-shadow: 4px 4px;
        height: 120px;
        background: #f6f6fe;
    }
    .card-title span {
    color: #899bbd;
    font-size: 13px;
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

