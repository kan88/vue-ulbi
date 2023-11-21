<template>
  <section>
    <h2>My list</h2>
    <form @submit.prevent>
      <input v-model="post.title" type="text" placeholder="title" />
      <input v-model="post.body" type="text" placeholder="body" />
      <button @click="addPost">New Post</button>
    </form>
    <ul v-for="post in posts" :key="post.id">
      <MyItem :post="post" />
    </ul>
  </section>
</template>

<script>
import MyItem from "./MyItem.vue";

export default {
  name: "MyList",
  components: { MyItem },
  props: {
    posts: Array,
  },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      this.$emit("createPost", {
        id: Date.now(),
        body: this.post.body,
        title: this.post.title,
      });
      this.post.title = "";
      this.post.body = "";
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  padding: 10px;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  padding: 5px;
  margin-bottom: 10px;
  min-width: 200px;
  border: 2px solid rgb(92, 92, 224);
  border-radius: 3px;
}

input:hover {
  border: 2px solid rgb(26, 118, 67);
}
</style>
