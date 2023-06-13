<template>
  <div @mouseover="isBouncing = true" @mouseout="isBouncing = false">
    <font-awesome-icon
      class="icon"
      :style="{ color: iconColor }"
      :size="iconSize"
      :icon="icon"
      :bounce="isBouncing"
    ></font-awesome-icon>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: ["iconColor", "iconSize", "icon", "text"],
  data() {
    return {
      isBouncing: false,
    };
  },
};
</script>

<style>
.icon {
  margin-right: 10px;
}
</style>