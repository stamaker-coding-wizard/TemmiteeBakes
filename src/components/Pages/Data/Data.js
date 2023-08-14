/*
import sidebar from '../Cart.vue'

export default {
    name: 'Data',
  components: {
    sidebar
  },
 

  data(){
    return{
        showSidebar: false,
        
        inventory: [
            {"id":1, "name": "Orange Tasty", "image": "Cake1.jpg", "price": {"N": 3000}, "description": "Flavour" },
            {"id":2, "name": "Queen Delignt", "image": "cake2.jpg", "price": {"N": 5000},  "description": "Fashion Wear" },
            {"id":3, "name": "Queen Delignt", "image": "cake3.jpg", "price": {"N": 2000},  "description": "Friday FootWear" },
            {"id":4, "name": "Beating Heat", "image": "cake2.jpg", "price": {"N": 1000},  "description": "Friday Wear" },

            {"id":5, "name": "My Daddy My Hero", "image": "Cake1.jpg", "price": {"N": 500}, "description": "Chocolate" },
            {"id":6, "name": "Orange Tasty", "image": "Cake1.jpg", "price": {"N": 300}, "description": "Flavour" },
            {"id":7, "name": "Chocolate Cake", "image": "cake4.jpg", "price": {"N": 500},  "description": "Flavour" },
            {"id":8, "name": "My Honey", "image": "cake4.jpg", "price": {"N": 200},  "description": "Chocolate" },
            {"id":9, "name": "Always Love You", "image": "cake5.jpg", "price": {"N": 100},  "description": "Flavour" },
            {"id":10, "name": "My Daddy My Hero", "image": "cake4.jpg", "price": {"N": 500}, "description": "Chocolate" },
            {"id":11, "name": "Orange Tasty", "image": "cake5.jpg", "price": {"N": 300}, "description": "Flavour" },
            {"id":12, "name": "Chocolate Cake", "image": "cake5.jpg", "price": {"N": 500},  "description": "Flavour" },
            {"id":13, "name": "My Honey", "image": "cake6.jpg", "price": {"N": 200},  "description": "Chocolate" },
            {"id":14, "name": "Always Love You", "image": "cake6.jpg", "price": {"N": 100},  "description": "Flavour" },
            {"id":15, "name": "My Daddy My Hero", "image": "Cake1.jpg", "price": {"N": 500}, "description": "Chocolate" }
            
    
        ],
        cart: {}
    }
  },
  computed: {
    totalQuantity(){
        return Object.values(this.cart).reduce((acc, curr) => {
            return acc + curr
        }, 0)
    }
  },
  methods: {
    toggleSidebar(){
      this.showSidebar = !this.showSidebar
    },
    addToCart(name, index){
        if (!this.cart[name]) this.cart[name] = 0
        //receive type and number
        this.cart[name] += this.inventory[index].quantity
        this.inventory[index].quantity = 0
        console.log(this.cart)
    },
    removeItem(name){
        delete this.cart[name]
    }
  },

/*{}

  

  async mounted(){
    const res = await fetch('../Pages/Wear.json')
    const data = await res.json()
    this.inventory = data
  },}

  
}
*/

