<template>
    <div class="card-wrapper1">
        <div class="card">
            <div class="image-wrapper">
                <img :src="product.image" class="card-img-top" alt="...">
            </div>
            <div class="card-body d-flex">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">N{{ product.price.N }}</p>
                
            </div>
            <div class="col-12 p-3 d-flex mb-3" style="margin-right:10px;">
                <div class="cell col-6">
                    <label style="margin-right:10px; color:white;">Quantity:</label>
                </div>
                <div class="cell col-6">
                    <input  type="number"  v-model.number="quantity" style="width: 100%;">
                </div>
            </div>
            <br>
            <button @click="addToCart(product.name, quantity)" class="btn bg-dark p-2 rounded text-white w-100 mt-5" style="position: absolute; bottom: 0px;">Add To Cart
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['product', 'index', 'addToCart'],
    data () {
        return{
            quantity: 0
        }
    }
}
</script>