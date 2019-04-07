<template lang="pug">
  button(type="button").addButton
</template>

<script>
export default {
  data(){
    return{
      name: "AddButton"
    }
  }
}
</script>

<style lang="postcss" scoped>
  
  .addButton{
    position: relative;
    max-width: 40px;
    max-height: 40px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);

    &:after{
      content: "+";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 30px;
      font-weight: 700;
    }

    &__small{
      width: 18px;
      height: 18px;

      &:after{
        content: "+";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 18px;
        font-weight: 700;
      }
    }
  }

</style>