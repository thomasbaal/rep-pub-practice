<template>
  <div class="header-backdrop">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  name: "MenuBackdrop",
};
</script>

<style scoped>
.header-backdrop {
  background-color: transparent;
  width: 100%; /* Modify these as per your requirement */
  height: 100%; /* Modify these as per your requirement */
  display: flex;
  justify-content: left;
  padding: 5px;
}
.menuHeader {
  border-bottom: 2px solid white;
}
</style>
