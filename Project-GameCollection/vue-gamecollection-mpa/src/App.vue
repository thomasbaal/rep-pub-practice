<template>
  <div id="app">
    <header>
      <!-- Put your header content here -->
      <the-header></the-header>
    </header>
    <div id="main-grid">
      <aside>
        <!-- Left grid (20%) content goes here -->
        <connection-status></connection-status>
      </aside>
      <main>
        <!-- Main grid (80%) content goes here -->
      </main>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/Layout/TheHeader.vue";
import ConnectionStatus from "./components/Layout/ConnectionStatus.vue";
export default {
  name: "App",
  components: {
    // your components here
    TheHeader,
    ConnectionStatus,
  },
};
</script>
,
    ConnectionStatus
<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
}

header {
  /* Style your header here */
  height: 50px;
  background-color: #1f1f1f;
  border-bottom: 5px double #837c7c; /* change to desired color and thickness */
}

#main-grid {
  display: grid;
  grid-template-columns: minmax(auto, 170px) 1fr; /* This will create a layout where the first 
  column (aside) takes 20% and the second one (main) takes 80% of the available space. */
  background-color: #181818;

  height: calc(
    100vh - 60px
  ); /* This will make your layout take full height of the screen, subtracting the header's height */
}

aside {
  /* Style your left grid here */
  background-color: #1f1f1f;
  color: #fff;
  padding: 10px;
  max-width: 170px;

  border-right: 5px double #837c7c;
}

main {
  /* Style your main grid here */
  padding: 10px;
}
</style>
