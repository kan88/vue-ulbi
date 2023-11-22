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
    <ul class="pagination">
      <li
        class="pagination__item"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{
          'pagination__item--actual': page === pageNumber,
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </li>
    </ul>
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
      page: 1,
      limit: 4,
      totalPages: 0,
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
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    async getPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.posts = response.data;
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
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
        post.title.toLowerCase().includes(this.inputValue.toLowerCase())
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
    page() {
      this.getPosts();
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

.pagination {
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  justify-content: space-between;
  list-style-type: none;
}

.pagination__item {
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid gray;
  cursor: pointer;
}

.pagination__item--actual {
  background-color: rgb(183, 164, 150);
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid gray;
}
</style>
