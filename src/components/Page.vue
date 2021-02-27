<template>
  <v-row align-content="center" align="center" class="h-center pt-8 pb-16" style="margin-top:64px;">
    <v-col cols="12">
      <slot name="content"></slot>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Page"
}
</script>

<style scoped>

</style>