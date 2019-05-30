<template>
  <v-treeview class="trees" v-model="tree" :items='msg' active></v-treeview>
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

<style>
.v-treeview-node__content {
    flex-grow: 0;
}
</style>
