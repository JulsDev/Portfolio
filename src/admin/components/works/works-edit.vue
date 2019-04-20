<template lang="pug">
  .works-edit
    .works-edit__title Редактирование работы
    
    form.works-edit__content
      .works-edit__loader.works-edit__loader-tabl(
        :style="{'backgroundImage': `url(${this.renderPhotoUrl})`}"
        )
        .works-edit__loader-text
          label(
            for="work-img-tabl"
            ).changeButton Изменить превью
            input(
              type="file"
              id="work-img-tabl"
              name="work-img"
              required
              @change="appendFileAndRenderPhoto"
              ).works-tabl-image

      .works-edit__loader(
        :style="{'backgroundImage': `url(${this.renderPhotoUrl})`}"
        )
        .works-edit__loader-text(v-if="isAddPhoto === false")
          .loader-text Перетащите или загрузите <br> для загрузки изображения
          label(
            for="work-img"
            ).loadButton Загрузить
            input(
              type="file"
              id="work-img"
              name="work-img"
              required
              @change="appendFileAndRenderPhoto"
              ).works-edit__loader-input

      .works-edit__descr
        form.works-form
          .works-form__row
            label.works-form__label Название
            input(
              type='text'
              v-model="work.title"
              name='name'
              placeholder="Вставьте название"
              ).works-form__input
          
          .works-form__row
            label.works-form__label Ссылка
            input(
              type='text'
              v-model="work.link"
              name='link'
              placeholder="Добавьте ссылку"
              ).works-form__input
          
          .works-form__row
            label.works-form__label Описание
            textarea(
              type="text"
              v-model="work.description"
              name="description"
              rows="4" 
              required
              placeholder="Добавьте описание"
              ).works-form__textarea
          
          .works-form__row
            label.works-form__label Добавление тэга
            input(
              type='text'
              v-model="work.techs"
              name='tag'
              placeholder="Jquery, Vue.js, HTML5"
              ).works-form__input
          
          .works-form__row
            ul.works-form__tags
              li.form-tags__item(v-for="(tag, index) in createTagsArray")
                span.form-tag-text {{ tag }}
                button(
                  type="button"
                  @click="updateTagsArray(index)"
                  ).card-button.card-button--remove.form-button--remove

          .works-form__row
            .works-form__row--btn
              button(
                type="button"
                @click="$emit('CloseWorkForm')"
                ).cancelButton Отмена
              button(
                type="button"
                @click="addNewWorkCard"
                ).saveButton Сохранить
</template>


<script>
import {mapActions} from "vuex"

  export default {
    name: "WorksEdit",

    data(){
      return{
        isAddPhoto: false,
        renderPhotoUrl: "",
        work:{
          title: "",
          techs: "",
          photo: "",
          link: "",
          description: ""
        }
      }
    },
    computed: {
      createTagsArray(){
        if(this.work.techs === "") return [];
        else{
          return this.work.techs.split(', ');
        }
      }
    },

    methods:{
      ...mapActions('works', ['addWorkCard']),
      
      appendFileAndRenderPhoto(e) {
        const file = e.target.files[0];
        this.work.photo = file;
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

      async addNewWorkCard(){
        try{
          await this.addWorkCard(this.work);
          this.$emit('CloseWorkForm');
        }catch(error){
          throw new Error(
            console.error(error.message)
          )
        }
      },

      updateTagsArray (index) {
        let copyTagsArray = this.work.techs.split(', ').slice(0);
        copyTagsArray.splice(index, 1);
        this.work.techs = copyTagsArray.join(", ");
      },
    },
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

  .loadButton{
    display: block;
    padding: 20px 42px;
    max-width: 181px;
    max-height: 60px;
    border-radius: 30px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;

    @include tablets{
      display: none;
    }
  } 

</style>