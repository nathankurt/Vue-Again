
<template>
  <div class="home justify-center" >
    <h1>Hi There, I'm Nate 👋</h1>
    <h2>A software developer with a love for technology and solving problems</h2>
    <v-img class="pics"
     :src="require('@/assets/Arches.jpg')"
     contain
     >
    </v-img>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'
  export default {
    components: {
      HelloWorld
    }
  }
</script>

<style>
  h1 {
    text-align: center;
  }
  .pics {
    padding: 2em;
  }
  
</style>
