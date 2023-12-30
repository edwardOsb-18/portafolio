<template>
  <div class="about">
    <h1 v-crema>This is an about page{{ $u }}</h1>
    <p>{{ $route.path }}</p>
    

  </div>
</template>

<style>

</style>

<script setup >
import { useRoute } from "vue-router";

const route=useRoute()
console.log(route)
const ll=()=>{
  return {s:"wss",color:3}
}

const l=ll()

</script>