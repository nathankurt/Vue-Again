<template>
  <nav>
    <v-navigation-drawer fixed temporary v-model="sideNav">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.name" :to="link.route">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ link.text }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark flat>
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <router-link
          to="/"
          tag="span"
          class="font-weight-light"
          style="cursor: pointer"
          >Nate Kurt</router-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="link in links"
          :key="link.name"
          router
          :to="link.route"
        >
          {{ link.text }}
        </v-btn>
      </v-toolbar-items>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-3"
        icon
        :href="icon.link"
      >
        <v-icon size="24px">{{ icon.name }}</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    sideNav: false,
    links: [
      { text: "Home", name: "home", route: "/", icon: "fas fa-home" },
      {
        text: "About Me",
        name: "about",
        route: "/about",
        icon: "fas fa-clock"
      },
      {
        text: "SpartaHack",
        name: "spartahack",
        route: "/spartahack",
        icon: "fas fa-code"
      },
      {
        text: "Pro-Tips",
        name: "protips",
        route: "/protips",
        icon: "fas fa-chalkboard"
      }
      //   { text: "Vuetify Reference", name: "github", route: "/github" }
    ],
    icons: [
      { name: "fab fa-github", link: "https://github.com/nathankurt/Vue-Again" }
    ]
  })
};
</script>
