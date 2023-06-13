<template>
  <div class="menu-backdrop">
    <div>
      <menu-items class="menuHeader">Creative Title here</menu-items>
      <menu-items>#2. some text</menu-items>
      <menu-items>#3. some text</menu-items>
      <menu-items>#4. some text</menu-items>
      <menu-items>#4. some text</menu-items>
      <menu-items>#4. some text</menu-items>
      <menu-items>#4. some text</menu-items>
      <menu-items>#4. some text</menu-items>
      <menu-items>
        <font-awesome-icon icon="fa-solid fa-user-secret" />
      </menu-items>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import MenuItems from "../Ui/MenuItems.vue";
export default {
  components: {
    MenuItems,
  },
  name: "MenuBackdrop",
};
</script>

<style scoped>
.menu-backdrop {
  background-color: #41b27e;
  border-radius: 5px;
  width: 90%; /* Modify these as per your requirement */
  height: 90%; /* Modify these as per your requirement */
  display: flex;
  justify-content: center;
  padding: 5px;
}
.menuHeader {
  border-bottom: 2px solid white;
}
</style>
