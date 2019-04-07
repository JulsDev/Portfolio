<template lang="pug">
  .admin-content
    Header
    Navigation(:menu="menu")

    .admin-section
      .admin-container
        About(:skillsInfo="skillsInfo")
    .admin-section
      .admin-container
        Works
    .admin-section
      .admin-container
        Reviews

</template>

<script>
export default {
  
  data(){
    return{
      menu: ['Обо мне','Работы','Отзывы'],
      skillsInfo: {}
    }
  },
  components: {
    Header: () => import('./components/header.vue'),
    Navigation: () => import('./components/navigation.vue'),
    About: () => import('./components/about.vue'),
    Works: () => import('./components/works.vue'),
    Reviews: () => import('./components/reviews.vue'),
  },
  created(){
    const data = require("../data/skills.json");
    this.skillsInfo = data;
  }
}

</script>



<style lang="pcss">
  
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";

  @import '../styles/admin/*.pcss';

</style>

