<template>
  <li>
    <h2>{{ firstName }} {{ lastName }}</h2>
    <button @click="toggleDetails">Show Details</button>
  </li>
  <ul v-if="isDetailsEnabled">
    <h3>
      <strong>Phone :</strong>
      {{ phoneNumber }}
    </h3>
    <strong>Email :</strong>
    <h3>{{ eMail }}</h3>
  </ul>
</template>

<script>
export default {
  props: ["firstName", "lastName", "eMail", "phoneNumber"],
  data() {
    return {
      isDetailsEnabled: false,
    };
  },
  methods: {
    toggleDetails() {
      if (this.isDetailsEnabled) {
        this.isDetailsEnabled = false;
      } else {
        this.isDetailsEnabled = true;
      }
    },
  },
};
</script>
<style>
</style>