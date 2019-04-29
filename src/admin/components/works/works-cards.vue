<template lang="pug">
  
  ul.works-card__list 
    li.works-card-btn
      button(
        type="button"
        @click="$emit('addWorkForm')"
        :disabled="isFormShow"
        ).add-work-btn
        .works-card-btn__icon
        .works-card-btn__title Добавить <br> работу
    
    WorksItem(
      v-for="work in works"
      :key="work.id"
      :work="work"
    )

</template>


<script>
import {mapState, mapActions} from "vuex"

  export default {
    name: "WorksCards",

    props:{
      isFormShow: Boolean
    },

    computed: {
      ...mapState('works', {works: state => state.works}),
    },

    methods:{
      ...mapActions('works', ['fetchWorkCard']),
    },

    async created() {
      try {
          await this.fetchWorkCard();
      } catch (error) {
          console.log('Ошибка при загрузке данных!');
      }
    },

    components:{
      WorksItem: () => import('./works-item.vue'),
    }
  }
</script>


<style lang="postcss" scoped>
  @import "../../../styles/mixins.pcss";

  .works-card-btn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 164px 95px ;
    max-width: 335px;
    max-height: 556px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    margin-bottom: 30px;
    margin-right: 30px;

    @include phones{
      padding: 12% 27%;
      max-height: 110px;
    }
  }

  .add-work-btn{
    display: flex;
    flex-direction: column;
    align-items: center;

    @include phones{
      flex-direction: row;
      align-items: center;
    }

    &:disabled {
      opacity: 0.6;
      cursor: initial;
    }
  }

  .works-card-btn__icon{
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid #ffff;
    margin-bottom: 30px;

    &:after{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: "+";
      color: #ffffff;
      font-size: 72px;
      font-weight: 200;

      @include phones{
        font-size: 42px;
      }
    }

    @include phones{
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
  }

  .works-card-btn__title{
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 700;
  }

</style>