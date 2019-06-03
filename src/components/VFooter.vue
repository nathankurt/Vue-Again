<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="teal" >
        <strong class="subheading">Social Media!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2"
          dark
          icon
          :href="icon.link"
        >
          <v-icon size="24px">{{ icon.name }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions dark class="dark justify-center">
        &copy;2019 — <strong>Nate Kurt</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        name: "fab fa-facebook",
        link: "https://www.facebook.com/nathan.kurt.1"
      },
      { name: "fab fa-twitter", link: "https://twitter.com/nathankurt" },
      { name: "fab fa-github", link: "https://github.com/nathankurt/" },
      { name: "fab fa-linkedin", link: "https://linkedin.com/in/nathankurt" },
      {
        name: "fab fa-instagram",
        link: "https://www.instagram.com/nathankurt/"
      }
    ]
  })
};
</script>

<style scoped></style>
