<template>
  <li>
    <span>{{ post.id }}</span>
    <h4>{{ post.title }}</h4>
    <p>{{ post.body }}</p>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: {
    post: {
      id: Number,
      title: String,
      body: String,
    },
  },
};
</script>

<style scoped>
li {
  width: 100%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
