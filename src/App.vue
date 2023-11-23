<template>
  <div class="app">
    <h1>{{ $store.state.title }}</h1>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/MyNavBar";
export default {
  name: "App",
  components: {
    NavBar,
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
