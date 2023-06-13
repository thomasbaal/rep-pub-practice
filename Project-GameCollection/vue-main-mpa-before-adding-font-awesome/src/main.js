import { createApp } from 'vue';
import App from './App.vue';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret)

import BaseButton from './components/Ui/BaseButton.vue'


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('base-button', BaseButton)

app.mount('#app');
