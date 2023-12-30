<template>
 <div class="foto">
    <figure class="foto__thumb">
      <img class="foto__mi" src="/img/portafolio.jpg" alt="edward santamria">
    </figure>
</div>
    </template>
    
    
    
    <style scoped>
        .foto{
            display: flex;
            justify-content: center;
        }
    .foto__thumb{
        margin: 0;
    }
    .foto__mi{
        border-radius: 50%;
    width: 55px
    }
    

    @media screen and (min-width:900px) {
        .foto__mi{
        border-radius: 50%;
    width: 75px
    }
}
    </style>
    
    
    
    
    <script setup>
    
    </script>
    