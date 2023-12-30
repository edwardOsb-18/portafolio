<template>
    <div class="formacion">
           <div class="formacion__titulo">
   <v-icon name="io-person-circle" animation="wrench" fill="white" scale="2"></v-icon>
               <h2>Formación</h2>
               </div>

               
<ol class="relative border-s border-gray-200 dark:border-gray-700 formacion__trayectoria">   

    <template v-for="habilidad in formacion" :key="habilidad">
        <li  class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{habilidad.tiempo}}</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ habilidad.titulo }}</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ habilidad.descripcion }}</p>
       
    </li>
   
    </template>               


    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"></time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">HABILIDADES</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"><v-icon name="co-js" fill="white" scale="2"></v-icon><v-icon name="vi-file-type-vue" fill="white" scale="2"></v-icon>
            <v-icon name="vi-file-type-css" fill="white" scale="2"></v-icon>
            <v-icon name="vi-file-type-html" fill="white" scale="2"></v-icon>
            <v-icon name="vi-file-type-pug" fill="white" scale="2"></v-icon>
            
            <v-icon name="vi-file-type-sass" fill="white" scale="2"></v-icon>
            <v-icon name="vi-file-type-mysql" fill="white" scale="2"></v-icon>
            <v-icon name="io-logo-figma" fill="white" scale="2"></v-icon>
            <v-icon name="io-logo-github" fill="white" scale="2"></v-icon> 
            <v-icon name="vi-file-type-node" fill="white" scale="2"></v-icon>
        </p>
       
    </li>
   
</ol>


       




       </div>
      </template>
       
       <style scoped>
        .formacion__trayectoria{
            margin: 2.5rem;
            margin-bottom: 4rem;
        }
.formacion__titulo{
    color: white;
    display: flex;
    gap: 0.5rem;
    align-items: center;

}
h2{font-size: 2rem;

    font-family: 'Archivo Black', sans-serif;
color: #ffffffdb;}
.text-gray-900{
    color: #c7c0c0;
}
.text-gray-500{
    color: #65b5b5;

}
.text-gray-400{
    color:rgb(183 119 119 / 81%)
}


@media screen and (min-width:900px) {
h2{
    font-size: 2.5rem;
}

   .text-base {
    font-size: 1.2rem;
}

.text-sm{
    font-size: 1rem;
}
.text-lg{
    font-size: 1.5rem;
}
}

       </style>
       
       
       
       
       <script setup>
import { reactive } from "vue";


        const formacion=reactive([{
            tiempo:"Agosto 2020",
            titulo:"UNIVERSIDAD TECNOLÓGICA DEL PERÚ",
            descripcion:" Bachiller en Ingeniería de Sistemas e Informática."
        },
        {
            tiempo:"Febrero 2017",
            titulo:"ICPNA",
            descripcion:"Ingles básico terminado."
        },
        {
            tiempo:"Enero 2017",
            titulo:"SISTEMAS UNI",
            descripcion:"Conectividad y redes IP, Redes inalámbricas."
        }
        
        
        ])
      
       </script>
       