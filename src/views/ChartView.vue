<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/stores/product'
import { computed, ref } from 'vue'

const productStore = useProductStore()

productStore.debugChart();//quita los productos con quantity < 1
const productsInChart = ref(productStore.currentCart)

const finalPrice = computed(() => {
  let result = 0
  productsInChart.value.forEach((product) => {
    result += product.quantity * product.price
  })
  return result
})



</script>

<template>
  <section>
    <article>
      <div class="buy-list">
        <h2>PRODUCTOS COMPRADOS</h2>
        <div class="list">
          <ProductCard
            v-for="product in productsInChart"
            :product="product"
            v-bind:key="product.id"
          />
        </div>
      </div>
    </article>
    <article class="confirm-list">
      <p>¿Está conforme con la compra?</p>
      <button class="btn-confirm" @click="productStore.confirmBuy()">¡Sí, comprar ya!</button>
      <p>El precio final es de {{ finalPrice }}</p>
    </article>
  </section>
</template>

<style scoped>
.buy-list {
  display: flex;
  flex-direction: column;
  
  
}
h2{
    text-align: center;
  }
.list {
    display: flex;
    gap:10px;
    margin-bottom: 10px;
    justify-content: space-around;
}
.confirm-list{
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn-confirm{
    width: 200px;
  }
} 
p{
  text-align: center;
}
</style>
