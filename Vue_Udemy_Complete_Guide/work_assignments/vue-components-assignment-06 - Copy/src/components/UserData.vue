<template>
  <hr />
  <h2>Please enter your name and age</h2>
  <form>
    <input type="text" placeholder="your name" v-model="enteredName" />
    <input type="number" placeholder="your age" v-model="enteredAge" />
    <button @click.prevent="submitData">Set User Data</button>
  </form>
</template>


<script>
export default {
  emits: ["submitted-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      //   console.log(this.enteredAge, this.enteredName);
      this.$emit("submitted-data", this.enteredName, this.enteredAge);
      this.enteredName = "";
      this.enteredAge = "";
    },
  },
};
</script>