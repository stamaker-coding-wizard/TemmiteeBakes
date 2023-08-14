<template>
 
  <div class="mainbody">
    <Card />
  </div>
    
</template>

<script>
import Card from '../components/Pages/CardMain/Card.vue'


export default {
  name: 'Products',
  components: {
    Card,
  }
  
}
</script>
  
<style>
.card-group{
  display: flex;
  flex-wrap:wrap;
  gap: 20px;
}
</style>