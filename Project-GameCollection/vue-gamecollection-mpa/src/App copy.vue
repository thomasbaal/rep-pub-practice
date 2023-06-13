<template>
  <div class="app">
    <the-header></the-header>
    <div class="main">
      <div class="left-grid">
        <!-- Add your components here -->
        <connection-status></connection-status>
      </div>
      <!-- Other main content -->
    </div>
  </div>
</template>

<script>
import ConnectionStatus from "./components/Layout/ConnectionStatus.vue";
import TheHeader from "./components/Layout/TheHeader.vue";
export default {
  components: {
    ConnectionStatus,
    TheHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  font-family: "Jost";
  background-color: rgb(24, 24, 24);
  color: white;
}

.app {
  display: block; /* change from flex to block */
  height: 100vh;
}

.main {
  display: flex; /* apply flex to this div */
}

.left-grid {
  width: 20%;
  border-color: grey;
  border-right-style: double;
  display: flex;
  flex-direction: column;
}
</style>
