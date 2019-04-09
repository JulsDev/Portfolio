<template lang="pug">
  .admin-content
    template
      Header
      Navigation
      router-view
      // About(:skillsInfo="skillsInfo")
      // Works
      // Reviews
      // Login

</template>

<script>

import { mapState, mapActions, mapGetters } from "vuex";

export default {
  
  data(){
    return{
      skillsInfo: {}
    }
  },
  components: {
    Header: () => import('./components/common/header.vue'),
    Navigation: () => import('./components/common/navigation.vue'),
    // About: () => import('./components/about/about.vue'),
    // Works: () => import('./components/works/works.vue'),
    // Reviews: () => import('./components/reviews/reviews.vue'),
    // Login: () => import('./components/login/login.vue'),
  },
  created(){
    const data = require("../data/skills.json");
    this.skillsInfo = data;
  }
}

</script>



<style lang="pcss">
  
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700,800&subset=cyrillic');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import '../styles/admin/*.pcss';

</style>

