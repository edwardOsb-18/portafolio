<template>
 
    <div class="titulo">
        
        <h1 class="titulo__nombre">Hola,soy edward</h1>
        <span class="titulo__disponibilidad"><a href="/img/edward_santamariaB.pdf" download>Descargar CV</a></span>
    </div>
   </template>
    
    <style scoped>
     
      
  .titulo{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    color: white;
    
  }

  @media screen and (min-width:900px) {
    .titulo{
gap: 1.5rem;
  }

}
  .titulo__nombre{
font-size: 1.3rem;
font-family: 'Archivo Black', sans-serif;
color: #ffffffdb;

  }



  @media screen and (min-width:900px) {
    .titulo__nombre{
font-size: 3rem;
  }

}

  .titulo__disponibilidad{
    padding: 0.2rem;
    background: #1cabc34a;
    border-radius: 0.3rem;
    font-size: .8rem;
    color: cyan;
  }

  @media screen and (min-width:900px) {
    .titulo__disponibilidad{
font-size: 1.2rem;
  }
  a{padding: .5rem;}

}
    </style>
    
    
    
    
    <script setup>
    
    </script>
    