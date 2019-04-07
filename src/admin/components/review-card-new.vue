<template lang="pug">
  .review-card-new
    button(type="button").add-work-btn
      .works-card-new__icon
      .works-card-new__title Добавить <br> отзыв
</template>

<script>
export default {
  name: "ReviewCardNew",
}
</script>

<style lang="pcss">

  @import "../../styles/mixins.pcss";

  .review-card-new{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 164px 95px ;
    max-width: 335px;
    max-height: 380px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);

    @include phones{
      padding: 10% 25%;
    }
  }
</style>