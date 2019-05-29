<template>
  <v-treeview v-model="tree" :items='msg' active></v-treeview>
</template>

<script>
export default {
  name: "TreeList",
  props: ['msg'],
  data: () => ({
    tree: [],
    items: msg
  })
};
</script>

<style scoped></style>
