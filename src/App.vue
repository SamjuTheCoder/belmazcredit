<template>
  <v-app>
    
     <v-main>
      <router-view/>
    </v-main>
  
  </v-app>
</template>

<script>
//import Header from '@/components/sideNav.vue';
export default {
  name: 'App',
  components: {
   // Header   
  },

  data: () => ({
    //
  }),
};
</script>
