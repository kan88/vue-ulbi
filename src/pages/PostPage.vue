<template>
  <main>
    <my-list :posts="sortedFilteredPosts" :options="options">
      <my-input
        v-focus
        :model-value="inputValue"
        @update:model-value="setInput"
        type="text"
        placeholder="search by title" />

      <my-select
        :model-value:selectedValue="selectedValue"
        @update:model-value="setSelect"
        :options="options"
      ></my-select
    ></my-list>
    <h2 v-if="isLoading">Loading...</h2>
    <div v-intersection="getPosts" class="observer"></div>
  </main>
</template>

<script>
import MyList from "@/components/MyList.vue";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "App",
  components: {
    MyList,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({ getPosts: "getPosts" }),
    ...mapMutations({
      setInput: "setInput",
      setSelect: "setSelect",
      createPost: "posts/createPost",
    }),
  },
  mounted() {
    this.getPosts();
  },
  computed: {
    ...mapState({
      options: (state) => state.posts.options,
      isLoading: (state) => state.posts.isLoading,
      selectedValue: (state) => state.posts.selectedValue,
      inputValue: (state) => state.posts.inputValue,
    }),
    ...mapGetters({ sortedFilteredPosts: "sortedFilteredPosts" }),
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
