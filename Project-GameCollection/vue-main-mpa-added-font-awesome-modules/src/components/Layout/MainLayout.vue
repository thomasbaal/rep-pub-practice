<template>
  <div class="grid-container">
    <div class="header">
      <HeaderBackdrop>DASHBOARD</HeaderBackdrop>
    </div>
    <div class="menu">
      <MenuBackdrop></MenuBackdrop>
    </div>
    <div class="main">Main</div>
    <div class="footer">Footer</div>
  </div>
</template>

<script>
import MenuBackdrop from "./MenuBackdrop.vue";
import HeaderBackdrop from "./HeaderBackdrop.vue";

export default {
  name: "MainLayout",
  components: {
    MenuBackdrop,
    HeaderBackdrop,
  },
};
</script>

<style>
.header {
  grid-area: header;
}
.menu {
  grid-area: menu;
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
  padding: 10px;
  background-color: #1e1e2f;
  color: white;
  text-align: center;
  font-size: 20px;
  height: 100vh;
}
</style>
