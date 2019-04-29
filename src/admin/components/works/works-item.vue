<template lang="pug">
  .works-card__item
    .works-card__header
      img(:src="renderPhotoUrl").works-card__image
      ul.works-form__tags.form__tags-list
        li(v-for="tag in createTagsArray").form-tags__item.form__tags {{ tag }}
    .works-card__content
      .works-card__title {{work.title}}
      .works-card__descr 
        p {{work.description}}
      a(:href="work.link").works-card__link {{work.link}}
      .works-card__control
        .works-card__control-edit
          .works-card__text Править
          button(
            type="button"
            @click="editWorkCard"
            ).card-button.card-button--edit.card-button--color
        .works-card__control-remove   
          .works-card__text Удалить
          button(
            type="button"
            @click="removeWorkCard"
            ).card-button.card-button--remove

</template>

<script>
import { mapActions } from 'vuex';
import $axios from "@/requests";

  export default {
    name: "WorksItem",   
    props: {
      work: Object,
      isFormShow: Boolean,
      formMode: String
    },

    computed: {
      renderPhotoUrl(){
        return this.getAbsoluteImagePath(this.work.photo);
      },
      createTagsArray(){
        console.log(this.work.techs);
        return this.work.techs.split(', ');
      },  
    },

    methods:{
      ...mapActions('works', ['removeCard']),

      getAbsoluteImagePath(imagePath){
        const baseUrl = $axios.defaults.baseURL;
        return `${baseUrl}/${imagePath}`
      },

      async removeWorkCard(){
        try{
          await this.removeCard(this.work.id);
        }catch(error){
          console.log(error)
        }
      },

      editWorkCard(){
        //this.formMode = "editCard";
      }
    }
  }
</script>

<style lang="postcss">
  .works-card__item{
    display: flex;
    flex-direction: column;
  }
</style>