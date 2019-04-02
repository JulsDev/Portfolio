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
      reviews: [],
      strafe: 0,
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        freeScroll: false,
        groupCells: window.screen.width > 480 ? 2 : 1,
      }
    };
  },
  methods: {
    arrWithRequiredImages(array) {
      return array.map(item => {
        const requredPic = require(`../images/content/${item["photo"]}`);
        item["photo"] = requredPic;

        return item;
      });
    },
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
    this.reviews = this.arrWithRequiredImages(data);;
  },
  mounted() {

  }
})