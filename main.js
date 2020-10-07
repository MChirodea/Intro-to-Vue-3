const app = Vue.createApp({
    data(){
        return{
            product: 'Socks',
            description: 'Socks are good',
            image: './assets/images/socks_green.jpg',
            url:'http://www.google.ro',
            inventory: 0,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {id: 2334, color: 'green', image:'./assets/images/socks_green.jpg'},
                {id:2235, color:'blue', image:'./assets/images/socks_blue.jpg'},
            ],
            inStock: false,
            sizes:[
                {id: 122, size:"XL"},
                {id: 121, size:"XXL"},
                {id: 132, size:"L"},
            ],

            cart: 0,

            codingChallenges: false,
            brand: 'Vue Mastery',
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },

        decrementToCart(){
            if(this.cart > 0){
                this.cart -= 1
            }  
        },

        updateImage(variantImage){
            this.image = variantImage
        },
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product
        }
    }
})
