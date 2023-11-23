import axios from "axios";

export const postsModule = {
  state: () => ({
    posts: [],
    isLoading: true,
    options: [
      { name: "id", value: "id" },
      { name: "title", value: "title" },
    ],
    selectedValue: "",
    inputValue: "",
    page: 1,
    limit: 4,
    totalPages: 0,
  }),
  getters: {
    //computed
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedValue]
          ?.toString()
          .localeCompare(post2[state.selectedValue].toString())
      );
    },
    sortedFilteredPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.inputValue.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, boolean) {
      state.isLoading = boolean;
    },
    setSelect(state, value) {
      console.log("select");
      state.selectedValue = value;
    },
    setInput(state, value) {
      console.log("input");
      state.inputValue = value;
    },
    setLimit(state, value) {
      state.limit = value;
    },
    setPage(state, value) {
      state.page = value;
    },
    setTotalPages(state, value) {
      state.totalPages = value;
    },
    createPost(state, post) {
      state.posts.push(post);
    },
    deleteItem(state, post) {
      state.posts = state.posts.filter((item) => {
        return item.id !== post.id;
      });
    },
    selectedValue(state, newValue) {
      state.posts = state.posts.sort((post1, post2) => {
        return post1[newValue]
          .toString()
          .localeCompare(post2[newValue].toString());
      });
    },
  },
  actions: {
    async getPosts({ state, commit }) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit("setPosts", [...state.posts, ...response.data]);
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setPage", state.page++);
      } catch (error) {
        console.log(error);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  nameSpaced: true,
};
