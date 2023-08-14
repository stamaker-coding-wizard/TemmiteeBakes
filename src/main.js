import './assets/style/style.scss'

import './assets/main.css'
import './components/Pages/HomePage/HomePageCarousel/Carousel.css'
import './components/Pages/HomePage/CustomerSays/CustomerSay.css'
import '../src/components/Pages/CardMain/CardCakeDraggable/CardCakeGragCarousel.css'
import './components/Pages/CardMain/CardMainPage.css'




import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
