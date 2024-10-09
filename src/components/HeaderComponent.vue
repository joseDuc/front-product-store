<script setup></script>

<template>
  <header>
    <h2>Header</h2>
    <div>
      <router-link to="/">Go to HOME</router-link>
      <router-link to="/chart">Chart</router-link>
    </div>
    
  </header>
</template>

<style scoped>
header {
  background-color: rgb(108, 148, 185);
  width: 100vw;
  div{
    display: flex;
    justify-content: center;
    gap:20px
  }
}
h2 {
  text-align: center;
}
</style>
