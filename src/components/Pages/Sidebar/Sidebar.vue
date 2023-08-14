<template>
  <div class="cart1">
    <h1 class="cart-title">Your cart</h1>
    <div class="cart-content">
      <div class="cart-box" v-for="(quantity, key, i) in cart" :key="i">
        <img src="cake3.jpg" alt="" class="cart-image">
        <div class="details-box">
            <div class="cart-product">{{ key }}</div>
            <div class="cart-price">Price: N {{ getPrice(key) }}</div>
            <div class="cart-quatity">Quality: {{ quantity }}</div>
            <div class="cart-quatity">Total: N{{ quantity * getPrice(key) }}</div>
        </div>
        <i class="cart-remove" @click="remove(key)">🎬</i>;
      </div>
    </div>
    <p class="text-center" v-if="!Object.keys(cart).length">No Item Here Already</p>
    <!--Total-->
    <div class="total">
        <div class="total-title">Total: </div>
        <div class="total-price"><strong> N {{ calculateTotal() }}</strong></div>
    </div>
    <!--button-->
    <div class="text-center">
      <button type="button" class="btn-buy btn btn-primary text-white">Buy now</button>
    </div>
    <!--Cart close-->
    <button id="close-cart" @click="toggle">&times;</button>
  </div>
</template>

<script>

export default {
  name: 'Sidebar',

  props: ['toggle','cart', 'inventory', 'remove'],

  methods: {
    getPrice(name){
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      return product.price.N
    },
    calculateTotal(){
      
      const total = Object.entries(this.cart).reduce((acc, curr, index) => {
        return acc + (curr[1] * this.getPrice(curr[0]))
      }, 0)
      return total.toFixed(2)
    }
  }

  
}
</script>