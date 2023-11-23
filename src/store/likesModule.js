export const likesModule = {
  state: () => ({ likes: 0, dislikes: 0, title: "Hello from counter. Today:" }),
  getters: {
    //computed
    getTitleDate(state) {
      return `${state.title} ${new Date().toLocaleDateString()}`;
    },
  },
  mutations: {
    incrementLikes(state) {
      state.likes++;
    },
    decrementLikes(state) {
      state.dislikes--;
    },
  },
  actions: {},
  modules: {},
};
