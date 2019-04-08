<template lang="pug">
  button(type="button").saveButton Сохранить
</template>

<script>
export default {
  data(){
    return{
      name: "SaveButton"
    }
  }
}
</script>

<style lang="pcss">
  .saveButton{
    padding: 20px 42px;
    border-radius: 30px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    color: #ffffff;
    text-transform: uppercase;
  }
</style>