<template>
  <main>
    <my-counter title="My counter" />
    <my-list
      :posts="sortedFilteredPosts"
      @createPost="createPost"
      @removePost="deleteItem"
      :options="options"
    >
      <my-input
        v-model:modelValue="inputValue"
        type="text"
        placeholder="search by title" />

      <my-select
        v-model:selectedValue="selectedValue"
        :options="options"
      ></my-select
    ></my-list>
    <h2 v-if="isLoading">Loading...</h2>
  </main>
</template>

<script>
import MyCounter from "./components/MyCounter.vue";
import MyList from "./components/MyList.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    MyCounter,
    MyList,
  },
  data() {
    return {
      posts: [],
      isLoading: true,
      options: [
        { name: "id", value: "id" },
        { name: "title", value: "title" },
      ],
      selectedValue: "",
      inputValue: "",
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    searchInput(value) {
      this.posts = this.posts.filter((item) => {
        return (
          item.title.includes(value) ||
          item.body.includes(value) ||
          item.id.toString().includes(value)
        );
      });
    },
    deleteItem(post) {
      this.posts = this.posts.filter((item) => {
        return item.id !== post.id;
      });
    },
    async getPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.getPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedValue]
          ?.toString()
          .localeCompare(post2[this.selectedValue].toString())
      );
    },
    sortedFilteredPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.includes(this.inputValue)
      );
    },
  },
  watch: {
    selectedValue(newValue) {
      this.posts = this.posts.sort((post1, post2) => {
        return post1[newValue]
          .toString()
          .localeCompare(post2[newValue].toString());
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: rgb(46, 46, 46);
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  text-decoration: underline;
  margin-bottom: 10px;
}
</style>
