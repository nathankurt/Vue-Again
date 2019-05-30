<template>
  <div>
    
    <v-img class="justify center"
    :src="require('@/assets/animated-logo.svg')"
    height="400"
    contain
    >
    </v-img>
<<<<<<< HEAD
    <h1>Michigan State's Official Student Run Hackathon</h1>
    <Expansion v-bind:msg='msg1'/>
=======
    <h1>Michigan State's Student Run Hackathon</h1>
    <TreeList v-bind:msg='msg'/>
>>>>>>> master
  </div>
</template>

<script>
import Expansion from "@/components/Expansion.vue";
import TreeList from "@/components/TreeList.vue";
    export default {
        components: {TreeList, Expansion},
        name: "SpartaHack",
        data: () => ({

      msg1: [
          {
              title: "What is SpartaHack?",
              text: "Spartahack is a student-run coding marathon that encourages you ",
          },
          {
              title: "Who can join?",
              text: "Anyone who is currently a student or has graduated within 12 months of SpartaHack! Graduate students, undergrads, and high-school students from any field of study are welcome."
          },
          {
              title: "Do I need to know how to code?",
              text: "Definitely not! No programming experience is necessary; we have workshops and mentors at the event to help you learn about a variety of topics."
          },
          {
              title: "When is it?",
              text: "SpartaHack normally takes place in mid to late January each year! Keep an eye out on it if you go there"
          }
      ]
      
  })

    }
</script>

<style scoped>

</style>