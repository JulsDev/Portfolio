<template lang="pug">
  section.about
    .about-block
      .about-block__title
        .title.title__about Блок «Обо мне»
        .about-block__button
          AddButton.addButton__small 
          .addButton__text Добавить группу
      .about-block__content
        SkillCardS(:skillsInfo="skillsInfo")
</template>


<script>
  export default {
    name: "About",
    props:{
      skillsInfo: Array
    },
    data(){
      return{  
      }
    },
    components: {
      AddButton: () => import('./add-button.vue'),
      SkillCardS: () => import('./skill-cards.vue'),
    },
  }
</script>


<style lang="pcss" scoped></style>