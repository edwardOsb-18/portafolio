
<template>
    <div class="primero"> <ImagenView></ImagenView>
 <TitleView></TitleView></div>
<div class="segundo">
    <DescripcionView></DescripcionView>
    <ContactoView></ContactoView>

</div>

<div class="cuarto">

<FormacionView></FormacionView>
</div>

<div class="tercero">
    <ExperienciaView></ExperienciaView>
</div>

<div class="quinto">

<ProyectosView></ProyectosView>
</div>
</template>



<style scoped>
.primero{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
    gap:.5rem
}


@media screen and (min-width:900px) {
    .primero{
   margin-top: 2rem;
}
}
.tercero{
  
}
</style>




<script setup>
import ImagenView from "@/components/home/ImagenView.vue"
import TitleView from "@/components/home/TitleView.vue"
import DescripcionView from "@/components/home/DescripcionView.vue"
import ContactoView from "@/components/home/ContactoView.vue"
import ExperienciaView from "@/components/home/ExperienciaView.vue"
import ProyectosView from "@/components/home/ProyectosView.vue"

import FormacionView from "@/components/home/FormacionView.vue"

</script>
