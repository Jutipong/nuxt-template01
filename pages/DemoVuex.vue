<template>
  <div>
    <DisplayComponent @oncount="onCount(1)">
      <template v-slot:title>Component 1</template>
      <template v-slot:context> Data in Val 1: {{ getValue1 }}</template>
      <template v-slot:btnCount> Count val 1 </template>
    </DisplayComponent>

    <DisplayComponent @oncount="onCount(2)">
      <template v-slot:title>Component 2</template>
      <template v-slot:context> Data in Val 2: {{ getValue2 }}</template>
      <template v-slot:btnCount> Count val 2 </template>
    </DisplayComponent>

    <DisplayComponent @oncount="onCount(3)">
      <template v-slot:title>Component 3</template>
      <template v-slot:context> Data in Val 3: {{ getValue3 }}</template>
      <template v-slot:btnCount> Count val 3 </template>
    </DisplayComponent>

    <DisplayComponent @oncount="onCount(4)">
      <template v-slot:title>Component 4</template>
      <template v-slot:context> Data in Val 4: {{ getValue4 }}</template>
      <template v-slot:btnCount> Count val 4 </template>
    </DisplayComponent>

    <TestComponent></TestComponent>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DisplayComponent from '@/components/DemoVuex/displayComponent'
import TestComponent from '@/components/DemoVuex/testComponent'

export default {
  components: {
    DisplayComponent,
    TestComponent,
  },
  data() {
    return {}
  },
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
