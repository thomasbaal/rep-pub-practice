<template>
  <form @submit.prevent="login">
    <div>
      <label>UserName</label>
      <input type="text" v-model="enteredUserName" placeholder="Name" />
    </div>
    <div>
      <label>Password</label>
      <input type="text" v-model="enteredPassWord" placeholder="Password" />
    </div>
    <button>Log in</button>
  </form>
</template>

<script>
export default {
  emits: ["logIn"],
  data() {
    return {
      enteredUserName: "",
      enteredPassWord: "",
    };
  },
  methods: {
    login() {
      this.$emit("logIn", this.enteredUserName, this.enteredPassWord);
    },
  },
};
</script>

<style>
</style>