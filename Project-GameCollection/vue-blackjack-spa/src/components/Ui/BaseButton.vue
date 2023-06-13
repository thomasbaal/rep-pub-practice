<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  /* font: inherit; */
  font-size: 10%;
  border: 1px solid #f0d379;
  border-radius: 5%;
  background-color: #faefc0;
  color: black;
  /* padding: 0.5rem 2rem; */
  cursor: pointer;
  width: 50%;
  height: 60%;
  text-align: center;
  padding: 0;
}

button:hover,
button:active {
  background-color: #ecc56d;
  border-color: #eac161;
  color: red;
}
</style>