<template>
  <nav>
    <button @click="$router.push('/')">logo</button>
    <ul>
      <li>
        <router-link to="/">Main Page</router-link>
      </li>
      <li>
        <router-link to="/counter">Counter Page</router-link>
      </li>
      <li>
        <router-link to="/posts">Posts Page</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "myNavBar",
};
</script>

<style scoped>
nav {
  width: 100%;
  padding: 20px 40px;
  background-color: aquamarine;
}
ul {
  display: flex;
  flex-direction: row;
  width: 350px;
  justify-content: space-between;
  list-style-type: none;
  margin: 0 auto;
}

button {
  width: 100px;
}
</style>
