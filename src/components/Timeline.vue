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
          <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
          <v-card-text class="dark">
            <p>{{item.text}}</p>
            <v-btn
              :color="item.color"
              class="mx-0"
              outline
            >
              Button
            </v-btn>
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
        color: 'red lighten-2',
        icon: 'fab fa-github',
        text: '123 fargt'
      },
      {
        color: 'purple darken-1',
        icon: 'fas fa-bed',
        text: '123 hello'
      },
      {
        color: 'green lighten-1',
        icon: 'fas fa-code',
        text: '123 joe',
      },
      {
        color: 'indigo',
        icon: 'fas fa-graduation-cap',
        text: '124 hello'
      }
    ]
  })
}
</script>
