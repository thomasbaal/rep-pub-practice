const app = Vue.createApp({
  data() {
    return {
      name: "",
      inputValue: "",
      confirmedName: "",
    };
  },
  methods: {
    setName(event) {
      console.log(event);
      this.name = event.target.value;
      1;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    confirmInput() {
      this.inputValue = event.target.value;
    },
    alert() {
      alert("Alert is on !!, dobdidooo");
    },
  },
});
app.mount("#assignment");
