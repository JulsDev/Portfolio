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



<style lang="postcss" scoped>

  @import "../../styles/mixins.pcss";

  .navigation{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 77px;
    padding: 30px 70px;
  }

  .navigation-content{
    display: flex;
    background-color: #ffffff;
  }

  .nav-list{
    display: flex;
    align-items: center; 
  }

  .nav-item{
    display: flex;
    position: relative;
    margin-right: 60px;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 500;
    overflow: hidden; 

    &::after {
      content: " ";
      display: flex;
      width: 0;
      height: 3px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: #383bcf;
      transition: width 0.2s;
    }

    &:hover {
      &::after {
        width: 100%;
      }
      .nav-item__link {
        color: #383bcf;
        font-weight: 600;
      }
    }

    &:last-child{
      margin-right: 0;
    } 

    @include phones{
      margin-right: 40px;
    }
  }

  .nav-item__link {
    margin-right: 40px;
  }

</style>


