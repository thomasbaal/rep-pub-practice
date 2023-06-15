<template>
  <button :class="$attrs.class">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  font: inherit;
  font-size: 12px;
  border: 1px solid #02934e;
  border-radius: 5%;
  background-color: #016b30;
  color: black;
  /* padding: 0.5rem 2rem; */
  cursor: pointer;
  width: 55px;
  height: 20px;
  text-align: center;
  padding: 0;
}

button:hover,
button:active {
  border-color: #eac161;
  background-color: #016b30;
  color: red;
}
button.active {
  background-color: #016b30 !important;
  color: red !important;
}
</style>