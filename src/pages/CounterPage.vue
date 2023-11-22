<template>
  <main>
    <my-counter title="My counter" />
  </main>
</template>

<script>
import MyCounter from "@/components/MyCounter.vue";
export default {
  name: "counterPage",
  components: {
    MyCounter,
  },
  data() {
    return {};
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

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  text-decoration: underline;
  margin-bottom: 10px;
}
</style>
