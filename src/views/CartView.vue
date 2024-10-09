<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/stores/product'
import { computed, ref } from 'vue'

const productStore = useProductStore()

productStore.debugCart() //quita los productos con quantity < 1
const productsInCart = ref(productStore.currentCart)

const finalPrice = computed(() => {
  let result = 0
  productsInCart.value.forEach((product) => {
    result += product.quantity * product.price
  })
  return result
})
</script>

<template>
  <section>
    <article>
      <div class="buy-list">
        <h2>PURCHASED PRODUCTS</h2>
        <div class="list">
          <ProductCard
            v-for="product in productsInCart"
            :product="product"
            v-bind:key="product.id"
          />
        </div>
      </div>
    </article>
    <article v-if="productsInCart.length > 0" class="confirm-list">
      <p>¿Está conforme con la compra?</p>
      <button class="btn-confirm" @click="productStore.confirmBuy()">¡Sí, comprar ya!</button>
      <p>El precio final es de {{ finalPrice }}</p>
    </article>
    <p v-if="!productsInCart.length > 0" >No hay productos en el carro</p>
  </section>
</template>

<style scoped>
.buy-list {
  display: flex;
  flex-direction: column;
}
h2 {
  text-align: center;
}
.list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
  justify-content: space-around;
}
.confirm-list {
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn-confirm {
    width: 200px;
    padding: 5px;
    font-weight: bolder;
    background-color: #007bff;
    color: white;
    border: none;
  }
}
p {
  text-align: center;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
