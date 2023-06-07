<template>
  <form-login @log-in="checkLogin"></form-login>
  <section>
    <ul>
      <user-viewer
        v-for="(user, index) in userdatabase"
        :key="index"
        :firstName="user.firstName"
        :lastName="user.lastName"
        :eMail="user.email"
        :phoneNumber="user.phoneNumber"
      ></user-viewer>
    </ul>
  </section>
</template>


<script>
export default {
  data() {
    return {
      userdatabase: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          phoneNumber: "1234567890",
        },
        {
          firstName: "Jane",
          lastName: "Smith",
          email: "jane.smith@example.com",
          phoneNumber: "9876543210",
        },
        {
          firstName: "Michael",
          lastName: "Johnson",
          email: "michael.johnson@example.com",
          phoneNumber: "5678901234",
        },
        {
          firstName: "Emily",
          lastName: "Davis",
          email: "emily.davis@example.com",
          phoneNumber: "0123456789",
        },
        {
          firstName: "David",
          lastName: "Wilson",
          email: "david.wilson@example.com",
          phoneNumber: "8765432109",
        },
      ],
      users: [
        {
          userName: "1",
          passWord: "2",
        },
      ],
    };
  },
  methods: {
    checkLogin(userName, passWord) {
      if (
        this.users.find(
          (user) => user.userName === userName && user.passWord === passWord
        )
      ) {
        console.log("found one");
      } else {
        console.log("nope");
      }
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost" sans-serif;
}
#app form {
  box-shadow: 0 2px 8px rgba(102, 21, 21, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app h2 {
  text-align: center;
}
#app section {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(117, 91, 91, 0.26);
  font-family: inherit;
  margin: 1rem auto;
  padding: 1rem;
}
ul {
  list-style: none;
}
li {
  box-shadow: 0 2px 8px;
  border-radius: 5%;
  padding: 3px;
}
</style>