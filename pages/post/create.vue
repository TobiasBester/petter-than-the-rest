<template>
  <div>
    <h1>Post a Pet</h1>
  </div>
</template>

<script>
export default {
  name: 'create',
  head: () => ({
    title: 'Post your Pet',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Create a post of your pet(s) to show them off to the world.'
      }
    ]
  })
}
</script>

<style scoped>

</style>
