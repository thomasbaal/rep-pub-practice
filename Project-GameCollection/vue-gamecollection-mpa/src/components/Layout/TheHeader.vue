<template>
  <header class="container">
    <div>
      <span v-if="showMessage" class="slide-in">random text 1</span>
    </div>
    <div>something 1</div>
    <div>something 2</div>
    <div>something 3</div>
    <div>
      <span v-if="showMessage" class="slide-in">random text 2</span>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMessage: true,
      message: "This is a random message",
    };
  },
  created() {
    this.displayRandomMessage();
  },
  methods: {
    displayRandomMessage() {
      setInterval(() => {
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, Math.random() * (5000 - 1000) + 1000); // message will disappear between 1 to 5 seconds.
      }, Math.random() * (10000 - 5000) + 5000); // message will appear between 5 to 10 seconds.
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  justify-items: center; /* align horizontal */
  align-items: flex-end; /* align vertical */
  grid-template-columns: repeat(5, 1fr); /* Three equal columns */
  gap: 10px; /* If you want space between the columns */
  color: white;

  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  color: white; */

  /* position: fixed; */
  /* width: 100%;
  top: 0; */
  /* background-color: red; */
  /* Add more styles here as needed */
}
/* .showMessage {
  color: white;
}
.hideMessage {
  color: #1f1f1f;
} */

.slide-in {
  animation: slide-in 2s forwards;
}

@keyframes slide-in {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
