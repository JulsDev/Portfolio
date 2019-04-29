<template lang="pug">
  ul.review-cards__list
    li.review-card__btn
      button(
        type="button"
        @click="$emit('addFormReview')"
        ).add-review-btn
        .review-card-btn__icon
        .review-card-btn__title Добавить <br> отзыв
    
    ReviewsItem(
      v-for="review in reviews"
      :key="review.id"
      :review="review"
    )
</template>


<script>

  import {mapActions, mapState} from "vuex";

  export default {
    name: "ReviewCards",

    props:{
      isFormReviewShow: Boolean
    },

    computed: {
      ...mapState('reviews', {reviews: state => state.reviews}),
    },

    methods:{
      ...mapActions('reviews', ['fetchReviewCards']),
    },

    async created() {
      try {
          await this.fetchReviewCards();
      } catch (error) {
          console.log('Ошибка при загрузке данных!');
      }
    },

    components: {
      ReviewsItem: () => import('./review-item.vue'),
    },
  }
</script>


<style lang="postcss" scoped>
  
  @import "../../../styles/mixins.pcss";

  .review-cards__list{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  .review-card__btn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 164px 95px;
    max-width: 335px;
    max-height: 380px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    margin-bottom: 30px;
    margin-right: 30px;

    @include phones{
      padding: 10% 25%;
    }
  }

  .add-review-btn{
    display: flex;
    flex-direction: column;
    align-items: center;

    @include phones{
      flex-direction: row;
      align-items: center;
    }

    &:disabled{
      opacity: 0.5;
      cursor: initial;
    }
  }

  .review-card-btn__icon{
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

  .review-card-btn__title{
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 700;
  }

</style>