    <template>
 

    <nav>

<ul class="menu">
<li class="menu__item" v-for="menu in menus"  :key="menu.menu"><a class="menu__link" :href="menu.url">{{ menu.menu }}</a></li>

</ul>

    </nav>
    </template>



      
      <style scoped>
     .menu{
        list-style: none;
    display: flex;
    justify-content: space-evenly;
    padding: 2rem 0 2rem 0;
   
  
     }
     .menu__link{
        color: white;
     }


     @media screen and (min-width:900px) { .menu__link{
        font-size: 1.2rem;
     }

}
      </style>
      


      <script setup >
import { reactive } from "vue";

    const menus=reactive([{menu:"Sobre mi",
      url:"#sobre"},
      {menu:"Experiencia",
      url:"#experiencia"},
      {menu:"Contacto",
      url:"#contacto"},
      {menu:"Proyectos",
      url:"#proyectos"}])
      
      </script>

      