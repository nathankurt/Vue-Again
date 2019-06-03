<template>
  <v-timeline align-top>
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card :color="item.color" dark>
        <v-card-title class="title">{{ item.title }}</v-card-title>
        <v-card-text class="dark">
          <p>{{ item.text }}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "May 2019",
        color: "#18453b",
        icon: "fas fa-graduation-cap",
        text:
          "Graduated* from Michigan State Univeristy with Bachelor's degree in Computer Science."
      },
      {
        title: "April 2019",
        color: "indigo",
        icon: "fas fa-briefcase",
        text:
          "Accepted a full-time position with Dynatrace to start in September."
      },
      {
        title: "January 2019",
        color: "purple darken-1",
        icon: "fas fa-running",
        text:
          "Ran my second SpartaHack as it's Director. It went great except that I had to get my apendix taken out on the last day."
      },
      {
        title: "May 2018",
        color: "grey darken 2",
        icon: "fas fa-bullseye",
        text:
          "Started my second internship at Quicken Loans. This time as a Mac Systems Engineer!"
      },
      {
        title: "December 2017",
        color: "red darken-4",
        icon: "fab fa-github",
        text: "Became a GitHub Campus Expert"
      },
      {
        title: "May 2017",
        color: "green lighten-1",
        icon: "fas fa-code",
        text:
          "Started my first Internship at Quicken Loans as a Technology Leadership Intern"
      },
      {
        title: "February 2016",
        color: "red lighten-2",
        icon: "fas fa-laptop-code",
        text:
          "Went to my first hackathon, SpartaHack and was blown away at how cool the community was and "
      },
      {
        title: "January 2010",
        color: "",
        icon: "fas fa-dumpster-fire",
        text:
          "Coded my first game in Ruby on Rails. It wasn't very good and was just a guy avoiding falling spikes, but a start nonetheless."
      }
    ]
  })
};
</script>
