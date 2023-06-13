<template>
  <div>
    <h2>Add New Watcher Address</h2>
    <form @submit.prevent="submitForm">
      <label>
        Address :
        <input v-model="ethAddress" type="text" required />
      </label>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ethAddress: "",
    };
  },
  methods: {
    submitForm() {
      // This event can be listened to by parent component (App.vue) and use the data as needed
      this.$emit("formSubmitted", this.ethAddress);
      // clear form
      this.ethAddress = "";
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 1rem;
}
button {
  /* margin-top: 1rem; */
}
</style>
