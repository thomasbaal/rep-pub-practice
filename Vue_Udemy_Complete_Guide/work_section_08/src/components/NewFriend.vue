<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>E-Mail</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
// read #new-friend
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};

/*
#new-friend:
in the newly created <new-friend> custom compponent, we want to store what the user are inputting.

so we setup what properties that should be available:
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",

then we add two way binding in the html with vue builtinn directive:
    v-model="enteredName"
    v-model="enteredPhone"
    v-model="enteredEmail"
vue will automaticcally update the properties when user inputs something.

the we add a listener on the form that prevent the browser to reload the page, we only want the current edited properties to change.
we the point the listener to a method of choice (submitData())
        @submit.prevent="submitData"

created method submitData function.
adding a emit inside the function that points to (add-contact)and add the properties needed to the parent (App.vue) 
    this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
this 3 properties could have been packed in to a object if wanted to.

then we add the listen, that will listen for this "emit" inside the newly created custom component, and point it to a function (addContact)
        <new-friend @add-contact="addContact"></new-friend>

created method (addContact()) in App.vue

inside the function we are expecting the 3 properties we just sendt.
so we add those as arguements.
          addContact(name, phone, email){},


now for the received values we get, we create a new object with the same structure as the ones we already have, and after the object is created, we push it to our existing "friends array" ->
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: false,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFavorite: false,
        },
      ],
    };


the id: we for now just create a SUDO string, so it become somewhat unique.
        const newFriendContact = {
            id: new Date().toISOString(),
            name: name,
            phone: phone,
            email: email,
            isFavorite: false
        },
        this.friends.push(newFriendContact)




        



*/
</script>