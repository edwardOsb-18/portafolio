<template>
 
    <div class="Contacto" id="contacto">
        <ul class="contacto__menu">
<li class="contacto__item" v-for="menu in menus"  :key="menu"><a class="contacto__link" :href="menu.url" ><v-icon :name="menu.name"></v-icon>{{ menu.alias }}</a></li>
</ul>
    </div>
   </template>
    
    <style scoped>
    #contacto{
    scroll-margin-top: 5rem;
}
    .contacto__menu{
        list-style: none;
    display: flex;
    justify-content: space-evenly;
    padding:2rem 3rem 4rem 3rem;
    flex-direction: column;
    gap: 0.5rem;

  
     }



     @media screen and (min-width:900px) {
        .contacto__menu{
        list-style: none;
    
    justify-content: flex-start;
    padding: 2rem 0;
    flex-direction: row;
    gap: 0.5rem;

  
     }
     .contacto__item{
        padding: .5rem;
     }
}









     .contacto__item{
        background: #5d6366;
    border-radius: 0.5rem;
    padding: 0.1rem;
    display: flex;
    justify-content: center;
}
     
     .contacto__link{
        color: white;
        display: flex;
        flex-wrap: wrap;
        gap: .1rem;
        align-items: center;
     }
    </style>
    
    
    
    
    <script setup>
    import { reactive } from "vue";

    const menus=reactive([{
        name:"io-logo-github",
        alias:"GitHub",
        url:"https://github.com/edwardOsb-18"
        
    },{
        name:"io-logo-linkedin",
        alias:"Linkedin",
        url:"https://www.linkedin.com/in/edward-santamria-benites-818588170/"
    },
    {
        name:"md-outgoingmail"
        ,
        alias:"edhuosb18@gmail.com",
        url:null
    }])
    </script>
    