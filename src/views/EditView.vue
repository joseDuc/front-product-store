<script setup>

import { useProductStore } from '@/stores/product'
import { useRoute } from 'vue-router'

const route = useRoute()
const productStore = useProductStore()
// Obtén el ID del producto desde los parámetros de la ruta
const productId = route.params.id
productStore.findProduct(productId)

// Aquí puedes agregar la función para manejar el submit del formulario
const handleSubmit = (e) => {
  e.preventDefault()
  // Lógica para enviar los datos del formulario, por ejemplo, a una API
  productStore.editProduct()
}
const handleDelete = (e) => {
  e.preventDefault()
  // Lógica para enviar los datos del formulario, por ejemplo, a una API
  productStore.deleteProduct()
}
</script>

<template>
  <section>
    <h2 class="title">EDITOR PRODUCT</h2>
    <form @submit="handleSubmit">
      <div class="data-form">
        <label for="name">Name:</label>
        <input
          v-model="productStore.currentProduct.name"
          type="text"
          id="name"
          placeholder="Enter product name"
          required
        />
      </div>

      <div class="data-form">
        <label for="description">Description:</label>
        <textarea
          v-model="productStore.currentProduct.description"
          id="description"
          placeholder="Enter product description"
          required
        ></textarea>
      </div>

      <div class="data-form">
        <label for="image">Image URL:</label>
        <input
          v-model="productStore.currentProduct.image"
          type="text"
          id="image"
          placeholder="Enter image URL"
          required
        />
      </div>

      <div class="data-form">
        <label for="stock">Stock:</label>
        <input
          v-model="productStore.currentProduct.stock"
          type="number"
          id="stock"
          min="0"
          placeholder="Enter stock quantity"
          required
        />
      </div>

      <div class="data-form">
        <label for="price">Price:</label>
        <input
          v-model="productStore.currentProduct.price"
          type="number"
          id="price"
          min="0"
          step="0.01"
          placeholder="Enter product price"
          required
        />
      </div>

      <div class="buttons">
        <div class="data-form btn-submit">
          <button type="submit">Edit</button>
        </div>

        <div class="data-form btn-delete">
          <button @click="handleDelete">Delete</button>
        </div>
      </div>

    </form>
  </section>
</template>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 10px;
}
.data-form {
  display: flex;
  justify-content: space-between;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
  border: 1px solid;
  margin: 0 auto;
  padding: 10px;

  .btn-submit {
    justify-content: center;
  }
}

label {
  font-weight: bold;
  align-content: center;
}

input,
textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60%;
  resize: none;
}
input[type="number"]{
  text-align: right;
}
button {
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.buttons{
    display: flex;
    justify-content: center;
    gap:10px;
}
</style>
