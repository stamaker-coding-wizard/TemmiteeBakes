<template>
    <div>  
        <section id="home" class="p-0 pb-5 px-3 px-md-5" style="margin-top: 100px;">
            <section class="Hero_main_2rP1T text-white d-flex flex-column flex-md-row align-items-lg-center justify-content-between" style="height: 100vh;">
                <main class=" col-12 col-md-5 col-lg-5 text-center text-md-start main justify-content-sm-center align-items-sm-center">
                    <h1 class="Hero_mainHeader__28aZg cp text-center text-md-start">Send birthday cakes<br><span>anywhere in Nigeria.</span><br></h1>
                    <p class="Hero_h6__3OBBm h6">Pay on delivery. Zero delivery charges</p>
                    <div class="cursor d-flex d-md-block align-items-center justify-content-center">
                        <button id="shop-via-whatsapp" class="undefined btn d-flex align-items-center radius-25 font-inter btn-orange">
                            <div style="display: inline-block; max-width: 100%; overflow: hidden; position: relative; box-sizing: border-box; margin: 0px;">
                                <div style="box-sizing: border-box; display: block; max-width: 100%;">
                                    <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style="max-width: 100%; display: block; margin: 0px; border: none; padding: 0px;">
                                </div>
                                <img src="/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Ficons%2Fwhatsapp.916a0645b9c13383614cb91a27b02dee.svg&amp;w=48&amp;q=75" decoding="async" data-nimg="true" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" srcset="/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Ficons%2Fwhatsapp.916a0645b9c13383614cb91a27b02dee.svg&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Ficons%2Fwhatsapp.916a0645b9c13383614cb91a27b02dee.svg&amp;w=48&amp;q=75 2x">
                            </div>
                            <span id="shop-via-whatsapp" class="white-span ms-3 font-bold tracking-wide">Shop Via Whatsapp</span> 
                        </button>
                    </div>
                </main>
                <div class="d-flex align-items-center justify-content-center me-5 mb-sm-5 d-none d-sm-block">
                    <div style="display: inline-block; max-width: 100%; overflow: hidden; position: relative; box-sizing: border-box; margin: 0px;">
                        <div style="box-sizing: border-box; display: block; max-width: 100%;">
                            <img  alt="" aria-hidden="true" src="cake5.jpg" style="border-radius:30% 70% 70% 30% / 30% 30% 70% 70% ; max-width: 100%; display: block; margin: 0px; border: none; padding: 0px;width:100%;height: 400px;">
                        </div>
                        
                    </div>
                </div>
            </section>
            
            <div class="my-element mt-sm-10 mb-5 container" style="height: 95vh; border-bottom: 2px solid gray; " >
                <h1 class="text-white text-center">Feature Product</h1>
                
                
                    
                <div class="card-wrapper1">
                    
                    <ProductCard 
                    v-for="(product, index) in inventory" 
                    :key="product.id" 
                    class="card"
                    :index="index"
                    :product="product"
                    :addToCart="addToCart">
                        
                    </ProductCard>
                    
                    
                    
                    
                </div>
                                
                                
                       
                        
                    

                   
    
    
                    
                
            </div>

            <section class="d-flex company align-items-lg-center justify-content-between mb-5 pb-3" style="border-bottom: 2px solid gray; display: block;max-height:100vh">
                
                <div class="col-lg-8 col-md-12 col-sm-12">
                    <div>
                        <h2 class="text-white">
                            Temmitee Cakes  helps professionals, service-men, public servants and business owners within and outside Nigeria, living far away from their loved ones and seeking a reliable channel to send birthday packages & extend love from a distance.
                        </h2>
                        <br><br>
                        <button class="btn rounded-5 text-white w-30 mb-4" style="background-color: orange;">View Cakes</button>
                    </div>
                </div>


                <div class="col-lg-3 col-md-12 col-sm-12">
                    <div class="box-company rounded  p-4">
                        <div class="d-flex">
                            <div class="col-2">
                                <i></i>
                            </div>
                            <div class="box-cm-text col-10">
                                <h4 class="text-white" style="font-size: 20px;font-weight: 500;">Fast Shipping</h4>
                                <p style="color:azure; font-size: 14px;">Send surprise birthday cake to family & friends in Lagos, Abuja, PH, Enugu, Oyo, Ogun, Imo, Edo, Delta, Ondo, Uyo, Kaduna Anambra
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </section>

            <section>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="card-wrapper">
                                
                                <div class="card card2 bg-white">
                                    <div class="image-wrapper image-wrapper2">
                                        <img src="bibat1.jpg" class="card-img-top-2 card-img-top" alt="...">
                                    </div>
                                    <div class="card-body2">
                                        <h5 class="card-title">"Thank You Ma, Nice working with you"</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card card2 bg-white">
                                    <div class="image-wrapper image-wrapper2">
                                        <img src="daniel.jpg" class="card-img-top-2 card-img-top" alt="...">
                                    </div>
                                    <div class="card-body2 d-flex">
                                        <h5 class="card-title">"Thank You Ma, Nice working with you"</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card card2 bg-white">
                                    <div class="image-wrapper image-wrapper2">
                                        <img src="bibat.jpg" class="card-img-top-2 card-img-top" alt="...">
                                    </div>
                                    <div class="card-body2">
                                        <h5 class="card-title">"Thank You Ma, Nice working with you"</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card-wrapper">
                                
                                <div class="card card2 bg-white">
                                    <div class="image-wrapper image-wrapper2">
                                        <img src="daniel.jpg" class="card-img-top-2 card-img-top" alt="...">
                                    </div>
                                    <div class="card-body2">
                                        <h5 class="card-title">"Thank You Ma, Nice working with you"</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card card2 bg-white">
                                    <div class="image-wrapper image-wrapper2">
                                        <img src="daniel.jpg" class="card-img-top-2 card-img-top" alt="...">
                                    </div>
                                    <div class="card-body2">
                                        <h5 class="card-title">"Thank You Ma, Nice working with you"</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card card2 bg-white">
                                    <div class="image-wrapper image-wrapper2">
                                        <img src="daniel.jpg" class="card-img-top-2 card-img-top" alt="...">
                                    </div>
                                    <div class="card-body2">
                                        <h5 class="card-title">"Thank You Ma, Nice working with you"</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card-wrapper">
                                <div class="card card2 bg-white">
                                    <div class="image-wrapper image-wrapper2">
                                        <img src="bibat1.jpg" class="card-img-top-2 card-img-top" alt="...">
                                    </div>
                                    <div class="card-body2">
                                        <h5 class="card-title">"Thank You Ma, Nice working with you"</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card card2 bg-white">
                                    <div class="image-wrapper image-wrapper2">
                                        <img src="bibat1.jpg" class="card-img-top-2 card-img-top" alt="...">
                                    </div>
                                    <div class="card-body2">
                                        <h5 class="card-title">"Thank You Ma, Nice working with you"</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card card2 bg-white">
                                    <div class="image-wrapper image-wrapper2">
                                        <img src="bibat1.jpg" class="card-img-top-2 card-img-top" alt="...">
                                    </div>
                                    <div class="card-body2">
                                        <h5 class="card-title">"Thank You Ma, Nice working with you"</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="prev-next">
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </section>

            
        </section> 
    
        

        
    </div>
</template>

<script>

//import Cake from '@/Cake.json'
import ProductCard from '../ProductCard/ProductCard.vue'
export default {
name : 'Home',


props: ['inventory', 'addToCart'],

components: {
    ProductCard
}
/*data() {
    return {
        inventory: Cake
    }
},*/


}

</script>


