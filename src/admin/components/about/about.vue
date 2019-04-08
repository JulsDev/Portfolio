<template lang="pug">
  .admin-section
    .admin-container
      section.about
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
      AddButton: () => import('../common/button-add.vue'),
      SkillCardS: () => import('./skill-cards.vue'),
    },
  }
</script>


<style lang="postcss" scoped>
  
  @import "../../../styles/mixins.pcss";
  
  .about{
    display: flex;
    flex-direction: column;
  }

  .about-block__title{
    display: flex;
    align-items: center;
    margin-bottom: 57px;

    @include phones{
      flex-direction: column;
      align-items: flex-start;
    } 
  }
  .title__about{
    margin-right: 65px;

    @include phones{
      margin-bottom: 36px;
    }
  }
  .about-block__button{
    display: flex;
  }
  .addButton__small{
    margin-right: 13px;
  }
  .addButton__text{
    color: #383bcf;
    font-family: "Open Sans - Semibold";
    font-size: 16px;
    font-weight: 600;
  }
  .about-block__content{
    display: flex;
  }

</style>