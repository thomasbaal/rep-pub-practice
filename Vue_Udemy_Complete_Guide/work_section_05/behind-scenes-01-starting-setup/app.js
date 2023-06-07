const app = Vue.createApp({
  data() {
    // all options and data that are beeing defined here, Vue keeps a track on it.
    // Vue merge all this data to a global managed object.

    // Important workings : "Vue Reactivity" Whenever values are changed in these values, Vue are aware of this by leveraging a build in javascript "function called proxy"
    // So when values are changed, it will search the Html document for where those that "might" be pointing to, and does its thing based on how you have layed out the functions,and/or pointers
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");

// demonstrating the workings of Javascript vs Vue
let message = "Hello!";
let longMessage = message + " World!";
console.log(longMessage); // Hello! World!
message = "Hello!!!!!!";
// by changing the value of message, doesnt change the output
console.log(longMessage); // Hello! World!

/* why !!! -> in javascript, when creating a variable or assign a value to an existing variable,
    the variable stores a copy of the value, not a reference to the original value.

    so in the example above -> it first create a copy of longMessage, and the values inside are references to the "message" variable.
    you then change the value of "message", and relogging longMessage, but javascript DO NOT KNOW that you have changed the value of "message",
    so it will continue to show the same result which he have a copy of.

*/


