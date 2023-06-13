<template>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <!-- 3 divs for logo-->
    <div class="grid-item logo"></div>

    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>

    <div class="grid-item">9</div>
    <div class="grid-item">10</div>
    <div class="grid-item">11</div>
    <div class="grid-item">12</div>

    <!-- the buttons-->
    <div class="grid-item"></div>
    <div class="grid-item buttonSpace">
      <base-button>Play</base-button>
    </div>
    <div class="grid-item">15</div>
    <div class="grid-item">16</div>
    <div class="grid-item">17</div>
    <div class="grid-item">18</div>
    <div class="grid-item">19</div>
    <div class="grid-item">20</div>
  </div>
</template>


<script>
import BaseButton from "../Ui/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      logoVisible: true,
    };
  },
};
</script>



<style>
* {
  box-sizing: border-box;
}
.grid-container {
  background-image: url("@/assets/background.png");
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  border: 5px solid #f3d67a;
}

.grid-item {
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 5px;
  /* font-size: 50px; */
  text-align: center;
}

.logo {
  grid-column: 2 / span 3; /* Start at the 2nd column and span 2 columns */
  background-image: url("@/assets/bj-logo.png");
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center;
}

.buttonSpace {
  display: flex;
  justify-content: flex-start;
  /* align-items: flex-end; */
}
</style>