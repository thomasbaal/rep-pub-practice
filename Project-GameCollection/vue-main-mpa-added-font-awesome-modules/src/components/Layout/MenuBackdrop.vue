<template>
  <div class="menu-backdrop">
    <div>
      <menu-items class="menuHeader">Games list</menu-items>
      <menu-items>
        <animated-icon
          iconColor="#1e1e2f"
          iconSize="lg"
          icon="fa-solid fa-gamepad"
          text="BlackJack"
        ></animated-icon>
      </menu-items>
      <menu-items>
        <animated-icon
          iconColor="#1e1e2f"
          iconSize="lg"
          icon="fa-solid fa-gamepad"
          text="Simon say"
        ></animated-icon>
      </menu-items>
      <menu-items>
        <animated-icon
          iconColor="#1e1e2f"
          iconSize="lg"
          icon="fa-solid fa-gamepad"
          text="#-The game"
        ></animated-icon>
      </menu-items>
      <menu-items>
        <animated-icon
          iconColor="#1e1e2f"
          iconSize="lg"
          icon="fa-solid fa-user-secret"
          text="Admin - login"
        ></animated-icon>
      </menu-items>
      <menu-items style="text-align: center; padding: 0">...</menu-items>
      <menu-items class="menuHeader">Socials</menu-items>
      <menu-items>
        <animated-icon
          iconColor="#1e1e2f"
          iconSize="lg"
          icon="fa-brands fa-twitter"
          text="Twitter"
        ></animated-icon>
      </menu-items>
      <menu-items>
        <animated-icon
          iconColor="#1e1e2f"
          iconSize="lg"
          icon="fa-solid fa-at"
          text="E-mail"
        ></animated-icon>
      </menu-items>
      <menu-items class="menuHeader">Connections</menu-items>
      <menu-items>
        <connection-status></connection-status>
      </menu-items>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import MenuItems from "../Ui/MenuItems.vue";
import AnimatedIcon from "../Ui/AnimatedIcon.vue";
import ConnectionStatus from "@/utils/ConnectionStatus.vue";

export default {
  data() {
    return {};
  },
  components: {
    MenuItems,
    AnimatedIcon,
    ConnectionStatus,
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
  border-bottom: 2px solid #1e1e2f;
  text-align: center;
  color: #1e1e2f;
}
</style>




<!-- Font Awesome Referance:  <font-awesome-icon
        icon="fa-solid fa-user-secret"
        size="lg"
        bounce
        border
        transform="shrink-6 left-4"
      ></font-awesome-icon>--->