let app = new Vue ({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green.png',
        inventory: 100,
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender neutral"],   
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green.png"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue.jpg"
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage){
            this.image = variantImage;
        },
        emptyCart(){
            this.cart = 0;
        }
    }
})