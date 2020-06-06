
// Create a component called product-details with a prop called details
Vue.component("product-details", {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template: `
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
        `,
});

Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `     
  <div class="product">
    <div class="product-image">
        <img :src="image" alt="" />
    </div>
    <div class="product-info">
        <h1>{{title}}</h1>
        <div class="details">
            <p class="onSale" v-if="onSale">On Sale!</p>
            <p v-if="inStock">In Stock</p>
            <p v-else 
                :class="{outOfStock: !inStock}">Out of Stock</p>
                </div>
                <p>Shipping: {{ shipping }}</p>


                <product-details :details="details"></product-details>
        <ul>
            <div v-for="(variant, index) in variants" 
            :key="variant.variantId"
            class="color-box"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)">
            </div>
        </ul>
        
        <button v-on:click="addToCart" 
                :disabled="!inStock"
                :class="{disabledButton: !inStock}">Add to Cart</button>
        <div class="cart">
            <p>Cart({{cart}})</p>
        </div>
        <button v-on:click="emptyCart">Empty Cart</button>
    </div>
    </div>`,
  data() {
    return {
      brand: "Vue Mastery",
      product: "Socks",
      selectedVariant: 0,
      details: ["80% cotton", "20% polyester", "Gender neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: "./assets/vmSocks-green.jpg",
          variantQuantity: 10,
          variantOnSale: true,
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "./assets/vmSocks-blue.jpg",
          VariantQuantity: 0,
          variantOnSale: false,
        },
      ],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;    },
    emptyCart() {
      this.cart = 0;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    onSale() {
      return this.variants[this.selectedVariant].variantOnSale;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});

let app = new Vue({
  el: "#app",
  data: {
    premium: false,
  },
});
