<template>
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
                        </v-avatar> Total Contribution <span>|<strong class="text-danger"> {{ formatMoney(total_contributions) }} </strong> </span></h6>
                    <div class="d-flex align-items-center">
                    <div class="card-icon d-flex align-items-center justify-content-center">
                    <v-icon>{{ icons.mdiPencil }}</v-icon> Total No. of Contributors: 
                    </div>
                    <div class="ps-3">
                     
                        <span class="black--text">{{ total_contributors }}</span>
                      
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
                        </v-avatar>  Total Referral <span class="text-danger">| {{ formatMoney(total_referral_amount) }} </span></h6>
                    <div class="d-flex align-items-center">
                    <div class="card-icon d-flex align-items-center justify-content-center">
                     <v-icon>{{ icons.mdiPencil }}</v-icon>  Total No. of Referral:
                    </div>
                    <div class="ps-3">
                     
                        <span class="black--text">{{ total_referral}}</span>
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
                        </v-avatar> Total Investment <span class="text-danger"> | {{ formatMoney(total_investment) }} </span></h6>
                    <div class="d-flex align-items-center">
                    <!-- <div class="card-icon d-flex align-items-center justify-content-center">
                      <v-icon>{{ icons.mdiPencil }}</v-icon> Total Interest: 
                    </div>
                    <div class="ps-3">
                      
                        <span class="black--text">0.00</span>
                      
                    </div> -->
                  </div>
                </div>
            </div>
        </div>

        <div class="col-md-3">
              <div class="card card-height">
                <div class="card-body">
                    <h6 class="card-title"><v-avatar color="orange" size="30">
                           <i class="fa-solid fa-money-bill-1-wave" style="color:white"></i>
                        </v-avatar> Total Loan <span class="text-danger"> | {{ formatMoney(total_loans) }} </span></h6>
                    <div class="d-flex align-items-center">
                    <div class="card-icon d-flex align-items-center justify-content-center">
                      <v-icon>{{ icons.mdiPencil }}</v-icon> Total Interest: 
                    </div>
                    <div class="ps-3">
                        <span class="black--text" style="font-size:14px;"> {{ formatMoney(total_loan_interest) }}</span>
                    </div>
                  </div>
                </div>
            </div>
        </div>
     <v-card
        class="mx-auto"
        max-width="100%"
        outlined
    >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4" style="font-weight:bold">
          ANALYSIS
        </div>
        <v-list-item-title class="text-h5 mb-1" style="font-size:14px !important; font-weight:bold">
          
        </v-list-item-title>
        <v-list-item-subtitle> <span style="font-size:14px;font-weight:bold">  </span></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="60"
        color="grey"
      >
        <v-icon>{{ icons.mdiAccount }}</v-icon> 
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
    
      <v-btn
        outlined
        rounded
        text
      >
        
      </v-btn>
    </v-card-actions>
  </v-card>

  
       
    </div>

    

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
   
    total_contributors: '',
    total_contributions: '',
    total_referral: '',
    total_referral_amount:'',
    total_investment:'',
    total_loans:'',
    total_loan_interest:'',
   
     }),

     beforeMount(){
        const list = this.loadAdminDashboard();
    },
     methods: {
        formatMoney(num) {
        return Number(num).toLocaleString("en-US", {
            style: "currency",
            currency: "ngn"
        });
        },
       
    async loadAdminDashboard(){
        try{
    const response = await this.$http.get('/admin-dashboard', )
    this.total_contributors = response.data.data.total_contributors;
    this.total_contributions = response.data.data.total_contributions;
    this.total_referral = response.data.data.total_referral;
    this.total_referral_amount = response.data.data.total_referral_amount;
    this.total_investment = response.data.data.total_investment;
    this.total_loans = response.data.data.total_loans;
    this.total_loan_interest = response.data.data.total_loan_interest;
    
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

