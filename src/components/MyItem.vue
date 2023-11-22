<template>
  <li>
    <span>{{ post.id }}</span>
    <h4>{{ post.title }}</h4>
    <p>{{ post.body }}</p>
    <div>
      <my-button class="button" @click="$emit('removePost', post)"
        >Remove</my-button
      >
    </div>
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
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>

<style scoped>
li {
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 5px;
  flex: 1;
}
</style>
