<template lang="pug">
  .works-cards
    ul.works-card__list
      li.works-card__item-new
        WorksCardNew
      li.works-card__item.works-card__item-opacity
        .works-card__header
          img(src="../../images/content/works/slider-2.jpg").works-card__image
          ul.works-form__tags.form__tags-list
            li.form-tags__item.form__tags HTML
            li.form-tags__item.form__tags CSS
            li.form-tags__item.form__tags Javascript
        .works-card__content
          .works-card__title Сайт школы образования
          .works-card__descr 
            p Эта девушка проходила обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          .works-card__link http://loftschool.ru
          .works-card__control
            .works-card__control-edit
              .works-card__text Править
              button(type="button" style="").card-button.card-button--edit.card-button--color
            .works-card__control-remove
              .works-card__text Удалить
              button(type="button" style="").card-button.card-button--remove
      li.works-card__item
        .works-card__header
          img(src="../../images/content/works/slider-1.jpg").works-card__image
        .works-card__content
          .works-card__title Сайт школы образования
          .works-card__descr 
            p Эта девушка проходила обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          .works-card__link http://loftschool.ru
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
    name: "WorksCards",
    components: {
      WorksCardNew: () => import('./works-card-new.vue'),
    },
  }
</script>


<style lang="pcss" scoped></style>