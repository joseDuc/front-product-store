<script setup>
import { ref, defineProps, computed } from 'vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()

const props = defineProps({
  product: {
    type: Object,
    Required: true
  },
  
  addable: {
    type: Boolean
  }

})

// Función para incrementar la cantidad
const incrementQuantity = () => {
  message.value=''
  if (product.value.quantity<product.value.stock){
    product.value.quantity += 1
  }else{
    message.value=product.value.quantity + 1 +' Supera el stock'
  }
}

// Función para decrementar la cantidad
const decrementQuantity = () => {
    message.value=''
  if (product.value.quantity > 0) {
    product.value.quantity -= 1
  }
}
const product = ref(props.product)
//const quantity=ref(product.value.quantity)
const computedQuantity = computed(() => {
  return product.value.quantity < 0 ? 0 : product.value.quantity
})
const message = ref('')
</script>

<template>
  <section>
    <p>{{ product.name }}</p>
    <p>Precio: {{ product.price }}€</p>
    <p class="description"> {{ product.description }}</p>

    <img :src="product.image" alt="" />

    <p>Ref: {{ product.id }}</p>

    <article>
      <div class="quantity">
        <button class="counter" @click="incrementQuantity">+</button>
        <button class="counter" @click="decrementQuantity">-</button>
      </div>
      
      <button v-if="props.addable" class="add-cart" @click="productStore.addToCart(product)">
        Añadir {{ computedQuantity }} al carro
      </button>
      <p class="total" v-if="!props.addable" >Cantidad {{ computedQuantity }}</p>
    </article>
    <p class="message" @click="message=''">{{ message }}</p>
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

  .description{
    font-size: 1.2em;
    font-weight: bolder;
  }
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
  width: 100%;
  text-align: center;
}

img {
  max-width: 100%;
  max-height: 50%;
}

button {
  width: 40px;
  
}

.counter{
  font-weight: bolder;
  font-size: 15px;
}
.add-cart {
  width: 120px;
}

.total{
  color:#007bff ;
}

.message{
  color:red ;
  cursor: pointer;
}
</style>
