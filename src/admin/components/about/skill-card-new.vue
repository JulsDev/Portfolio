<template lang="pug">
  .skill-card
    
    .card-header(v-if="editNewCardMode === false")
      input(
        type="text" 
        v-model="skillTitle" 
        placeholder="Название новой группы"
        ).card-header__title
      .card-header__button 
        button(
          type="button"
          @click="addSkillCard"
          ).card-button.card-button--save
        button(
          type="button"
          @click="editNewCardMode = false"
          ).card-button.card-button--remove
    
    .card-header(v-else)
      .card-header__title {{skillTitle}}
      .card-header__button 
        button(
          type="button"
          @click="editNewCardMode = false"
          ).card-button.card-button--edit
        button(
          type="button"
          @click="$emit('closeNewSkillCard')"
          ).card-button.card-button--trash


    .card-content.card-content__new-card
      table.card-skills__table
        SkillItem(
          v-for="skill in skills"
          :key="skill.id"
          :skill="skill"
        )
    .card-footer
      input(
        type="text"
        v-model="skill.title" 
        placeholder="Новый навык"
        ).new-skill
      input(
        type="number"
        v-model="skill.percent" 
        placeholder="100 %" 
        max="100"
        ).new-procent
      button.addButton(
        type="button" 
      )

</template>


<script>

import {mapActions} from "vuex";

  export default {
    name:"SkillCardNew",
    props:{
      skills: Array,
    },

    data(){
      return{
        editNewCardMode: false,
        editedCategory: {...this.category},
        skillTitle: "",
        skill: {
          category: this.category,
          title: "",
          percent: ""
        }
      };
    },
    
    methods:{
      ...mapActions('categories', ['addNewSkillCard']),
      ...mapActions('skills', ['addSkill']),      
      
      async addSkillCard(){
        this.editNewCardMode = true;
        try{
          this.addNewSkillCard(this.skillTitle);
        }catch(error){
          alert(error.message)
        }
      },
      async addNewSkill(){
        this.skill.title = this.skillTitle;

        console.log(this.skill);

        try{
          await this.addSkill(this.skill);
        }catch(error){
          throw new Error(
            //error.response.data.error || error.response.data.message
        )};
      }
    },

    components:{
      SkillItem: () => import('../about/skill-item.vue'),
    }
  }

</script>

<style lang="postcss" scoped></style>