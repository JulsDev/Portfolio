<template lang="pug">
  nav.navigation
    .navigation-content
      ul.nav-list(v-for="item in menu")
        li.nav-item
          a(href="#").nav-item__link {{item}}
</template>

<script>

  export default {
    name: "Navigation",
    props:{
      menu: Array
    },

    data(){
      return{  
      }
    }
  }

</script>



<style lang="pcss" scoped>
</style>


