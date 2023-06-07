app.component('product-display',{
    // props: -> receives data from parent
    // main.js is returning a object with car:[], and "premium: true"
    // below we have set what properties are allowed and the data type.
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `  <div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <!-- image goes here-->
            <img v-bind:src="image" :href="url">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p>{{ sale }}</p>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <!--@mouseover -> setting the moused over item to the property selectedVariant.-->
        <div v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle"
            :style="{ backgroundColor: variant.color }"
            >
            <!-- binding class to a property-->
        </div>
                <button 
                    class="button" 
                    :class="{disabledButton: !inStock}" 
                    :disabled="!inStock"
                    @click="addToCart()">
                    Add to cart
                </button>
                <button 
                    class="button" 
                    @click="removeFromCart()">
                    Remove item - Not working
                </button>
                <button 
                    class="button" 
                    @click="emtyCart()">
                    Empty cart
                </button>
            </div>
    </div>
    <review-list :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
</div>`,


data(){
    return {
        product: 'Socks',
        onSale: true,
        brand: 'Vue Mastery',
        selectedVariant: 0,
        url: 'somelink.com',
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
            {
                id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50
            },
            {
                id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 1
            },
        ],
        reviews: [],
    }
},
methods: {
    addReview(review){
        console.log(review);
        this.reviews.push(review)
    },
    addToCart() {
        // emmits a signal to parent(main.js) -> when addToCart() are called.
        // ('add-to-cart' beeing the event name) (rest of the data called: payload)
        // we can send along the id as we got that from the v-for directive
        console.log(this.variants[this.selectedVariant].id);
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id); 
    },
    emptyCart(){
        // emit a signal to index.html who is the parent of(who has the cart) to empty the cart.
        // console.log('triggers emptycart method');
        this.$emit('empty-cart', this.variants[this.selectedVariant].id);
    },
    removeFromCart(){
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
      this.selectedVariant = index  
      console.log('selectedVariant ' + 'set ' + 'to ' + 'index ' + index + ' by ' + 'mouseover '  );
    }
},
computed: {
    title() {
        return this.brand + ' ' + this.product
    },
    image(){
        return this.variants[this.selectedVariant].image
    },
    inStock(){
        return this.variants[this.selectedVariant].quantity
    },
    sale(){
        return this.brand + ' ' + this.product + ' ' + '- is on sale'                
    },
    shipping() {
        if (this.premium) {
            return 'Free'
        }else {
            return 2.99
        }
    }
}
})