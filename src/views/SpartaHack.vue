<template>
  <div>
    
    <v-img class="justify center"
    :src="require('@/assets/animated-logo.svg')"
    height="400"
    contain
    >
    </v-img>
    <span><h1>Michigan State's Official Student Run Hackathon</h1></span>
    <Expansion v-bind:msg='msg1'/>
  </div>
</template>

<script>
import Expansion from "@/components/Expansion.vue";
    export default {
        components: {Expansion},
        name: "SpartaHack",
        data: () => ({

      msg1: [
          {
              title: "What is SpartaHack?",
              text: "Spartahack is a student-run 48 hour coding marathon that encourages you to build a project from scratch and learn something new! Also you can earn a buttload of prizes if you're interested in that type of thing. 😏",
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