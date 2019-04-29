<template lang="pug">
  .admin-section
    .admin-container
      section.works
        .title.title-works Блок «Работы»
        WorksEdit(
          v-if="showAddingForm"
          @CloseWorkForm="closeNewForm"
          )
        WorksCards(
          @addWorkForm="addNewForm"
          :isFormShow="isFormShow"
          )
</template>


<script>

  export default {
    name: "Works",
    data(){
      return {
        showAddingForm: false,
        isFormShow: false
      }
    },
    methods:{
      addNewForm(){
        this.showAddingForm = true;
        this.isFormShow = true;
      },
      closeNewForm(){
        this.showAddingForm = false;
        this.isFormShow = false;
      }
    },
    components: {
      WorksEdit: () => import('./works-edit.vue'),
      WorksCards: () => import('./works-cards.vue'),
    },
  }
</script>


<style lang="postcss" scoped>
  .works{
    display: flex;
    flex-direction: column;
  }
  .title-works{
    margin-bottom: 61px;
  }
</style>