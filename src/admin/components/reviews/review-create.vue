<template lang="pug">
  .review-create
    .review-create__title Новый отзыв
    
    form.review-create__form     
      .review-avatar
        label.review-avatar__upload    
          .review-avatar__icon(:style="{'backgroundImage': `url(${this.renderPhotoUrl})`}")
            input(
              type="file"
              @change="appendFileAndRenderPhoto"
            ).review-avatar__icon-input
          .review-avatar-btn Добавить фото
    
      .review-info
        .review-form
          .review-form__row
            .review-form__col
              label.review-form__label Имя автора
              input(
                type='text'
                v-model="review.author"
                name='author'
                placeholder="Добавьте Ваше имя"
                ).review-form__input
            
            .review-form__col
              label.review-form__label Титул автора
              input(
                type='text'
                v-model="review.occ"
                name='tag'
                placeholder="Чем Вы занимаетесь?"
                ).review-form__input
          
          .review-form__row
            .review-form__review
              label.review-form__label Отзыв
              textarea(
                type="text"
                v-model="review.text"
                name="review"
                rows="4"
                required
                placeholder="Здесь можете оставить свой отзыв"
                ).review-form__textarea
   
    .reviews-create__control   
      button(
        type="button"
        @click="$emit('cancelAddFormReview')"
        ).cancelButton Отмена
      button(
        type="button"
        @click="addNewReviewCard"
        ).saveButton Сохранить

</template>


<script>

import {mapActions} from "vuex";

  export default {
    
    name: "Reviews",

    data(){
      return {
        renderPhotoUrl: "",
        review:{
          photo: "",
          author: "",
          occ: "",
          text: ""
        }
      }
    },

    methods: {

      ...mapActions('reviews', ['addReviewCard']),

      appendFileAndRenderPhoto(e) {
        const file = e.target.files[0];
        this.review.photo = file;
        const reader = new FileReader();
        try {
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.renderPhotoUrl = reader.result;
            this.isAddPhoto = true;
          };
        } catch (error) {
          console.error("Произошла ошибка при загрузке файла!");
        }
      },

      async addNewReviewCard(){
        try{
          await this.addReviewCard(this.review);
          this.$emit('cancelAddFormReview');
        }catch(error){
          console.log(error);
        }
      }
    }
  }
</script>


<style lang="postcss" scoped>
  @import "../../../styles/mixins.pcss";
  .saveButton{
    padding: 20px 42px;
    border-radius: 30px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    color: #ffffff;
    text-transform: uppercase;
  } 
</style>