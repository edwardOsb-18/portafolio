<template>
    <div class="experiencia" id="experiencia">
        <div class="experiencia__titulo">
<v-icon name="bi-briefcase-fill" animation="wrench" fill="white" scale="2"></v-icon>
            <h2>Experiencia laboral</h2>
        </div>
    
<ol class=" experiencia__trayectoria relative border-s border-gray-200 dark:border-gray-700">                  
    <li v-for="experiencia in experiencias" :key="experiencia" class="mb-10 ms-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{experiencia.titulo}} </h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{experiencia.tiempo}}</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{experiencia.trabajo}}</p>
        <figure class="experiencia__thumb">
            <a :href="experiencia.imagen" target="_blank"> <img class="experiencia__img" :src="experiencia.imagen" alt=""></a>
           
        </figure>
        
    </li>
   
</ol>
</div>
</template>



<style scoped>
#experiencia{
    scroll-margin-top: 8rem;
}
.text-gray-500{
    color: #65b5b5;

}
.experiencia__titulo{
    color: white;
    display: flex;
    gap: 0.5rem;
    align-items: center;

}
.experiencia__trayectoria{
    margin-top: 2rem;
    color:white;
    margin:2.5rem
}
.text-gray-900{
    color:#dfe6e9
}
.experiencia__thumb{
margin: 0;
margin-top: 28px;
}
.experiencia__img{
width:30%;
border-radius:5%
}

h2{font-size: 1.4rem;

    font-family: 'Archivo Black', sans-serif;
color: #ffffffdb;
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
  
  <script setup >
  import { reactive } from "vue";
const experiencias =reactive([



{titulo:"MÉDICOS SALUD",
tiempo:"08 de Enero ,2020 hasta 08 de Abril,2020",
trabajo:"Soporte técnico",
imagen:"/img/medicos.png"

},
{titulo:"NEON HOUSE LED",
tiempo:"20 de Diciembre ,2020 hasta 20 de Marzo,2021",
trabajo:"Practicante de desarrollador Junior",
imagen:"/img/neon.jpg"

},
{titulo:"SYNLAB",
tiempo:"03 de Junio ,2021 hasta 31 de JuLio,2022",
trabajo:"Auxiliar de tecnología de la información",
imagen:"/img/synlab.jpg"

},
{titulo:"BALKANED",
tiempo:"01 de Agosto ,2022 hasta 30 de Junio,2023",
trabajo:"Desarrollador Front end con Vue",
imagen:"/img/balkaned.jpg"

}

]

)
  
  </script>