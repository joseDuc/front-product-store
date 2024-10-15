<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()

const name = ref('')
const description = ref('')
const image = ref('')
const stock = ref(0)
const price = ref(0)

// Aquí puedes agregar la función para manejar el submit del formulario
const handleSubmit = (e) => {
  e.preventDefault()
  // Lógica para enviar los datos del formulario, por ejemplo, a una API
  const newProduct = {
    name: name.value,
    description: description.value,
    image: image.value,
    stock: stock.value,
    price: price.value
  }
  productStore.createProduct(newProduct)
}
</script>

<template>
  <section>
    <h2 class="title">CREATE PRODUCT</h2>
    <form @submit="handleSubmit">
      <div class="data-form">
        <label for="name">Name:</label>
        <input v-model="name" type="text" id="name" placeholder="Enter product name" required />
      </div>

      <div class="data-form">
        <label for="description">Description:</label>
        <textarea
          v-model="description"
          id="description"
          placeholder="Enter product description"
          required
        ></textarea>
      </div>

      <div class="data-form">
        <label for="image">Image URL:</label>
        <input v-model="image" type="text" id="image" placeholder="Enter image URL" required />
      </div>

      <div class="data-form">
        <label for="stock">Stock:</label>
        <input
          v-model="stock"
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
          v-model="price"
          type="number"
          id="price"
          min="0"
          step="0.01"
          placeholder="Enter product price"
          required
        />
      </div>

      <div class="data-form btn-submit">
        <button type="submit">Create</button>
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

input[type='number'] {
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
</style>
