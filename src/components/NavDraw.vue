<template>
  <v-navigation-drawer temporary v-model="sideNav">
        <v-list>
            <v-list-tile 
            v-for="link in links"
            :key="link.name"
            :to="link.route">
            >
            {{link.text}}
            </v-list-tile>

        </v-list>
    </v-navigation-drawer>

</template>


<script>
export default {
  props: ["sideNav", "links"],
  data: () => ({
    sideNav: sideNav,
    links: links,
    icons: [
      { name: "fab fa-github", link: "https://github.com/nathankurt/Vue-Again" }
    ]
  })
};
</script>
