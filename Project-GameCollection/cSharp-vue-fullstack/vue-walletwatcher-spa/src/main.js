import { createApp } from 'vue'
import App from './App.vue'
import FormAddAddress from './components/FormAddAddress.vue'

import './global.css' // Import global style

const app = createApp(App)

// Globally available
app.component('form-add-address', FormAddAddress)

app.mount('#app')
