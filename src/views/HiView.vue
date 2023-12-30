<template>
    <div class="test">
      <h1 >Hiiiiiiii</h1>
      <p>{{ prop}}</p>
  
    </div>
  </template>
  
  <style>
  
  </style>
  
  <script setup >
  const prop=defineProps({
    hi:{
        type:String,
        default:"cremas"
    }
})
  
  
  </script>