<template>
  <v-card class="mb-4" elevation="5">
    <v-card-title primary-title>
      <div name="title">Component Test</div>
    </v-card-title>
    <v-card-text>
      <div name="context">Data in 1: {{ getValue1 }}</div>
      <div name="context">Data in 2: {{ getValue2 }}</div>
      <div name="context">Data in 3: {{ getValue3 }}</div>
      <div name="context">Data in 4: {{ getValue4 }}</div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" dark @click="onCount(1)"> Count Val1 </v-btn>
      <v-btn color="primary" dark @click="onCount(2)"> Count Val2 </v-btn>
      <v-btn color="primary" dark @click="onCount(3)"> Count Val3 </v-btn>
      <v-btn color="primary" dark @click="onCount(4)"> Count Val4 </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getValue1', 'getValue2', 'getValue3', 'getValue4']),
  },
  methods: {
    onCount(index) {
      let count = this.$nuxt.$store.getters[`getValue${index}`] + 1
      this.$store.commit(`setValue${index}`, count)
    },
  },
}
</script>

<style></style>
