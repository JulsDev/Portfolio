<template lang="pug">
  .admin-content
    template
      Header
      Navigation
      router-view
</template>

<script>

import { mapState, mapActions, mapGetters } from "vuex";

export default {
  
  components: {
    Header: () => import('./components/common/header.vue'),
    Navigation: () => import('./components/common/navigation.vue'),
  },
}

</script>



<style lang="pcss">
  
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700,800&subset=cyrillic');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import '../styles/admin/*.pcss';

</style>

