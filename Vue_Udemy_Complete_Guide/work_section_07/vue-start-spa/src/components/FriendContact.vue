<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite ? "(favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>
<script>
export default {
  //   props: ["name", "phoneNumber", "emailAddress", "isFavorite"], // props you want to accept here
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      // set a default value if required is set to false, and you want data there.
      default: false,
      // set a check
      //   validator: function (value) {
      //     return value === "1" || value === "0";
      //   },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite, // #props:
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
      this.phoneNumber;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id); // $emit
    },
  },
};

/*
#props 
should not be changed directly,
// but here we change it internally by setting
the "friendIsFavorite" property
*/

/*
#emit
always kebabcase (toggle-favorite)

*/
</script>
