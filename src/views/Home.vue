
<template>
  <div class="home justify-center" >
    <h1>Hi There 👋</h1>
    <img src="@/assets/natepic.png"/>
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
  img {
    padding: 2em;
  }
</style>
