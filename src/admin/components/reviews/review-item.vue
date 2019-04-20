<template lang="pug">
  .review-card__item 
    .review-card__header
      img(:src="renderPhotoUrl").review-card__avatar
      .review-card__descr
        .review-descr__name {{review.author}}
        .review-descr__prof {{review.occ}} 
    .review-card__content
      h3 {{review.text}}
    .review-card__footer
      .works-card__control
        .works-card__control-edit
          .works-card__text Править
          button(
            type="button"
            @click="editCurrentCard"
            ).card-button.card-button--edit.card-button--color
        .works-card__control-remove   
          .works-card__text Удалить
          button(
            type="button"
            @click="removeCurrentCard"
            ).card-button.card-button--remove
</template>

<script>
  import {mapActions} from "vuex";
  import $axios from "@/requests";

  export default {
    name: "ReviewsItem",

    data(){
      return{
        isEditMode: false
      }
    },

    props:{
      review: Object
    },

    computed: {
      renderPhotoUrl(){
        return this.getAbsoluteImagePath(this.review.photo);
      }
    },

    methods:{
      ...mapActions('reviews', ['removeReviewCard', 'editReviewCard']),

      getAbsoluteImagePath(imagePath){
        const baseUrl = $axios.defaults.baseURL;
        return `${baseUrl}/${imagePath}`
      },

      async removeCurrentCard(){
        try{
          await this.removeReviewCard(this.review.id);
        }catch(error){
          throw new Error(
            console.log(error)
          )
        };
      },

      async editCurrentCard(){
        try{
          await this.editReviewCard(this.review);
        }catch(error){
          throw new Error(
            console.log(error)
          )
        };
      },

    }
  }

</script>


<style lang="postcss" scoped>
  @import "../../../styles/mixins.pcss";
  
  .review-card__item{
    display: flex;
    flex-direction: column;
    max-width: 340px;
    max-height: 380px;
    margin-right: 30px;
    margin-bottom: 30px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    padding: 30px;

    &:last-child{
      margin-right: 0;
    }
    @include phones{
      margin-right: 0;
    }
  }

  .review-card__header{
    display: flex;
    width: 100%;
    margin-bottom: 40px;
  }

  .review-card__avatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .review-descr__name{
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 700;
  }

  .review-descr__prof{
    opacity: 0.5;
  }

  .review-card__content{
    display: block;
    margin-bottom: 85px;
    max-height: 107px;
    opacity: 0.7;
    line-height: 30px;
  }

</style>