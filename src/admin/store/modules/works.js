export default{
  namespaced: true,

  state: {
    works: []
  },
  mutations:{
    ADD_WORK: (state, newWork) => {
      state.works.unshift(newWork);
    },
    SET_WORK: (state, works) => {
      state.works = works;
    },
    REMOVE_WORK: (state, deletedWorkId) => {
      state.works = state.works.filter(work =>
        work.id !== deletedWorkId)
    },
    
    EDIT_WORK: (state, editedWork) => {
      state.works = state.works.map(work =>
        work.id === editedWork.id ? editedWork : work)
    },
  },

  actions:{
    async addWorkCard({commit}, work){
      // форма отправки данных
      let formData = new FormData();
      formData.append("title", work.title);
      formData.append("link", work.link);
      formData.append("techs", work.techs);
      formData.append("photo", work.photo);
      formData.append("description", work.description);

      try{
        const response = await this.$axios.post('/works', formData);
        commit('ADD_WORK', response.data);
        return response;
      }catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        )};
    },

    async fetchWorkCard({commit}){
      try{
        const response = await this.$axios.get('/works/124');
        commit('SET_WORK', response.data);
        return response;
      }catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        )};
    },
  
    async removeCard({commit}, workId) {
      try {
        const response = await this.$axios.delete(`/works/${workId}`);
        commit('REMOVE_WORK', workId);
        return response;
      }catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        )}
    },

    async editCard({commit}, work) {
      // обновляем форму
      let formData = new FormData();
      formData.append("title", work.title);
      formData.append("link", work.link);
      formData.append("techs", work.techs);
      formData.append("photo", work.photo);
      formData.append("description", work.description);

      try {
        const response = await this.$axios.post(`/works/${work.id}`, formData);
        commit('EDIT_WORK', response.data.work);
        return response;
      }catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        )}
      }
    }
  };