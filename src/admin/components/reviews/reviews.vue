<template lang="pug">
  .admin-section
    .admin-container
      section.reviews
        .title.title-reviews Блок «Отзывы»
        ReviewCreate
        ReviewCards
</template>


<script>
  export default {
    name: "Reviews",
    components: {
      ReviewCreate: () => import('./review-create.vue'),
      ReviewCards: () => import('./review-cards.vue'),
    },
  }
</script>


<style lang="pcss" scoped>
  .reviews{
    display: flex;
    flex-direction: column;
  }

  .title-reviews{
    margin-bottom: 61px;
  }
</style>