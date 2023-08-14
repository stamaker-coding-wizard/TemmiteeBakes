<template setup>
    
  <div style='padding-top: 100px'>
    
    

    <section class="p-0 pb-5 px-3 px-md-5 Hero_main_2rP1T text-white d-flex flex-column flex-md-row align-items-lg-center justify-content-between" style="height: 80vh;border-bottom: 2px solid gray;">
        <main class=" col-12 col-md-5 col-lg-5 text-center text-md-start">
            <h1 class="Hero_mainHeader__28aZg cp text-center text-md-start">extend love<br><span>from a distance</span><br></h1>
            <p class="Hero_h6__3OBBm h6">Cakes delivered within 5-6 hours, anywhere in Nigeria.</p>
            
        </main>
        <div class="d-flex align-items-center justify-content-center me-5">
            <div style="display: inline-block; max-width: 100%; overflow: hidden; position: relative; box-sizing: border-box; margin: 0px;">
                <div style="box-sizing: border-box; display: block; max-width: 100%;">
                    <img  alt="" aria-hidden="true" src="cake2.jpg" style="border-radius:30% 70% 70% 30% / 30% 30% 70% 70% ; max-width: 100%; display: block; margin: 0px; border: none; padding: 0px;width:100%;height: 400px;">
                </div>
                
            </div>
        </div>
    </section>

    <section class="p-5" style="border-bottom: 2px solid gray;">
        <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12">
                <h1 class="text-white">Cakes for Everyday</h1> <br>
                <p class="" style="color: whitesmoke">Treat your loved ones with a surprise birthday cake. View our catalogue of custom cakes for surprise birthdays.</p> <br>
                <button class="btn btn-dark rounded-5 w-50" style="color: orange;">View All</button>
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="card-wrapper">
                                
                                <ProductCard 
                                    v-for="(product, index) in inventory" 
                                    :key="product.id" 
                                    class="card"
                                    :index="index"
                                    :product="product"
                                    :addToCart="addToCart" 
                                />
                                
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card-wrapper">
                                
                                <ProductCard 
                                    v-for="(product, index) in inventory" 
                                    :key="product.id" 
                                    class="card"
                                    :index="index"
                                    :product="product"
                                    :addToCart="addToCart" 
                                />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card-wrapper">
                                <ProductCard 
                                    v-for="(product, index) in inventory" 
                                    :key="product.id" 
                                    class="card"
                                    :index="index"
                                    :product="product"
                                    :addToCart="addToCart" 
                                />
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
            </div>
        </div>
    </section>

    <section class="p-5" style="border-bottom: 2px solid gray;">
        <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12">
                <h1 class="text-white">Cakes For Birthday</h1> <br>
                <p class="" style="color: whitesmoke">Treat your loved ones with a surprise birthday cake. View our catalogue of custom cakes for surprise birthdays.</p> <br>
                <button class="btn btn-dark rounded-5 w-50" style="color: orange;">View All</button>
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12">
               
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <div class="card-wrapper">
                                
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake3.jpg" class="card-img-top" alt="..." style="height: 100%; width: 100%;">
                                    </div>
                                    <div class="card-body d-flex">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake4.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body d-flex">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake5.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <div class="card-wrapper">
                                
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake2.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake2.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake2.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card-wrapper">
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake2.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake2.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake2.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section class="p-5" style="border-bottom: 2px solid gray;">
        <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12">
                <h1 class="text-white">Cakes for Wedding</h1> <br>
                <p class="" style="color: whitesmoke">Treat your loved ones with a surprise birthday cake. View our catalogue of custom cakes for surprise birthdays.</p> <br>
                <button class="btn btn-dark rounded-5 w-50" style="color: orange;">View All</button>
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="card-wrapper">
                                
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake3.jpg" class="card-img-top" alt="..." style="height: 100%; width: 100%;">
                                    </div>
                                    <div class="card-body d-flex">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake4.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body d-flex">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake5.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card-wrapper">
                                
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake2.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake2.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake2.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card-wrapper">
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake2.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake2.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Owner Queen</h5>
                                        <p class="card-text">N38,000</p>
                                        
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="image-wrapper">
                                        <img src="cake2.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Owner Queen</h5>
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
            </div>
        </div>
    </section>

    <section class="p-5" style="border-bottom: 2px solid gray;">
        <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12">
                <h1 class="text-white">Cakes for Children</h1> <br>
                <p class="" style="color: whitesmoke">Treat your loved ones with a surprise birthday cake. View our catalogue of custom cakes for surprise birthdays.</p> <br>
                <button class="btn btn-dark rounded-5 w-50" style="color: orange;">View All</button>
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="card-wrapper">
                            
                            <div class="card">
                                <div class="image-wrapper">
                                    <img src="cake3.jpg" class="card-img-top" alt="..." style="height: 100%; width: 100%;">
                                </div>
                                <div class="card-body d-flex">
                                    <h5 class="card-title">Owner Queen</h5>
                                    <p class="card-text">N38,000</p>
                                    
                                </div>
                            </div>
                            <div class="card">
                                <div class="image-wrapper">
                                    <img src="cake4.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body d-flex">
                                    <h5 class="card-title">Owner Queen</h5>
                                    <p class="card-text">N38,000</p>
                                    
                                </div>
                            </div>
                            <div class="card">
                                <div class="image-wrapper">
                                    <img src="cake5.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Owner Queen</h5>
                                    <p class="card-text">N38,000</p>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card-wrapper">
                            
                            <div class="card">
                                <div class="image-wrapper">
                                    <img src="cake2.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Owner Queen</h5>
                                    <p class="card-text">N38,000</p>
                                    
                                </div>
                            </div>
                            <div class="card">
                                <div class="image-wrapper">
                                    <img src="cake2.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Owner Queen</h5>
                                    <p class="card-text">N38,000</p>
                                    
                                </div>
                            </div>
                            <div class="card">
                                <div class="image-wrapper">
                                    <img src="cake2.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Owner Queen</h5>
                                    <p class="card-text">N38,000</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card-wrapper">
                            <div class="card">
                            <div class="image-wrapper">
                                <img src="cake2.jpg" class="card-img-top" alt="...">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Owner Queen</h5>
                                <p class="card-text">N38,000</p>
                                
                            </div>
                            </div>
                            <div class="card">
                            <div class="image-wrapper">
                                <img src="cake2.jpg" class="card-img-top" alt="...">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Owner Queen</h5>
                                <p class="card-text">N38,000</p>
                                
                            </div>
                            </div>
                            <div class="card">
                            <div class="image-wrapper">
                                <img src="cake2.jpg" class="card-img-top" alt="...">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Owner Queen</h5>
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
            </div>
        </div>
    </section>

  </div>
</template>

<script>
import ProductCard from '../ProductCard/ProductCard.vue'
export default {
    name: 'Card',
components: {
   ProductCard
},

props: ['inventory', 'addToCart']
 

}



</script>

