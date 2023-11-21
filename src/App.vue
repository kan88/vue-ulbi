<template>
  <my-counter title="My counter" />
  <my-list :posts="posts" @createPost="createPost" @removePost="deleteItem" />
</template>

<script>
import MyCounter from "./components/MyCounter.vue";
import MyList from "./components/MyList.vue";
export default {
  name: "App",
  components: {
    MyCounter,
    MyList,
  },
  data() {
    return {
      posts: [{ id: 1, title: "title", body: "body" }],
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
      f
    }
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

h2 {
  text-decoration: underline;
  margin-bottom: 10px;
}
</style>
