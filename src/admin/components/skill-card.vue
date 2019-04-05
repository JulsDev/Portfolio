<template lang="pug">
  .skill-card
    .card-header
      .card-header__title {{skillsInfo.skillsGroup}}
      .card-header__button 
        button(type="button").card-button.card-button--save
        button(type="button").card-button.card-button--remove
    .card-content
      table.card-skills__table
        tr.card-skills__row(v-for="(skillPercent, skillName) in skillsInfo.skills")
            td.card-skills__col.card-skills__col-name {{skillName}}
            td.card-skills__col.card-skills__col-percent {{skillPercent}}
            td.card-skills__col.card-skills__col-sign %
            td.card-skills__col
              .card-skills__col-button
                button(type="button" style="").card-button.card-button--edit
                button(type="button" style="").card-button.card-button--trash
    .card-footer
      input(type="text" placeholder="Новый навык").new-skill
      input(type="number" placeholder="100 %" max="100").new-procent
      AddButton 
</template>


<script>
  export default {
    name:"SkillCard",
    props:{
      skillsInfo: Array
    },
    data(){
      return{  
      }
    },
    components:{
      AddButton: () => import('./add-button.vue'),
    },
  }
</script>

<style lang="pcss"></style>