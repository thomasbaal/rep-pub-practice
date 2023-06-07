import { createApp } from "vue";

import App from './App.vue';
import FormLogin from './components/FormLogin.vue'
import UserViewer from './components/UserViewer.vue'


const app = createApp(App);

app.component('form-login', FormLogin)
app.component('user-viewer', UserViewer)

app.mount('#app');