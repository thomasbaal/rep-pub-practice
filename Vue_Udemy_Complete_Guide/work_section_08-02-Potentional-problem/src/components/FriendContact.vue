<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(favorite)" : "" }}</h2>

    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>

    <button @click="toggleFavorite">Toggle Favorite</button>

    <ul v-if="detailsAreVisible">
      <li>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <!-- read #button-delete-->
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"], // receiving data as an array
  props: {
    id: {
      type: String,
      required: true,
    },
    // receiving data as an object, where you can define several other options.
    name: {
      type: String, // defining the type of data
      required: true, // required ?
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
      default: false, //we can send a default value if the required value is not received, can also do a function here if something needs to be calculated.
      // validator: function (value) {
      //   // the validator takes the prop value as its arguement and should return a "boolean" here it should receive a 1 or a 0 to make the prop valid.
      //   return value === "1" || value === "0";
      // },
    },
  },
  emits: ["toggle-favorite", "delete"],
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite, // setting received data to a propertie in "this instance", but should by best practice not be used.
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // emititing an event. $emit('name-of-event') <- always kebab-case
      this.$emit("toggle-favorite", this.id);
    },
  },
};

/*
#button-delete
here we add a button that instead of creating a seperate method for it, we directly run an emit, and pass on the id.
      <button @click="$emit('delete', id)">Delete</button>
but we also added the emit under emits: array to make it clear that we have that "emit"in our component.

then we add the listener




*/
</script>


