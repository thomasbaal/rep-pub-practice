<template>
  <active-user :username="user.name" :userage="user.age"></active-user>
  <user-data @set-data="setUserData"></user-data>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
export default {
  data() {
    return {
      user: {
        name: "Thomas",
        age: 43,
      },
    };
  },
  methods: {
    setUserData(username, userage) {
      this.user = {
        name: username,
        age: userage,
      };
    },
  },
};

// #1. if we manage the data here, we can pass the properties to active-user with "props:"
// go to ActiveUser.vue
// #3. now we do a 1-way binding to the props: values username and age from ActiveUser.vue to the values on this instance.->
// go back to ActiveUser.vue
// #6. now that UserData have sendt the data, the parent(App.vue) need to listen for changes with @set-data="setUserData" <-
// the "set-data" need to be exactly the same name, as what you used on the emit from UserData.vue.
// then the name of the method it is calling.
// created method named setUserData()
// this method will receive tha data that you sendt from
</script>