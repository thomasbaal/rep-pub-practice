// COMPONENTS

/* NOTE !:
Without components and using v-for on a list of objects where each object have show/hide functionality,
pushing 1 button will trigger that button on every object.
components makes it so that every template are packed togethere in its own object, so pushing a button here will not
trigger that button on the other objects
*/

// components are like their own "mini apps"
// components are like creating your own HTML tag ->  " <friend-contact></friend-contact> "
// component naming conventions : multiword with a - -> friend-contact
// create component with "app.component('friend-contact')"
// 2nd argument to be sent when creating a new component -> " app.component('friend-contact', {}) "

const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "04532 2342432",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

// ---------------- Create the component ----------------
// as this are like a custom html tag, we need to add the html to be rendered on the screen -> Vue keyword: "template:"

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show'}} Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> 01234 5678 991</li>
      <li><strong>Email:</strong> manuel@localhost.com</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
