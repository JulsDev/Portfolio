<template lang="pug">
  .works-edit
    .works-edit__title Редактирование работы
    .works-edit__content
      .works-edit__loader-tabl
        img(src="../../images/content/works/slider-1.jpg").works-tabl-image
        button(type="button").changeButton Изменить превью
      .works-edit__loader
        .works-edit__loader-text
          p.loader-text Перетащите или загрузите <br> для загрузки изображения
        .works-edit__loader-button
          LoadButton Загрузить
      .works-edit__descr
        .works-form
          .works-form__row
            label.works-form__label Название
            input.works-form__input(type='text', name='name', placeholder="Вставьте название")
          .works-form__row
            label.works-form__label Ссылка
            input.works-form__input(type='text', name='link', placeholder="Добавьте ссылку")
          .works-form__row
            label.works-form__label Описание
            textarea.works-form__textarea(type="text" name="description" rows="4" required
                        placeholder="Добавьте описание")
          .works-form__row
            label.works-form__label Добавление тэга
            input.works-form__input(type='text', name='tag', placeholder="Jquery, Vue.js, HTML5")
          .works-form__row
            ul.works-form__tags
              li.form-tags__item 
                span.form-tag-text HTML
                button(type="button").card-button.card-button--remove.form-button--remove
              li.form-tags__item
                span.form-tag-text CSS
                button(type="button").card-button.card-button--remove.form-button--remove
              li.form-tags__item
                span.form-tag-text Javascript
                button(type="button").card-button.card-button--remove.form-button--remove
          .works-form__row
            .works-form__row--btn
              button(type="button").cancelButton Отмена
              SaveButton
</template>


<script>
  export default {
    name: "WorksEdit",
    components: {
      AddButton: () => import('./button-add.vue'),
      LoadButton: () => import('./button-load.vue'),
      SaveButton: () => import('./button-save.vue'),
    },
  }
</script>


<style lang="pcss" scoped></style>