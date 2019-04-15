<template lang="pug">
  button(type="button").loadButton Загрузить
</template>

<script>
export default {
  data(){
    return{
      name: "LoadButton"
    }
  }
}
</script>

<style lang="pcss">
  @import "../../../styles/mixins.pcss";

  .loadButton{
    display: block;
    width: 181px;
    height: 50px;
    border-radius: 25px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    color: #ffffff;
    text-transform: uppercase;

    @include tablets{
      display: none;
    }
  }
</style>