<!--<template>-->
<!--  <div class="home">-->
<!--    <img alt="Vue logo" src="../assets/banner.png" />-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
<!--  </div>-->
<!--</template>-->

<template lang="pug">
  .home
    img(alt="Nate Logo" src="@/assets/banner.png")
    HelloWorld(msg="Welcome to Your Vue.js App")
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import navbar from "@/components/nav-bar.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    navbar
  }
};
</script>
