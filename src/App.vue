<template>
  <v-app app class="grey lighten-4" >
    <Navbar></Navbar>
 <v-content class="mx-4 mb-4 mt-4">
<router-view></router-view>
 </v-content>
  
  </v-app>
</template>



<script>

import Navbar from "./components/Navbar";

  export default {
  name: "App",

  components: {
    Navbar,
    
  },

  data(){
    return{
        bottomNav: 'recent'
    }
  }
};
</script>