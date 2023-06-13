<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style scoped>
.button {
  background-color: blue;
  color: white;
  padding: 5px;
  border: 10px;
  border-color: red;
  border-radius: 4px;
  cursor: pointer;
}
</style>
