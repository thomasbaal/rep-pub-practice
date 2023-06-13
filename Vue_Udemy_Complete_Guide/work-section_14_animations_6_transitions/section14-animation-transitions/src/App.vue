<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.animate {
  /*the below will trigger the alerady set class "block" on the div above, we have used to start the whole animation*/
  /* transform: translateX(-150px); */

  /*ease-out -> determines teh accelaration, here we set it to slow at end */
  /*forwards -> meaning we want to keep the last keyframe as active -> the block will move to the left and stay there, else it will return back to the first keyfram that will bring it to the start of the animation (start-position*/
  animation: slide-fade 0.3s ease-out forwards;
}

/* explanation on the below: 
  1.at 0%of the animation frames, meaning at start move item 0px, meaning not move, set scale to 1, witch will be 100%
  2.at 70% animation frames,move item to the left by 120px, scale item to 110% (1.1 from 1.0 is 10%)
  3.at last stop of animation (100%) move left 150px, scale back to to original size (100%)
  
  */
@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 1s ease-out;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
</style>