<template lang="pug">
  .skill-card
    
    .card-header(v-if="editCardMode === false")
      .card-header__title {{category.category}}
      .card-header__button 
        button(
          type="button"
          @click="editCardMode = true"
          ).card-button.card-button--edit
        button(
          type="button"
          @click="deleteSkillCard"
          ).card-button.card-button--trash
    
    .card-header(v-else)
      input(type="text" v-model="editedCategory.category").card-header__title
      .card-header__button
        button(
          type="button"
          @click="saveEditCategory"
          ).card-button.card-button--save
        button(
          type="button"
          @click="editCardMode = false"
          ).card-button.card-button--remove
    
    .card-content
      table.card-skills__table
        SkillItem(
          v-for="skill in skills"
          :key="skill.id"
          :skill="skill"
        )
    
    .card-footer
      input(type="text" v-model="skill.title" placeholder="Новый навык").new-skill
      input(type="number" v-model="skill.percent" placeholder="100 %" max="100").new-procent
      button.addButton(
        type="button"
        @click="addNewSkill"
      ) 
</template>


<script>
import {mapActions} from "vuex";

  export default {
    name:"SkillCard",
    props:{
      category: Object,
      skills: Array,
    },
    components:{
      SkillItem: () => import('../about/skill-item.vue'),
    },
    data(){
      return{
        editCardMode: false,
        editedCategory: {...this.category},
        skill: {
          category: this.category.id,
          title: "",
          percent: ""
        }
      }
    },
    methods:{
      ...mapActions('categories', ['deleteCategory', 'editCategory']),
      ...mapActions('skills', ['addSkill']),      
      
      async addNewSkill(){
        console.log("addNewSkill");
        try{
          await this.addSkill(this.skill);
        }catch(error){
          throw new Error(
            error.response.data.error || error.response.data.message
        )};
      },
     
     async deleteSkillCard(){
        try{
          await this.deleteCategory(this.category.id); 
        }catch(error){
          throw new Error(
            //error.response.data.error || error.response.data.message
        )};
      },
      
     async saveEditCategory(){
        try{
          await this.editCategory(this.editedCategory);
          this.editCardMode = false; 
        }catch(error){
          throw new Error(
            //error.response.data.error || error.response.data.message
        )};
      },
    }
  }
</script>

<style lang="postcss" scoped>
  
  .addButton{
    position: relative;
    width: 40px;
    height: 40px;
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