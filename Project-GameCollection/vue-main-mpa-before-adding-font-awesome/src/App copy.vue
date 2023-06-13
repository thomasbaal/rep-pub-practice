<template>
  <div class="grid-container">
    <div class="header">Header</div>
    <div class="menu">Menu</div>
    <div class="main">Main</div>
    <div class="footer">Footer</div>
  </div>
</template>

<script>
// import MainLayout from "./components/Layout/MainLayout.vue";

export default {
  components: {
    // MainLayout,
  },
};
</script>

<style>
.header {
  grid-area: header;
}
.menu {
  grid-area: menu;
  background-color: #41b27e;
  border-radius: 10px;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}

.grid-container {
  display: grid;
  grid-template-areas:
    "header header"
    "menu main "
    "footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 200px auto;

  gap: 10px;
  background-color: #2196f3;
  padding: 10px;
  background-color: #1e1e2f;
  color: white;
  text-align: center;
  font-size: 30px;
  height: 100vh;
}
</style>
