<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import BadgeList from "./components/BadgeList.vue";
import TheHeader from "./components/TheHeader.vue";
import UserInfo from "./components/UserInfo.vue";

export default {
  components: {
    // vue translate "TheHeader to" the-header (dash before "big letter"), and on the html side you can reference this in two ways:
    //#1. the-header
    //#2. <TheHeader />

    // inside the object, you can pass it like::
    // TheaHeader: TheHeader,
    // or
    // 'the-header: TheHeader,
    BadgeList,
    TheHeader,
    UserInfo,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>