<script setup>
import { ref, defineProps } from 'vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()

const props = defineProps({
  product: {
    type: Object,
    Required: true
  }
})

const product = ref(props.product)

</script>

<template>
  <section>
    <p>{{ product.name }}</p>
    <p>Precio: {{ product.price }}€</p>
    <p>{{ product.description }}</p>
    <p>Ref:  {{ product.id }}</p>
    <img :src="product.image" alt="" />
    <article>
      <div class="quantity">
        <button @click="product.quantity++">+</button>
        <button @click="product.quantity--">-</button>
      </div>

      <button class="add-chart" @click="productStore.addToChart(product)">
        Añadir {{ product.quantity }} al carro
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
article{
  display: flex;
  flex-direction: column;

  .quantity{
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

.add-chart {
  width: 120px;
}

</style>
