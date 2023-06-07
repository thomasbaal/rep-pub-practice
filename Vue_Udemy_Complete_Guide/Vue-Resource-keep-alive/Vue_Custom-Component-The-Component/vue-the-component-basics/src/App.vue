<template>
  <button @click="setSelectedPage('page-main')">Page 1</button>
  <button @click="setSelectedPage('page-resources')">Page 2</button>
  <!-- <page-main></page-main>
  <page-resources></page-resources> -->
  <component :is="selectedComponent"></component>
</template>

<script>
import PageMain from "./components/PageMain.vue";
import PageResources from "./components/PageResources.vue";

export default {
  name: "App",
  data() {
    return {
      selectedComponent: "page-main",
    };
  },
  components: {
    PageMain,
    PageResources,
  },
  methods: {
    setSelectedPage(page) {
      this.selectedComponent = page;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
