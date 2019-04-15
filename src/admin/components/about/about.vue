<template lang="pug">
  .admin-section
    .admin-container
      section.about
        .about-block__title
          .title.title__about Блок «Обо мне»
          button.about-block__button(
            type="button"
            @click="showAddingForm = true"
            v-if="showAddingForm === false"
            )
            .addButton.addButton__small
            span.addButton__text  Добавить группу   
        .about-block__content
          .skill-cards
            //pre {{skills}}
            ul.skill-cards__list
              li.skill-cards__item(v-if="showAddingForm")
                SkillCardNew(@closeNewSkillCard="showAddingForm = false")
              li.skill-cards__item(
                v-for="category in categories"
                :key="category.id"
                )
                SkillCard(
                  :category="category"
                  :skills="filterSkillsByCategoryId(category.id)"
                  )
</template>


<script>
import {mapActions, mapState} from "vuex";
  export default {
    name: "About",
    data(){
      return{
        showAddingForm: false
      }
    },
    computed: {
      ...mapState('categories', {
        categories: state => state.categories
      }),
      ...mapState('skills', {
        skills: state => state.skills
      })
    },
    methods:{
      ...mapActions('categories', ['fetchCategories']),
      ...mapActions('skills', ['fetchSkill']),

      filterSkillsByCategoryId(categoryId){
        return this.skills.filter(skill => skill.category === categoryId); 
      }
    },
    async created(){
      try{
        // вызываем метод при загрузке страницы
        await this.fetchCategories();
      }catch(error){
        alert('Произошла ошибка при загрузке категорий')
      }

      try{
        await this.fetchSkill();
      }catch(error){
        alert('Произошла ошибка при загрузке скиллов')
      }
    },

    components: {
      SkillCard: () => import('./skill-card.vue'),
      SkillCardNew: () => import('./skill-card-new.vue'),
    }
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

  .addButton{
    position: relative;
    max-width: 40px;
    max-height: 40px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);

    &:after{
      content: "+";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 30px;
      font-weight: 700;
    }

    &__small{
      width: 18px;
      height: 18px;

      &:after{
        content: "+";
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
</style>