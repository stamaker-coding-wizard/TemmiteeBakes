
<template>
  
  <header class="nine-index col-12 position-fixed navShadow mt-0 w-100" id="customNav" >
    <nav class="d-flex align-items-center align-items-lg-center col-12 justify-content-between navbar navbar-expand-lg navbar-light w-100">
        <div class="col-lg-2 col-sm-3 col-5"><a href="/" class="d-flex align-items-center justify-content-center col-10 ms-lg-4 navbar-brand"><div style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0"><div style="box-sizing:border-box;display:block;max-width:100%"><img style="max-width:100%;display:block;margin:0;border:none;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDc1NyIgaGVpZ2h0PSIxMjgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="></div><img alt="TemmiteeBakes" src="/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimport%2Fyefepere_white.46aa880184afa273fac173370a81d8c4.webp&amp;w=3840&amp;q=75" decoding="async" data-nimg="true" class="navbar-img" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" srcset="/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimport%2Fyefepere_white.46aa880184afa273fac173370a81d8c4.webp&amp;w=3840&amp;q=75 1x"></div> <span class="text-white px-3 d-none d-md-block" id="navLocation"></span></a>
        </div>

        <div class="d-flex align-items-center justify-content-end col">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        </div>

        <div class="navbar-collapse collapse" id="navbarTogglerDemo03">
          <div class="d-flex align-items-end align-items-lg-center justify-content-between flex-column flex-lg-row col-lg-12">
            <div class="me-xl-5 me-0 d-flex align-items-end align-items-lg-center justify-content-end col-12 col-lg-auto navbar-nav">
              <RouterLink to='/'>
              <a data-rr-ui-event-key="/Home" class="nav-active nav-hover col-11 col-lg-auto text-end text-lg-0  nav-link active">Home<div class="active-circle mx-auto"></div> </a>
              </RouterLink>
              <RouterLink to='/About'>
              <a data-rr-ui-event-key="/About" class="nav-hover col-11 col-lg-auto text-end text-lg-0  nav-link">About<div class="active-circle mx-auto"></div> </a>
              </RouterLink>

              <RouterLink to='/Products'>
              <a data-rr-ui-event-key="/Products" class="nav-hover col-11 col-lg-auto text-end text-lg-0  nav-link">Cakes<div class="active-circle mx-auto"></div> </a>
              </RouterLink>
              <RouterLink to='/PastOrders'>
              <a data-rr-ui-event-key="/PastOrders" class="nav-hover col-11 col-lg-auto text-end text-lg-0  nav-link">Past Order<div class="active-circle mx-auto"></div> </a>
              </RouterLink>

              <div @click="toggleSidebar" class="nav-hover col-11 col-lg-auto text-end text-lg-0  nav-link" style="cursor:pointer">View Cart ({{ totalQuantity }}) <div class="active-circle mx-auto"></div> </div>
              
          
              <a href="/help-desk" data-rr-ui-event-key="/help-desk" class=" nav-hover col-11 col-lg-auto text-end text-lg-0  d-block d-lg-none nav-link">Visit Help Desk<div class="active-circle mx-auto"></div> </a>
                
                
                
            </div>
                
          </div>
        </div>
    </nav>
  </header>

 
  <RouterView :inventory="inventory" :addToCart="addToCart"/>

  <Sidebar
    v-if="showSidebar" 
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
        
  />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
//import Home from './components/Pages/HomePage/HomePage.vue'
import Sidebar from './components/Pages/Sidebar/Sidebar.vue'
import Cake from './Cake.json'

export default {
  components: {
    //Home,
    Sidebar
   
  },
  data(){
    return{
      showSidebar: false,
      inventory: Cake,
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
    addToCart(name, quantity){
        if (!this.cart[name]) this.cart[name] = 0
        //receive type and number
        this.cart[name] += quantity
        this.inventory[index].quantity = 0
        console.log(this.cart)
    },
    removeItem(name){
        delete this.cart[name]
    }
  }
}
</script>
