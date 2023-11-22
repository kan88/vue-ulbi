<template>
  <main>
    <my-counter title="My counter" />
    <my-list
      :posts="posts"
      @createPost="createPost"
      @removePost="deleteItem"
      v-model:selectedValue="selectedValue"
      :options="options"
    />
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
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
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
