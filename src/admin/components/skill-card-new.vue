<template lang="pug">
  .skill-card
    .card-header
      .card-header__title Название новой группы
      .card-header__button 
        button(type="button").card-button.card-button--save
        button(type="button").card-button.card-button--remove
    .card-content
    .card-footer
      input(type="text" placeholder="Новый навык").new-skill
      input(type="number" placeholder="100 %" max="100").new-procent
      AddButton 
</template>


<script>
  export default {
    components:{
      AddButton: () => import('./add-button.vue'),
    },
  }
</script>

<style lang="pcss" scoped></style>