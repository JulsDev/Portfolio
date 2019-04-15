export default{
  namespaced: true,
  
  state:{
    categories:[]
  },

  mutations:{
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    DELETE_CATEGORY: (state, deleteCategory) => {
      state.categories = state.categories.filter(category => category.id != deleteCategory)
    },
    EDIT_CATEGORY: (state, editedCategory) => {
      state.categories = state.categories.map(category => 
        category.id === editedCategory.id ? editedCategory : category)
    }
  },

  actions:{
    // запрос на добавление данных на сервер
    async addNewSkillCard({commit}, groupTitle){

      try{
        const response = await this.$axios.post("/categories", {
          title: groupTitle
        });
        console.log("posst Message")
        return response;  
      }catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchCategories({commit}){
      try{
        // Обработка мутации, которая кладет значения в state
        const response = await this.$axios.get("/categories");
        commit("SET_CATEGORIES", response.data.reverse());
        return response;
      }catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async deleteCategory({commit}, categoryId){
      try{
        const response = await this.$axios.delete(`/categories/${categoryId}`);
        commit("DELETE_CATEGORY", categoryId);
        return response;
      }catch(error){
        throw new Error(
          //error.response.data.error || error.response.data.message
        );
      }
    },
    async editCategory({commit}, category){
      try{
        const response = await this.$axios.post(`/categories/${category.id}`, {
          title: category.category
        });
        commit('EDIT_CATEGORY', response.data.category);
        return response;
      }catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },

  }
};