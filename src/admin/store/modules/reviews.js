export default{
  namespaced: true,

  state: {
    reviews: []
  },

  mutations:{
    ADD_REVIEW: (state, newReview) => {
      state.reviews.unshift(newReview);
    },
    SET_REVIEW: (state, reviews) => {
      state.reviews = reviews;
    },
    REMOVE_REVIEW: (state, deletedReviewId) => {
      state.reviews = state.reviews.filter(review =>
        review.id !== deletedReviewId)
    },
    EDIT_REVIEW: (state, editedReview) => {
      state.reviews = state.reviews.map(review =>
        review.id === editedReview.id ? editedReview : review)
    }
  },

  actions:{

    async addReviewCard({commit}, review){

      // форма отправки данных
      let formData = new FormData();
      formData.append("photo", review.photo);
      formData.append("author", review.author);
      formData.append("occ", review.occ);
      formData.append("text", review.text);
      
      try{
        const response = await this.$axios.post('/reviews', formData);
        commit('ADD_REVIEW', response.data);
        return response;
      }catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        )};
    },

    async fetchReviewCards({commit}){
      try{
        const response = await this.$axios.get('/reviews/124');
        commit('SET_REVIEW', response.data);
        return response;           
      }catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        )};
      },

    async removeReviewCard({commit}, reviewId) {
      try {
        const response = await this.$axios.delete(`/reviews/${reviewId}`);
        commit('REMOVE_REVIEW', reviewId);
        return response;
      }catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        )};
    },

    async editReviewCard({commit}, review) {
      // форма отправки данных
      let formData = new FormData();
      formData.append("photo", review.photo);
      formData.append("author", review.author);
      formData.append("occ", review.occ);
      formData.append("text", review.text);

      try {
        const response = await this.$axios.post(`/reviews/${review.id}`, formData);
        commit('EDIT_REVIEW', response.data.review);
        return response;
      }catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        )};
      }

    }
}