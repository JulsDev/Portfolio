<template lang="pug">
  .review-create
    .review-create__title Новый отзыв
    .review-create__content
      .review-avatar
        button(type="button").add-review-avatar-btn
          .review-avatar__icon
          .review-avatar__title Добавить фото
      .review-info
        .review-form
          .review-form__row
            .review-form__col
              label.review-form__label Имя автора
              input.review-form__input(type='text', name='tag', placeholder="Добавьте Ваше имя")
            .review-form__col
              label.review-form__label Титул автора
              input.review-form__input(type='text', name='tag', placeholder="Чем Вы занимаетесь?")
          .review-form__row
            .review-form__review
              label.review-form__label Отзыв
              textarea.review-form__textarea(type="text" name="description" rows="4" required
                        placeholder="Здесь можете оставить свой отзыв")

    .reviews-create__control   
      button(type="button").cancelButton Отмена
      SaveButton

</template>


<script>
  export default {
    name: "Reviews",
    components: {
      SaveButton: () => import('../common/button-save.vue'),
    },
  }
</script>


<style lang="postcss" scoped>

</style>