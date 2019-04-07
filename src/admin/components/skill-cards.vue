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
    props:{
      skillsInfo: Array
    },
    data(){
      return{  
      }
    },
    components:{
      SkillCard: () => import('./skill-card.vue'),
      SkillCardNew: () => import('./skill-card-new.vue'),
    },
  }
</script>

<style lang="postcss" scoped></style>