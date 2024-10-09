<script setup></script>

<template>
  <header>
    <h2>Product Store</h2>
    <div>
      <router-link to="/">Go to HOME</router-link>
      <router-link to="/cart">Cart</router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: rgb(108, 148, 185);
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  div {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
}
h2 {
  text-align: center;
  color: black;
}
</style>
