export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state,data) => (state.categories = data),
    ADD_CATEGORY: (state, category) => state.categories.push(category),
    ADD_SKILL: (state,newSkill) => {
      state.categories = state.categories.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      })
    },
    REMOVE_SKILL: (state,deletedSkill) => {
      const removeSkillInCategory = category => {
        category.skills = category.skills.filter(
          skill => skill.id !== deletedSkill.id
        );
      };
      const findCategory = category => {
        if (category.id === deletedSkill.category) {
          removeSkillInCategory(category)
        }
        return category;
      }
      state.categories = state.categories.map(findCategory);
    },
    EDIT_SKILL: (state,editedSkill) => {
      const editSkillInCategory = category => {
        category.skills = category.skills.map( skill => {
          return skill.id === editedSkill.id? editedSkill: skill;
        });
      };
      const findCategory = category => {
        if (category.id === editedSkill.category) {
          editSkillInCategory(category)
        }
        return category;
      }
      state.categories = state.categories.map(findCategory);
    }
  },
  actions: {
    async addCategory({commit},title) {
      try {
        const {data} = await this.$axios.post("/categories", {title});  
        commit("ADD_CATEGORY",data);
      } catch (error) {
        throw new Error (
          error.response.data.error || error.response.data.message
        );
      }      
    },
    async fetchCategories({commit}) {
      try {
        const {data} = await this.$axios.get("/categories/296")
        commit("SET_CATEGORIES",data);
      } catch (error) {
        error.response.data.error || error.response.data.message;     
      }
    }
  }
};