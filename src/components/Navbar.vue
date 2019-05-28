<template>
  <nav>
    <v-toolbar app dark flat>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Nate Kurt</span>
      </v-toolbar-title>
      <v-btn flat v-for="link in links" :key="link.name" router :to="link.route">
        {{ link.text }}
      </v-btn>
      <v-spacer></v-spacer>
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
    links: [
      { text: "Home", name: "home", route: "/" },
      { text: "About Me", name: "about", route: "/about" },
      { text: "SpartaHack", name: "spartahack", route: "/spartahack" },
      { text: "Pro-Tips", name: "protips", route: "/protips" },
      //{ text: "Nate's GitHub", name: "github", route: "/github" }
    ],
    icons: [
      { name: "fab fa-github", link: "https://github.com/nathankurt/Vue-Again" }
    ]
  })
};
</script>
