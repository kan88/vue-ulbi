<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: "MyButton",
  props: {},
};
</script>

<style>
button {
  background-color: rgb(127, 157, 255);
  border: 0;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  width: 80px;
}
</style>
