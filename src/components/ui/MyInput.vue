<template>
  <input :value="modelValue" @input="updateInput" type="text" />
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
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
