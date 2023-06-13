<template>
  <div class="status-container">
    <div class="status-item">
      <div :class="isSqlAvailable ? 'connect-success' : 'connect-fail'"></div>
      <div>Mysql</div>
      <div v-if="isSqlAvailable">- Online</div>
      <div v-else>- Offline</div>
    </div>

    <!-- Other components -->
  </div>
  <div class="status-container">
    <div class="status-item">
      <div
        :class="isFireBaseAvailable ? 'connect-success' : 'connect-fail'"
      ></div>
      <div>Firebase</div>
      <div v-if="isFireBaseAvailable">- Online</div>
      <div v-else>- Offline</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // sett til false etter build
      isSqlAvailable: true,
      isFireBaseAvailable: false,
    };
  },
  methods: {
    async testDatabaseConnection() {
      try {
        const response = await axios.get("https://localhost:7248/people");
        console.log("Connection test succeeded:", response.data);
        console.log("Server IP Address: ", response.config.url);
        this.isSqlAvailable = true;
      } catch (error) {
        console.error("Connection test failed:", error);
        this.isSqlAvailable = false;
      }
    },
  },
  mounted() {
    this.testDatabaseConnection();
  },
};
</script>

<style scoped>
.status-container {
  padding-left: 5px;
  /* Existing styles */
}
.status-item {
  display: flex;
  align-items: center;
  gap: 10px; /* adjust as needed */
}
.connect-success {
  background-color: greenyellow;
  width: 10px;
  height: 10px;
}
.connect-fail {
  background-color: red;
  width: 10px;
  height: 10px;
}
</style>