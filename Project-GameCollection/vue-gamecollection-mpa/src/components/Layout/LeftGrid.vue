<template>
  <connection-status :sqlCheck="isSqlAvailable"></connection-status>
</template>

<script>
import axios from "axios";
import ConnectionStatus from "./ConnectionStatus.vue";
// import GridButtons from "./GridButtons.vue";

export default {
  data() {
    return {
      // sett til false etter build
      isSqlAvailable: true,
      isFireBaseAvailable: false,
    };
  },
  components: {
    // GridButtons,
    ConnectionStatus,
  },
  methods: {
    // async testDatabaseConnection() {
    //   try {
    //     const response = await axios.get("/api/test-connection");
    //     console.log("Connection test succeeded:", response.data);
    //     this.isSqlAvailable = true;
    //   } catch (error) {
    //     console.error("Connection test failed:", error);
    //     this.isSqlAvailable = false;
    //   }
    // },
    async testDatabaseConnection() {
      try {
        const response = await axios.get("https://localhost:7248/people");
        console.log("Connection test succeeded:", response.data);
        this.isSqlAvailable = true;
      } catch (error) {
        console.error("Connection test failed:", error);
        this.isSqlAvailable = false;
      }
    },
    mounted() {
      this.testDatabaseConnection();
    },
  },
};
</script>

<style scoped>
/* .left-grid {
  background-color: #d15e1b;

  border-right-style: double;
  border-right-color: #1f1f1f;
  padding: 20px;
} */
.connect-success {
  width: 12px;
  height: 12px;
  background-color: rgb(85, 241, 85);
  border-radius: 50%;
}
.connect-fail {
  width: 12px;
  height: 12px;
  background-color: red;
  border-radius: 50%;
}
</style>
