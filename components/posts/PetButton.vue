<template>
  <b-btn
    block
    type="dark"
    variant="success"
    size="lg"
    @click="outNumPets += 1"
  >
    <span class="text-center h4">
      {{ outNumPets }}
    </span>
    <br>
    <span>Pet!</span>
  </b-btn>
</template>

<script>
export default {
  name: 'PetButton',
  props: {
    numPets: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    outNumPets: 0
  }),
  watch: {
    numPets (newVal) {
      this.outNumPets = newVal
    },
  },
}
</script>

<style scoped>

</style>
