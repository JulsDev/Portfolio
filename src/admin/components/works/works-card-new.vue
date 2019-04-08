<template lang="pug">
  .works-card-new
    button(type="button").add-work-btn
      .works-card-new__icon
      .works-card-new__title Добавить <br> работу
</template>

<script>
export default {
  name: "WorksCardNew",
}
</script>

<style lang="postcss">

  @import "../../../styles/mixins.pcss";

  .works-card-new{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 164px 95px ;
    max-width: 335px;
    max-height: 556px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);

    @include phones{
      padding: 12% 27%;
      max-height: 110px;
    }
  }

  .add-work-btn{
    display: flex;
    flex-direction: column;
    align-items: center;

    @include phones{
      flex-direction: row;
      align-items: center;
    }
  }

  .works-card-new__icon{
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid #ffff;
    margin-bottom: 30px;

    &:after{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: "+";
      color: #ffffff;
      font-size: 72px;
      font-weight: 200;

      @include phones{
        font-size: 42px;
      }
    }

    @include phones{
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
  }

  .works-card-new__title{
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 700;
  }

</style>