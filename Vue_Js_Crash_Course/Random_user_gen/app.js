const app = Vue.createApp({
  // template: "<h1>Hello {{firstName}}</h1>",
  data() {
    return {
      firstName: "thomas",
      lastName: "Andersen",
      email: "john@gmail",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  // defining methods in vue !.
  methods: {
    async getUser() {
      //  console.log(this.firstName);

      // constant with first endpoint
      const res = await fetch("https://randomuser.me/api");

      // ECMAScript 6 (ES6) - language feature, object destructuring.
      // below.same as writing: const results = data.results;
      const { results } = await res.json();
      console.log(results);
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.medium;
    },
  },
});

// mounting it in the div with id=app
app.mount("#app");
