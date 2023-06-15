<template>
  <div class="grid-container">
    <div class="topLeft">top</div>
    <div class="top1">top</div>
    <div class="top2">top</div>
    <div class="topRight">top</div>
    <div class="middleLeft">middle</div>
    <div class="middle1">middle</div>
    <div class="middle2">middle</div>
    <div class="middleRight">middle</div>
    <div class="bottomLeft">bottom</div>
    <div class="bottom1">bottom</div>
    <div class="bottom2">bottom</div>
    <div class="bottomRight">bottom</div>
  </div>
</template>


<script>
export default {
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
  display: grid;
  grid-template-areas:
    "topLeft top1 top1 topRight"
    "middleLeft middle1 middle2 middleRight"
    "bottomLeft bottom1 bottom2 bottomRight";
  grid-template-rows: 150px 150px 150px;
  grid-template-columns: 150px 150px 150px 150px;
  background-color: aqua;
  width: 650px;
  border: 2px solid black;
  background-image: url("@/assets/background.png");
  background-size: contain;
  color: white;
}

.topLeft {
  
}
.top1 {
}
.topRight {
}

.middleLeft {
}
.middle1 {
}
.middleRight {
}

.bottomLeft {
}
.bottom1 {
}
.bottomRight {
}

/* .grid-container {
  width: 760px;
  height: 540px;
  display: grid;
  grid-template-rows: 150px minmax(150px, 1fr) minmax(150px, 1fr) 50px;
  grid-template-columns: repeat(4, minmax(150px, 200px));
  grid-gap: 10px;
  height: 100vh;
  background-image: url("@/assets/background.png");
  background-size: cover;
  border: solid 10px;
  border-color: #f0c217;
}

.grid-item {
  background-color: transparent;
  text-align: center;
}

.top-row {
  grid-row: 1;
  grid-column: 1 / span 4;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottom-row {
  grid-row: 4;
  grid-column: 1 / span 4;
}
*/
.logo-image {
  width: 400px;
  height: 150px;
}
</style>