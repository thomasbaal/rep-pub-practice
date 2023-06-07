import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';
const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend); // register it as a component, and always use two or more words to eanble the use of "-" (new-friend)

app.mount('#app');
