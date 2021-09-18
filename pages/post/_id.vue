<template>
  <div>
    <h1>Pet Post #{{ postId }}</h1>
  </div>
</template>

<script>
export default {
  name: 'SelectedPost',
  head () {
    return {
      title: `Post #${this.$route.params.id}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `View everything related to Pet Post #${this.postId}`,
        },
      ],
    }
  },
  computed: {
    postId () {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>
