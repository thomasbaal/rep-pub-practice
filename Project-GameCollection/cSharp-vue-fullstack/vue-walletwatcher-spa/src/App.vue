<template>
  <div id="app">
    <FormAddAddress @formSubmitted="handleFormSubmit" />
  </div>
</template>

<script>
import FormAddAddress from "./components/FormAddAddress.vue";

export default {
  name: "App",
  components: {
    FormAddAddress,
  },
  methods: {
    handleFormSubmit(address) {
      console.log(address);
      // Add your logic to handle the form submission
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
