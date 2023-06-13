import { createApp } from 'vue';
import App from './App.vue';

import BaseButton from './components/Ui/BaseButton.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faAt, faGamepad } from '@fortawesome/free-solid-svg-icons' // use fa-solid ........ when using
import { faTwitter } from '@fortawesome/free-brands-svg-icons' // use fa-brands ..... when using
// import { faAt } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faAt, faTwitter, faGamepad) // 007
// library.add(faAt) // @

const app = createApp(App);
app.component('base-button', BaseButton)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app');
