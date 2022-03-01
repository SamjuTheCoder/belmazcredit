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
  
          { title: 'Dashboard',icon: 'mdi-shield-account', to: '/user', role: '3' },
          { title: 'My Wallet',icon: 'mdi-clipboard-text', to: '/my-wallet', role: '3' },
          { title: 'My Investment',icon: 'mdi-clipboard-text', to: '/my-investment',role: '3' },
          { title: 'My Bank',icon: 'mdi-clipboard-text', to: '/my-bank', role: '3' },
          { title: 'Change Password',icon: 'mdi-clipboard-text', to: '/change-password', role: '3' },
          { title: 'Logout', icon: 'mdi-lock', to: '/', role: '3' },
             
      ],

    user_role: '',
      
     }),

     beforeMount(){
        const list = this.loadDashboard();
    },
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