<template>
  <section>
    <form @submit.prevent="submitData">
      <input type="text" placeholder="your name" v-model="enteredName" />
      <input type="text" placeholder="your age" v-model="enteredAge" />
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    emits: ["set-data"];
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$submit("set-data", this.enteredName, this.enteredAge);
    },
  },
};

// #5. in the input element, we set a 2 way bininding with v-model that updates the enteredName Property and the same for enteredAge
// now we need to tell App.vue that, because its the parent, it cant have props:
// this is a form,so it got a builtin vue event directive "@submit", using submit.prevent, to stop it from reloading browser window.
// @submit.prevent="submitData" <- calling the method "submitData"
// created a new method with the name submitData()
// now that the user have inputted their data, the enterName and enteredAge properties have been updated, now we need to let the parent know that it has been changed.
// we send info to parent with this.@emit and send a custom event. ( this.@emit('some-name-of-the-event', the payload/properties to send))
// also added,but not required, is the "emits" property, that define what emits that are beeing used on this page.
// now go back to App.vue.
</script>