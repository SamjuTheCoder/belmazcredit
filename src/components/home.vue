<template>
 <v-app id="inspire">
     <v-navigation-drawer
    style="background:#F58634;"
      v-model="drawer"
      app
    > <div class="text-center py-5"><img src="logo.jpg" alt="Logo" width="60" height="50"></div>
<div class="mt-5">
 <v-list
        dense
        nav
      >
        <v-list-item
         v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon style="color: #FFFFFF;">{{ item.icon }}</v-icon>
          </v-list-item-icon>
       
          <v-list-item-content>
            <v-list-item-title style="color: #FFFFFF;">{{ item.title }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>

      
</div>
    
    </v-navigation-drawer>

    <v-app-bar app class="appBar" elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>

     <v-main class="vMain p-0">
      <router-view/>
    </v-main>


    <v-footer color="" padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Powered by Belmaz Multipurpose Cooporative Society Limited</strong>
    </v-col>
  </v-footer>

  </v-app>
  
   
 
</template>

<script>
  export default {
    data: () => ({     
      drawer: null,
      items: [
          
          { title: 'Dashboard',icon: 'mdi-shield-account', to: '/admin', role: '3' },
          { title: 'Wallet Transactions',icon: 'mdi-clipboard-text', to: '/list-transactions',role: '1' },
          { title: 'Withdrawals',icon: 'mdi-clipboard-text', to: '/withdrawals',role: '1' },
          { title: 'Contributors',icon: 'mdi-clipboard-text', to: '/list-contributors',role: '1' },
          { title: 'View Contributions',icon: 'mdi-clipboard-text', to: '/view-contributions',role: '1' },
          { title: 'Investment',icon: 'mdi-clipboard-text', to: '/list-investments',role: '1' },
          { title: 'Loans',icon: 'mdi-clipboard-text', to: '/list-loans',role: '1' },
          { title: 'Generate Transaction Code', icon: 'mdi-format-list-checks', to: '/generate-transaction-code',role: '1' },
          { title: 'Setup Phases', icon: 'mdi-format-list-checks', to: '/phases-setup',role: '1' },
          { title: 'Setup Contribution', icon: 'mdi-bank', to: '/contribution-setup',role: '1' },            
          { title: 'Setup Investment',icon: 'mdi-clipboard-text', to: '/investment-setup',role: '1' },
          { title: 'Setup Loan',icon: 'mdi-clipboard-text', to: '/loan-setup',role: '1' },
          { title: 'Logout', icon: 'mdi-lock', to: '/', role: '1' },
       
      ],

    user_role: '',
      
     }),

     beforeMount(){
        const list = this.loadAdminDashboard();
    },
     methods: {
        formatMoney(num) {
        return Number(num).toLocaleString("en-US", {
            //style: "currency",
            currency: "ngn"
        });
        },
       
    async loadAdminDashboard(){
        try{
    const response = await this.$http.get('/admin-dashboard', )
    this.user_role = response.data.data.user_role;
    
    console.log(response);
        }catch (err) {
                        console.log(err);
            }
        },

      },
  }
</script>
<style>
.nav {
    background:#F58634 !important;
}
.appBar{
background:#F58634 !important;
}
.vMain {
margin-top:20px;
}

</style>