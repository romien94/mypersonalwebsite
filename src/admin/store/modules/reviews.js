export default {
  namespaced: true,
  state: {
    reviews: []
  },
  mutations: {},
  actions: {
    async addReview(store,review) {
      try {
        const response = await this.$axios.post("/reviews",review)
      } catch (error) {
        throw new Error (
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
}