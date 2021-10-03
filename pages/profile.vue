<template>
  <div>
    <h1>Profile Page 🦾</h1>
    <b-card>
      <b-card-title>👨‍🎤 {{ profile.userName }}</b-card-title>
      <b-card-body>
        Followers: {{ profile.numFollowers }}
        Posts: {{ profile.numPosts }}
      </b-card-body>
      <b-card-footer>
        Joined: {{ profile.dateJoined }}
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'profile',
  layout: 'brochure',
  async asyncData ({ store }) {
    const profile = await store.dispatch('user/fetchProfile')
    return { profile }
  },
}
</script>

<style scoped>

</style>
