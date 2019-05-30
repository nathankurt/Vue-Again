<template>
  <v-timeline align-top>
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card
          :color="item.color"
          dark
        >
          <v-card-title class="title">{{item.title}}</v-card-title>
          <v-card-text class="dark">
            <p>{{item.text}}</p>
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
        title: 'May 2019',
        color: 'indigo',
        icon: 'fas fa-graduation-cap',
        text: 'Graduated from Michigan State Univeristy  '
      },
      {
        title: '2019',
        color: 'purple darken-1',
        icon: 'fas fa-bed',
        text: '123 hello'
      },
      {
        title: '2017',
        color: 'green lighten-1',
        icon: 'fas fa-code',
        text: '123 joe',
      },
      {
        title: '2015',
        color: 'red lighten-2',
        icon: 'fab fa-github',
        text: '123 fargt'
      }
    ]
  })
}
</script>
