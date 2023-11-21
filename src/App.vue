<template>
  <CounterLikeDislike title="My counter" />
  <MyList :posts="posts" @createPost="createPost" />
</template>

<script>
import CounterLikeDislike from "./components/MyCounter.vue";
import MyList from "./components/MyList.vue";
export default {
  name: "App",
  components: {
    CounterLikeDislike,
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
button {
  background-color: rgb(127, 157, 255);
  border: 0;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  width: 200px;
}

h2 {
  text-decoration: underline;
  margin-bottom: 10px;
}
</style>
