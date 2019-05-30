<template>
    <v-expansion-panel inset flat dark>
        <v-expansion-panel-content
        v-for="(item,i) in msg"
        :key="i"
        

      >
      <template v-slot:header>
          <div>{{item.title}}</div>
        </template>
        <v-card>
          <v-card-text v-html="item.text"></v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
</template>


<script>
export default {
  name: "Expansion",
  props: ['msg'],
  data: () => ({
    items: msg
  })
};
</script>