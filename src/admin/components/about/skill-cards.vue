<template lang="pug">
  .skill-cards
    ul.skill-cards__list
      li.skill-cards__item.skill-cards__item-new
        SkillCardNew
      li.skill-cards__item
        SkillCard(:skillsInfo="skillsInfo[0]")
      li.skill-cards__item
        SkillCard(:skillsInfo="skillsInfo[1]")
</template>


<script>
  export default {
    name: "SkillCards",
    data(){
      return{ 
        skillsInfo: Array
      }
    },
    components:{
      SkillCard: () => import('./skill-card.vue'),
      SkillCardNew: () => import('./skill-card-new.vue'),
    },
    created(){
      const data = require("../../../data/skills.json");
      this.skillsInfo = data;
    }

  }
</script>

<style lang="postcss" scoped></style>