<template lang="pug">
  section.works
    .title.title-works Блок «Работы»
    WorksEdit
    WorksCards
</template>


<script>
  export default {
    name: "Works",
    components: {
      WorksEdit: () => import('./works-edit.vue'),
      WorksCards: () => import('./works-cards.vue'),
    },
  }
</script>


<style lang="pcss" scoped>
  .works{
    display: flex;
    flex-direction: column;
  }

  .title-works{
    margin-bottom: 61px;
  }

</style>