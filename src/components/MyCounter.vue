<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>Amount likes:{{ likes }}</h3>
    <h3>Amount dislikes:{{ dislikes }}</h3>
    <my-button @click="addLike">Like</my-button>
    <my-button @click="addDislike">DisLike</my-button>
  </section>
</template>

<script>
export default {
  name: "MyCounter",
  props: {
    title: String,
  },
  data() {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
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
  margin-bottom: 10px;
}
button {
  margin-bottom: 10px;
}
</style>
