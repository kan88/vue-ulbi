<template>
  <main>
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
    <div ref="observer" class="observer"></div>
  </main>
</template>

<script>
import MyList from "@/components/MyList.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
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
    async getPosts() {
      try {
        console.log("mounted");

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.posts = [...this.posts, ...response.data];
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.page++;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.getPosts();

    let options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 1.0,
    };

    const callback = (entries) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.getPosts();
      }
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
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
  },
};
</script>

<style>
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

.observer {
  background-color: red;
  width: 30px;
  height: 30px;
}
</style>
