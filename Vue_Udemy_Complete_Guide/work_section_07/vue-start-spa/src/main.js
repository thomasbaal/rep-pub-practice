import { createApp } from "vue"; // importing createApp function from Vue Package.
import App from './App.vue';

import FriendContact from './components/FriendContact.vue' // importing the FriendContact component from file

const app = createApp(App);


app.component('friend-contact', FriendContact)

app.mount('#app');


/*
1.Importing dependencies:

createApp function from the Vue package is imported.
App component is imported from the App.vue file.
FriendContact component is imported from the FriendContact.vue file.

2.Creating the Vue app:

The createApp function is called with App as the root component.
The returned app instance is assigned to the app variable.

3.Defining the root component (App.vue):

The root component defines the template, script, and style sections.

4.Template section of the root component: 
(In Vue.js, the <template> tag is a built-in tag that serves as a container for the component's template markup. 
It is a fundamental part of Vue's template syntax and is required to define the structure of a component's HTML.)

The template section contains HTML markup that represents the component's structure.
It includes a section with a heading "My Friends" and an unordered list.
Inside the unordered list, three instances of the friend-contact component are used.

5.Script section of the root component:

The script section exports a default object with a data function.
The data function returns an object with a friends array.

6.
*/