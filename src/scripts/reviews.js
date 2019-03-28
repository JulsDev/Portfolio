import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
  el: "#reviews-component",
  template: "#reviews-list",
  components: {
    Flickity
  },
  data() {
    return {
      reviews: {},
      strafe: 0,
      flickityOptions: {
        cellAlign: 'left',
        groupCells: 2,
        wrapAround: false,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: false,
      }
    };
  },
  methods: {
    slide(direction) {
      switch (direction) {
        case 'prev':
          this.$refs.flickity.previous();
          break;
        case 'next':
          this.$refs.flickity.next();
          break;
      }
    },
  },
  created(){
    const data = require("../data/reviews.json");
    this.reviews = data;
  },
  mounted() {

  }
})