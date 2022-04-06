import Vue from "vue";
import VueRouter from "vue-router";

import dashboard from "@/components/dashboard.vue"
import admindashboard from "@/components/admin_dashboard.vue"
import resetPassword from "@/components/resetPassword.vue"
import institution from "@/components/institution.vue"
import setupInstitution from "@/components/setupInstitution.vue"
import changePassword from "@/components/changePassword.vue"
import sponsorList from "@/components/sponsorList.vue"
import schemeListing from "@/components/schemeListing.vue"
import schemeSetup from "@/components/schemeSetup1.vue"
import home from "@/components/home.vue"
import user from "@/components/users.vue"
import nlogin from "../components/nlogin.vue"
import adminlogin from "../components/adminlogin.vue"
import passReset from "../components/PassRest.vue"
import table from "../components/tableTxt.vue"
import forgotPassword from "@/components/forgotPassword.vue"
import phases from "@/components/phases.vue"
import contribution from "@/components/contribution.vue"
import investment from "@/components/investment.vue"
import mycontribution from "@/components/mycontribution.vue"
import myinvestment from "@/components/myinvestment.vue"
import setuploan from "@/components/setuploan.vue"
import myloan from "@/components/myloan.vue"
import wallet from "@/components/wallet.vue"
import LandingPage from '../components/Nav/LandingPage'
import register from '../components/register'
import contributors from '../components/listcontributors.vue'
import listloan from '../components/listloans.vue'
import listinvestment from '../components/investmentList.vue'
import listwallet from '../components/listwallet.vue'
import transactioncode from '../components/generatecode.vue'
import bank from '../components/bankdetails.vue'
import signup from '../components/emailpage.vue'
import contributeFund from '../components/contribute-fund.vue'
import viewcontributions from '../components/all-contributed-fund.vue'
import confirmwithdrawal from '../components/confirmWithdrawal.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:"/login",
    name:"nlogin",
    component:nlogin,
    meta: {
      secure:false,
    }
  },

  {
    path:"/adminlogin",
    name:"adminlogin",
    component:adminlogin,
    meta: {
      secure:false,
    }
  },

  {
    path:"/register",
    name:"register",
    component:register,
    meta: {
      secure:false,
    }
  },

  {
    path:"/signup",
    name:"signup",
    component:signup,
    meta: {
      secure:false,
    }
  },

  {
    path:"/logout",
    name:"LandingPage",
    component:LandingPage,
    meta: {
      secure:true,
    }
  },
  
  {
    path:"/forgot-password",
    name:"forgotPassword",
    component:forgotPassword,
    meta: {
      secure:false,
    }

  },
  {
    path:"/reset-password",
    name:"resetPassword",
    component:resetPassword,
    meta: {
      secure:false,
    }

  }, 
  
  {
    path:"/passRest",
    name:"passReset",
    component:passReset,
    meta: {
      secure:false,
    }

  }, 
  
  // user routes
  {
    
    path:"/user",
    component:user,
    meta: {
      secure:false,
    },
    
    children: [
      {
        path:"/",
        component:dashboard,
        meta: {
          secure:true,
        }
      },

      {
        path:"/my-wallet",
        name:"wallet",
        component:wallet,
        meta: {
          secure:true,
        }
      },
      {
        path:"/apply-loan",
        name:"myloan",
        component:myloan,
        meta: {
          secure:true,
        }
      },
      {
        path:"/contribute-fund",
        name:"contributeFund",
        component:contributeFund,
        meta: {
          secure:true,
        }
      },
      // {
      //   path:"/claim-your-fund",
      //   name:"wallet",
      //   component:wallet,
      //   meta: {
      //     secure:true,
      //   }
      // },
      {
        path:"/my-bank",
        name:"bank",
        component:bank,
        meta: {
          secure:true,
        }
      },
      {
        path:"/table",
        name:"table",
        component:table,
        meta: {
          secure:true,
        }
      },
      {
        path:"/institution",
        name:"institution",
        component:institution,
        meta: {
          secure:true,
        }
      },
      {
        path:"/my-contribution",
        name:"mycontribution",
        component:mycontribution,
        meta: {
          secure:true,
        }
      },
      {
        path:"/my-investment",
        name:"myinvestment",
        component:myinvestment,
        meta: {
          secure:true,
        }
      },
      {
        path:"/schemeListing",
        name:"schemeListing",
        component:schemeListing,
        meta: {
          secure:true,
        }
      },
      {
        path:"/sponsorList",
        name:"sponsorList",
        component:sponsorList,
        meta: {
          secure:true,
        }
      },
      {
        path:"/changePassword",
        name:"changePassword",
        component:changePassword,
        meta: {
          secure:true,
        }
      },    
     
   
    ]
  },

  // admin routes
  {
    
    path:"/admin",
    component:home,
    meta: {
      secure:false,
    },
    
    children: [
     
      {
        path:"/",
        component:admindashboard,
        meta: {
          secure:true,
        }
      },

      {
        path:"/schemeSetup/:code",
        name:"schemeSetup",
        component:schemeSetup,
        meta: {
          secure:true,
        }
      },
      {
        path:"/loan-setup",
        name:"setuploan",
        component:setuploan,
        meta: {
          secure:true,
        }
      },
      {
        path:"/apply-loan",
        name:"myloan",
        component:myloan,
        meta: {
          secure:true,
        }
      },
      {
        path:"/table",
        name:"table",
        component:table,
        meta: {
          secure:true,
        }
      },
      {
        path:"/institution",
        name:"institution",
        component:institution,
        meta: {
          secure:true,
        }
      },
      {
        path:"/phases-setup",
        name:"phases",
        component:phases,
        meta: {
          secure:true,
        }
      },
      {
        path:"/contribution-setup",
        name:"contribution",
        component:contribution,
        meta: {
          secure:true,
        }
      },

      {
        path:"/list-contributors",
        name:"contributors",
        component:contributors,
        meta: {
          secure:true,
        }
      },
      {
        path:"/withdrawals",
        name:"confirmwithdrawal",
        component:confirmwithdrawal,
        meta: {
          secure:true,
        }
      },

      {
        path:"/view-contributions",
        name:"viewcontributions",
        component:viewcontributions,
        meta: {
          secure:true,
        }
      },

      {
        path:"/generate-transaction-code",
        name:"transactioncode",
        component:transactioncode,
        meta: {
          secure:true,
        }
      },

      {
        path:"/list-loans",
        name:"listloan",
        component:listloan,
        meta: {
          secure:true,
        }
      },
      {
        path:"/list-investments",
        name:"listinvestment",
        component:listinvestment,
        meta: {
          secure:true,
        }
      },

      {
        path:"/list-transactions",
        name:"listwallet",
        component:listwallet,
        meta: {
          secure:true,
        }
      },

      {
        path:"/investment-setup",
        name:"investment",
        component:investment,
        meta: {
          secure:true,
        }
      },
      {
        path:"/my-contribution",
        name:"mycontribution",
        component:mycontribution,
        meta: {
          secure:true,
        }
      },
      {
        path:"/my-investment",
        name:"myinvestment",
        component:myinvestment,
        meta: {
          secure:true,
        }
      },
      {
        path:"/schemeListing",
        name:"schemeListing",
        component:schemeListing,
        meta: {
          secure:true,
        }
      },
      {
        path:"/sponsorList",
        name:"sponsorList",
        component:sponsorList,
        meta: {
          secure:true,
        }
      },
      {
        path:"/changePassword",
        name:"changePassword",
        component:changePassword,
        meta: {
          secure:true,
        }
      },
      {
        path:"/setupInstitution/:code",
        name:"setupInstitution",
        component:setupInstitution, 
        meta: {
          secure:true,
        }
      },
      
     
   
    ]
  },
  
  
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("wertyuiojhdfghhdrtfyguh");

//   if (!token && to.meta.secure) {
//     next({
//       name: 'nlogin'
//     });
//   } else {
//     next();
//   }

// });

export default router;