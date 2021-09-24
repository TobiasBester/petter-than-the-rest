<template>
  <b-btn size="lg" variant="link" style="float: left" @click="goBack">
    <b-icon-arrow-left aria-label="back" />
  </b-btn>
</template>

<script>
import { BIconArrowLeft } from 'bootstrap-vue'

export default {
  name: 'BackButton',
  components: { BIconArrowLeft },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>
