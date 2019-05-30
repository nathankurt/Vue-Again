<template>
  <div>
    
    <v-img class="justify center"
    :src="require('@/assets/animated-logo.svg')"
    height="400"
    contain
    >
    </v-img>
    <h1>Michigan State's Official Student Run Hackathon</h1>
    <TreeList v-bind:msg='msg'/>
  </div>
</template>

<script>
import TreeList from "@/components/TreeList.vue";
    export default {
        components: {TreeList},
        name: "SpartaHack",
        data: () => ({
      msg: [
      {
        id: 1,
        name: "What is SpartaHack?",
        children: [
          { id: 2, name: "SpartaHack is a student run coding marathon that encourages you " },
          { id: 3, name: "Chrome : app" },
          { id: 4, name: "Webstorm : app" }
        ]
      },
      {
        id: 5,
        name: "Documents :",
        children: [
          {
            id: 6,
            name: "vuetify :",
            children: [
              {
                id: 7,
                name: "src :",
                children: [
                  { id: 8, name: "index : ts" },
                  { id: 9, name: "bootstrap : ts" }
                ]
              }
            ]
          },
          {
            id: 10,
            name: "material2 :",
            children: [
              {
                id: 11,
                name: "src :",
                children: [
                  { id: 12, name: "v-btn : ts" },
                  { id: 13, name: "v-card : ts" },
                  { id: 14, name: "v-window : ts" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: "Downloads :",
        children: [
          { id: 16, name: "October : pdf" },
          { id: 17, name: "November : pdf" },
          { id: 18, name: "Tutorial : html" }
        ]
      },
      {
        id: 19,
        name: "Videos :",
        children: [
          {
            id: 20,
            name: "Tutorials :",
            children: [
              { id: 21, name: "Basic layouts : mp4" },
              { id: 22, name: "Advanced techniques : mp4" },
              { id: 23, name: "All about app : dir" }
            ]
          },
          { id: 24, name: "Intro : mov" },
          { id: 25, name: "Conference introduction : avi" }
        ]
      }
    ]
  })

    }
</script>

<style scoped>

</style>