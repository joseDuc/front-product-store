import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const arrayProduct = ref([])
  const currentCart = ref([])
  const currentProduct = ref({})

  //Endpoint Base
  const baseURL = 'http://localhost:8080/api/products'

  async function createProduct(product) {
    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      const newProduct = await response.json()
      arrayProduct.value.push(newProduct) // Actualizar la lista de productos
      alert('El producto ' + product.description + ' ha sido creado')
    } catch (error) {
      alert(error)
    }
  }

  async function findProduct(id) {
    let response = ''
    currentProduct.value = null
    try {
      response = await fetch(baseURL + '/' + id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const product = await response.json()
      currentProduct.value = product
    } catch (error) {
      alert(error.response?.data?.message || 'Error al buscar el producto ' + id)
      //alert(error.response.status)
      currentProduct.value = null
    }
  }

  async function editProduct() {
    try {
      const response = await fetch(baseURL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentProduct.value)
      })
      currentProduct.value = await response.json()
      alert('El producto ' + currentProduct.value.id + ' ha sido editado')
    } catch (error) {
      alert('Error al editar el producto ' + currentProduct.value.id)
    }
  }

  async function deleteProduct() {
    try {
      if (currentProduct.value) {
        await fetch(baseURL + '/' + currentProduct.value.id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        alert('El producto ' + currentProduct.value.id + ' ha sido eliminado')
      }
    } catch (error) {
      alert('Error al eliminar el producto ' + currentProduct.value.id)
    }
  }

  function confirmBuy() {
    alert('Compra confirmada')
  }

  function addToCart(product) {
    const productoEncontrado = currentCart.value.find((elemento) => elemento.id === product.id)
    if (!productoEncontrado) {
      currentCart.value.push(product)
    } else {
      if (productoEncontrado.quantity + product.quantity <= productoEncontrado.stock) {
        const q = product.quantity
        productoEncontrado.quantity += q
      } else {
        productoEncontrado.message.value = 'Supera el stock'
      }
    }
  }

  function debugCart() {
    currentCart.value = currentCart.value.filter((item) => item.quantity > 0)
  }

  async function fetchProduct() {
    const response = await fetch(baseURL)
    const products = await response.json()
    arrayProduct.value = products
    arrayProduct.value.forEach((product) => {
      product.quantity = 0
    })
  }

  return {
    arrayProduct,
    currentCart,
    currentProduct,
    createProduct,
    confirmBuy,
    addToCart,
    fetchProduct,
    findProduct,
    editProduct,
    deleteProduct,
    debugCart
  }
})
