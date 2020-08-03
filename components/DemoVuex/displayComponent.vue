<template>
  <v-card class="mb-4" elevation="5">
    <v-card-title primary-title>
      <slot name="title"> Title </slot>
    </v-card-title>
    <v-card-text>
      <slot name="context"> Context </slot>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" dark @click="onCount()">
        <slot name="btnCount"></slot>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
    onCount() {
      this.$emit('oncount')
    },
  },
}
</script>

<style></style>
