  <template>

<header>
    <slot name="head"></slot>
</header>

<main>
    <slot name="main"></slot>
</main>


<footer>
    <slot name="footer"></slot>
</footer>

  </template>
  
  <style>

*{
    box-sizing: border-box;
}

  body{
    min-height: 100vh;
    background-color: #1b1f23;
  }
  #app{
    padding:1.5rem;

  }
:root{
  scroll-behavior: smooth;
}



  @media screen and (min-width:900px) {
    #app{
   
    padding: 12rem 12rem 2rem 12rem;
    padding-top: 3rem;
  }

}
  header{
            position: sticky;
    /* top: 0; */
    top: 0;
    background: #1b1f23;
    z-index: 2;
}
  </style>
  
  <script setup >

  
  </script>