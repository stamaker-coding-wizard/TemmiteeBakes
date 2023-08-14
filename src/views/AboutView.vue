
<template>

    <div class="mainbody">
      <AboutPage />
    </div>
    

</template>

<script>

import AboutPage from '../components/Pages/AboutPage.vue'



export default {
  name: 'AboutView',
  components: {
    AboutPage
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    height: 100%;
  }
}
</style>
