<template lang="pug">
  .review-cards
    ul.review-cards__list
      li.review-card__item--new
        ReviewCardNew
      li.review-card__item
        .review-card__header
          img(src="../../../images/content/reviews_wowa.jpg").review-card__avatar
          .review-card__descr
            .review-descr__name Владимир Сабанцев
            .review-descr__prof Преподаватель
        .review-card__content
          h3 Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
        .review-card__footer
          .works-card__control
            .works-card__control-edit
              .works-card__text Править
              button(type="button" style="").card-button.card-button--edit.card-button--color
            .works-card__control-remove
              .works-card__text Удалить
              button(type="button" style="").card-button.card-button--remove
      li.review-card__item
        .review-card__header
          img(src="../../../images/content/reviews_wowa.jpg").review-card__avatar
          .review-card__descr
            .review-descr__name Владимир Сабанцев
            .review-descr__prof Преподаватель
        .review-card__content
          h3 Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
        .review-card__footer
          .works-card__control
            .works-card__control-edit
              .works-card__text Править
              button(type="button" style="").card-button.card-button--edit.card-button--color
            .works-card__control-remove
              .works-card__text Удалить
              button(type="button" style="").card-button.card-button--remove

</template>


<script>
  export default {
    name: "ReviewCards",
    components: {
      ReviewCardNew: () => import('./review-card-new.vue'),
    },
  }
</script>


<style lang="postcss" scoped>

</style>