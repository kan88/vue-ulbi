<template>
  <section>
    <h2>My list</h2>
    <my-button @click="this.show = true">Add new Post</my-button>
    <slot></slot>

    <my-modal v-model:show="show">
      <h2>Form new post</h2>
      <form @submit.prevent>
        <my-input
          v-focus
          v-model.trim="post.title"
          type="text"
          placeholder="title"
        />
        <my-input v-model.trim="post.body" type="text" placeholder="body" />
        <my-button @click="addPost">New Post</my-button>
      </form>
    </my-modal>
    <ul v-if="posts.length > 0">
      <transition-group name="post-list">
        <my-item
          v-for="post in posts"
          :key="post.title"
          :post="post"
          @click="removePost(post)"
        />
      </transition-group>
    </ul>
    <h2 v-else style="color: red">List is empty</h2>
  </section>
</template>

<script>
import MyItem from "./MyItem.vue";
import { mapMutations } from "vuex";

export default {
  name: "MyList",
  components: { MyItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
      show: false,
    };
  },
  methods: {
    ...mapMutations({
      removePost: "deleteItem",
      createPost: "createPost",
    }),
    addPost() {
      this.createPost({
        id: Date.now(),
        body: this.post.body,
        title: this.post.title,
      });
      this.show = !this.show;
      this.post.title = "";
      this.post.body = "";
    },
  },
  // watch: {
  //   post: {
  //     handler(newValue) {
  //       console.log(newValue);
  //     },
  //     deep: true,
  //   },
  // },
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

ul {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  max-width: 800px;
  gap: 30px;
  justify-content: center;
}

button {
  margin-bottom: 30px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
