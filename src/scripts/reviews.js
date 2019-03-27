import Vue from 'vue';

new Vue({
  el: "#reviews-component",
  template: "#reviews-list",
  data(){
    return{
      reviews: {}
    }
  },
  created(){
    const data = require("../data/reviews.json");
    this.reviews = data;
  }
})