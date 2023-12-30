<script setup>
import Layout from "@/layouts/index.vue"
import HeadView from "./components/HeadView.vue";
import FooterView from "./components/FooterView.vue";
</script>

<template>

<Layout>
  <template #head>

    <HeadView></HeadView>

  </template>

  <template #main>
    <RouterView />
  </template>


  <template #footer>
    <FooterView></FooterView>


  </template>
</Layout>












 
</template>

<style scoped>

</style>
