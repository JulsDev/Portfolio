<template lang="pug">
  .admin-section
    .admin-container
      section.reviews
        .title.title-reviews Блок «Отзывы»
        ReviewCreate(
          v-if="isFormReviewShow"
          @cancelAddFormReview="cancelAddNewForm"
        )
        ReviewCards(
          @addFormReview="addNewForm"
        )
</template>


<script>
  export default {
    name: "Reviews",
    
    data(){
      return {
        isFormReviewShow: false,
      }
    },
    
    methods: {
      
      addNewForm(){
        this.isFormReviewShow = true;
      },

      cancelAddNewForm(){
        this.isFormReviewShow = false;
      }
    },

    components: {
      ReviewCreate: () => import('./review-create.vue'),
      ReviewCards: () => import('./review-cards.vue'),
    },
  }
</script>


<style lang="postcss" scoped>
  .reviews{
    display: flex;
    flex-direction: column;
  }

  .title-reviews{
    margin-bottom: 61px;
  }
</style>