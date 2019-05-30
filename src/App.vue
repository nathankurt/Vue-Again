<template>
  <div id="app">
    <v-app dark>
      <Navbar />

      <!--    <v-toolbar app>-->
      <!--      <v-toolbar-title class="headline text-uppercase">-->
      <!--        <span>Vuetify</span>-->
      <!--        <span class="font-weight-light">MATERIAL DESIGN</span>-->
      <!--      </v-toolbar-title>-->
      <!--      <v-spacer></v-spacer>-->
      <!--      <v-btn-->
      <!--        flat-->
      <!--        href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
      <!--        target="_blank"-->
      <!--      >-->
      <!--        <span class="mr-2">Latest Release</span>-->
      <!--      </v-btn>-->
      <!--    </v-toolbar>-->

      <v-content>
        <v-container fluid fill-height>
          <v-layout wrap justify-center align-center>
            <v-flex shrink>
              <router-view />
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <VFooter />
    </v-app>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import VFooter from "@/components/VFooter";
export default {
  name: "App",
  components: {
    Navbar,
    VFooter,
  },
  data() {
    return {
      //
    };
  }
};
</script>



<style lang="scss">
  #app {
    /*font-family: "Avenir", Helvetica, Arial, sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  #nav {
    padding: 30px;
    a {
      /*font-weight: bold;*/
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
