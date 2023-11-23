<template>
  <section>
    <h2>{{ $store.getters.getTitleDate }}</h2>
    <h3>Amount likes:{{ $store.state.likes.likes }}</h3>
    <h3>Amount dislikes:{{ $store.state.likes.dislikes }}</h3>
    <my-button @click="$store.commit('incrementLikes')">Like</my-button>
    <my-button @click="$store.commit('decrementLikes')">DisLike</my-button>
  </section>
</template>

<script>
export default {
  name: "MyCounter",
  props: {
    title: String,
  },
  data() {},
  methods: {},
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
