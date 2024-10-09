<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()
productStore.fetchProduct()
</script>

<template>
  <section>
    <h2>PRODUCTS</h2>
    <div class="product-show">
      <ProductCard
        v-for="product in productStore.arrayProduct"
        v-bind:key="product.id"
        :product="product"
      >
      </ProductCard>
    </div>
  </section>
</template>

<style scoped>


.product-show {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:10px;
}

</style>
