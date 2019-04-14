<template lang="pug">
  tr(v-if="editMode === false").card-skills__row
    td.card-skills__col.card-skills__col-name {{skill.title}}
    td.card-skills__col.card-skills__col-percent {{skill.percent}}
    td.card-skills__col.card-skills__col-sign %
    td.card-skills__col.card-skills__col-button
      .card-skills__button
        button(
          type="button"
          @click="editMode = true"
          ).card-button.card-button--edit
        button(
          type="button"
          @click="removeExistedSkill"
          ).card-button.card-button--trash

  tr(v-else).card-skills__row.card-skills__row--edit
    td
      input(type="text" v-model="editedSkill.title").card-skills__col.card-skills__col-name.card-skills__col-name--edit
    td
      input(type="text" v-model="editedSkill.percent").card-skills__col.card-skills__col-percent.card-skills__col-percent--edit
    td.card-skills__col.card-skills__col-sign %
    td.card-skills__col.card-skills__col-button
      .card-skills__button
        button(
          type="button"
          @click="saveEditSkill"
          ).card-button.card-button--save
        button(
          type="button"
          @click="editMode = false"
          ).card-button.card-button--remove
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: {
    skill: Object
  },
  data(){
    return{
      editMode: false,
      editedSkill: {...this.skill}
    }
  },
  methods: {
    ...mapActions('skills', ['removeSkill', 'editSkill']),

    async removeExistedSkill(){
      try{
        await this.removeSkill(this.skill.id);
      }catch(error){
        throw new Error(
          //error.response.error || error.response.message
        )
      }
    },
    async saveEditSkill(){
      try{
        await this.editSkill(this.editedSkill);
        this.editMode = false;
      }catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    }
  }
}
</script>
