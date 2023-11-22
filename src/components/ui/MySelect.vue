<template>
  <select :value="selectedValue" @change="changeOption">
    <option disabled value="">Choice filter</option>
    <option v-for="option in options" :value="option.value" :key="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "MySelect",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    selectedValue: {
      type: String,
    },
  },
  methods: {
    changeOption(evt) {
      this.$emit("update:selectedValue", evt.target.value);
    },
  },
};
</script>

<style scoped>
select {
  margin-bottom: 10px;
  padding: 5px;
  min-width: 200px;
  cursor: pointer;
}
</style>
