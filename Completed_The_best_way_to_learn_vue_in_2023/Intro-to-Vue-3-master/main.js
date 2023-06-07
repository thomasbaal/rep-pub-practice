const app = Vue.createApp({
    data() {
        return {
            name: 'Thomas',
            cart: [],
            premium: true,
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
            console.log(this.cart);
            console.log(id);
        },
        removeById(id) {
            const indexOfItem = this.cart.indexOf(id)
            if (indexOfItem != -1) {
                this.cart.splice(indexOfItem, 1)
            }
        },
        cleanCart() {
            // empty cart, not working ?
            this.cart = [];
            console.log(this.cart.length);
        },

    },

})