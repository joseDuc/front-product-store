<script setup>
import { ref, defineProps, computed } from 'vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()

const props = defineProps({
  product: {
    type: Object,
    Required: true
  }
})
// Función para incrementar la cantidad
const incrementQuantity = () => {
  product.value.quantity += 1
}
// Función para decrementar la cantidad
const decrementQuantity = () => {
  if (product.value.quantity > 0) {
    product.value.quantity -= 1
  }
}
const product = ref(props.product)
//const quantity=ref(product.value.quantity)
const computedQuantity = computed(() => {
  return product.value.quantity < 0 ? 0 : product.value.quantity
})
</script>

<template>
  <section>
    <p>{{ product.name }}</p>
    <p>Precio: {{ product.price }}€</p>
    <p>{{ product.description }}</p>

    <img :src="product.image" alt="" />

    <p>Ref: {{ product.id }}</p>

    <article>
      <div class="quantity">
        <button @click="incrementQuantity">+</button>
        <button @click="decrementQuantity">-</button>
      </div>

      <button class="add-cart" @click="productStore.addToCart(product)">
        Añadir {{ computedQuantity }} al carro
      </button>
    </article>
  </section>
</template>

<style scoped>
section {
  background-color: rgb(121, 174, 144);
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
}
article {
  display: flex;
  flex-direction: column;

  .quantity {
    display: flex;
    justify-content: center;
  }
}
p {
  width: 80%;
  text-align: center;
  margin: 5px 0;
}

img {
  max-width: 100%;
  max-height: 50%;
}

button {
  width: 40px;
}

.add-cart {
  width: 120px;
}
</style>
