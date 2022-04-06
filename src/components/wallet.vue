<template>
    <div class="row cards" style="background-color:#fff">
    <h5>Dashboard</h5>
    <p>Home / <strong>Wallet</strong></p>
    
    <v-row>
    <v-divider role="presentation"></v-divider>
    </v-row>
        
        <div class="col-md-4">
              <div class="card card-height">
                <div class="card-body">
                    <h6 class="card-title"> <v-avatar color="orange" size="30">
                           <i class="fa-solid fa-money-bill-1-wave" style="color:white"></i>
                        </v-avatar>  Wallet Amount <span>| {{ formatMoney(wallet_sum) }} </span></h6>
                    <div class="d-flex align-items-center">
                    
                  </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
              <div class="card card-height">
                <div class="card-body">
                    <h6 class="card-title"><v-avatar color="orange" size="30">
                           <i class="fa-solid fa-file-invoice-dollar" style="color:white"></i>
                        </v-avatar> Withdrawal <span> | {{ formatMoney(wallet_withdrawal) }} </span></h6>
                    <div class="d-flex align-items-center">
                    
                  </div>
                </div>
            </div>
        </div>

        <div class="col-md-4">
              <div class="card card-height">
                <div class="card-body">
                    <h6 class="card-title"><v-avatar color="orange" size="30">
                           <i class="fa-solid fa-file-invoice-dollar" style="color:white"></i>
                        </v-avatar> Total Balance <span> | {{ formatMoney(wallet_sum - wallet_withdrawal) }} </span></h6>
                    <div class="d-flex align-items-center">
                    
                  </div>
                </div>
            </div>
        </div>

        <v-data-table :headers="headers" :items="indexSn" class="elevation-1">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>My Transactions</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                       
                    </v-toolbar>
                </template>
               <template v-slot:item.type="{item}">
                <div>
                    {{ item.type }}
                </div>
                </template>
                <template v-slot:item.wallet_amount="{item}">
                <div>
                    {{ formatMoney(item.wallet_amount) }}
                </div>
                </template>
                 <template v-slot:item.withdrawal="{item}">
                <div>
                    {{ formatMoney(item.withdrawal) }}
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
                <template v-slot:item.date="{item}">
                <div>
                    {{ item.date }}
                </div>
                </template>
                
            </v-data-table>
         
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
    desserts: [],
    headers: [{
                text: 'S/N',
                align: 'start',
                sortable: false,
                value: 'sn',
                class: "orange lighten-5"
            },
            {
                text: 'Earning Type',
                value: 'type',
                class: "orange lighten-5"
            },
            {
                text: 'Amount',
                value: 'wallet_amount',
                class: "orange lighten-5"
            },
            {
                text: 'Withdrawal',
                value: 'withdrawal',
                class: "orange lighten-5"
            },
             {
                text: 'Withdrawal Status',
                value: 'action',
              class: "orange lighten-5"
                
            },
            {
                text: 'Date',
                value: 'date',
                class: "orange lighten-5"
            },
            
            {
                text: '',
                value: 'edit',
                sortable: false,
                class: "orange lighten-5"
            },
        ],
    options: [],
    
    wallet_sum: '',
    wallet_withdrawal: '',
    
     }),

     beforeMount(){
        const list = this.loadDashboard();
        const wallet = this.loadWallet();
    },
     computed: {
        indexSn() {
            return this.desserts.map((d, index) => ({
                ...d,
                sn: index + 1
            }))
        },
    },
     methods: {
        formatMoney(num) {
        return Number(num).toLocaleString("en-US", {
            style: "currency",
            currency: "ngn"
        });
        },
       
    async loadDashboard(){
        try{
    const response = await this.$http.get('/wallets', )
    this.wallet_sum = response.data.data.wallet_sum;
    this.wallet_withdrawal = response.data.data.withdrawal;
    
    console.log(response);
        }catch (err) {
                        console.log(err);
            }
        },

        async loadWallet(){
    try{
   const response = await this.$http.get('/list-my-wallets', )
   this.desserts = response.data.data;
   this.desserts = [];
   //Getting the data and pushing it into the desserts array for each object in the array 
   response.data.data.forEach(el => {
                
            this.desserts.push(
                {
                    id: el.id,         
                    type: el.earning_type,
                    wallet_amount:  el.wallet_amount,
                    withdrawal:  el.withdrawal,
                    date:  el.created_at,
                    status:  el.withdrawal_status,
                }
            )
            
   });
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
        height: 90px;
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

