import { createApp } from 'vue';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, FaTwitter, } from "oh-vue-icons/icons";

import App from './App.vue';
import BaseButton from './components/Ui/BaseButton.vue'

addIcons(FaFlag, FaTwitter); // Add your icons


const app = createApp(App);
app.component('base-button', BaseButton)
app.component('v-icon', OhVueIcon) // Register the icon component globally


app.mount('#app');
