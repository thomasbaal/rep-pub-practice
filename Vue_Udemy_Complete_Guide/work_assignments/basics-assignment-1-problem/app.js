const app = Vue.createApp({
  data() {
    return {
      name: "Thomas",
      age: 43,
      productImage:
        "https://productimages.biltema.com/v1/image/imagebyfilename/52-530_xxl_1.jpg",
      productImageSize_W: 200,
      productImageSize_H: 200,
    };
  },
  methods: {
    calcAge() {
      let oldAge = this.age;
      return (oldAge += 5);
    },
    getRandom() {
      let random = Math.random();
      return random.toFixed(1);
    },
  },
}).mount("#assignment");
