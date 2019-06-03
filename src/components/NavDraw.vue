<template>
  <v-navigation-drawer v-model="sideNav">
        <v-list>
            <v-list-tile 
            v-for="item in links"
            :key="item.name"
            :to="item.route">
            >
            </v-list-tile>

        </v-list>
    </v-navigation-drawer>

</template>


<script>
export default {
  data: () => ({
    sideNav: false,
    links: [
      { text: "Home", name: "home", route: "/" },
      { text: "About Me", name: "about", route: "/about" },
      { text: "SpartaHack", name: "spartahack", route: "/spartahack" },
      { text: "Pro-Tips", name: "protips", route: "/protips" },
    //   { text: "Vuetify Reference", name: "github", route: "/github" }
    ],
    icons: [
      { name: "fab fa-github", link: "https://github.com/nathankurt/Vue-Again" }
    ]
  })
};
</script>
