const app = Vue.createApp({
  data() {
    return {
      storedValue: 0,
    };
  },
  computed: {
    result() {
      console.log(this.storedValue);
      if (this.storedValue === 37) {
        return "Spot on !";
      }
      if (this.storedValue < 37) {
        return "Not there yet";
      } else {
        return "Too much";
      }
    },
  },
  methods: {
    add(num) {
      //   console.log(num);
      this.storedValue += num;
    },
    resetCounter() {
      this.storedValue = 0;
      console.log("resetting");
    },
  },
  watch: {
    // syntax nameofpropertytowatch(){}
    storedValue(value) {
      if (value === 37) {
        setTimeout(this.resetCounter, 5000);
      }
    },
  },
}).mount("#assignment");
