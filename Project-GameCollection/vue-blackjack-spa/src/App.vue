<template>
  <main-table></main-table>
</template>



<script>
import MainTable from "./components/layout/MainTable.vue";
export default {
  components: {
    MainTable,
  },
  data() {
    return {
      theme: {
        primaryColor: "#ff00000",
        secondaryColor: "#00ff00",
      },
    };
  },
};
</script>

<style>
</style>

