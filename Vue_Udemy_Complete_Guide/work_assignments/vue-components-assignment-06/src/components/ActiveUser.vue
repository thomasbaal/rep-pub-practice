<template>
  <section>
    <h2>{{ username }}</h2>
    <h3>{{ userage }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    userage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};

// #2. with props: here, we have set the rules for what to RECEIVE from App.vue (parent). -> username and userage
// make sure how you write the properties, here we have used all lowercase (username, userage) when you bind the data.
// go back to App.vue
// #4. now that we bind the stored data on App.vue to the props:-values username and userage, the instance on this page should have received those values('thomas' and 43)
// now on that we have the values, we use the Mustache to get display the data. {{ username }} {{ userage }}
// now to fix the UserData.vue where users can input their name and age. -> go there.
//
</script>