const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      confirmedInputValue: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedInputValue = this.inputValue;
      console.log(this.confirmedInputValue);
    },
  },
});
app.mount("#assignment");
