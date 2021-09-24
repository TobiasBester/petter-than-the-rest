<template>
  <div>
    <back-button />
    <h2>Post of {{ post.pet.name }} from {{ post.user.name }}</h2>
    <hr>
    <b-row align-v="center">
      <b-col md="6">
        <strong>{{ post.description }}</strong>
      </b-col>
      <b-col>
        {{ parsedPostDate }}
      </b-col>
      <b-col>
        <pet-button :num-pets="post.numPets" />
      </b-col>
    </b-row>
    <b-img-lazy
      :src="post.postImg"
      :blank-src="null"
      style="max-height: 800px; max-width: 400px;"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetButton from '~/components/posts/PetButton'

export default {
  name: 'SelectedPost',
  components: { PetButton },
  async fetch ({ error, params, store }) {
    try {
      await store.dispatch('posts/fetchPost', params.id)
    } catch (e) {
      error({ statusCode: 503, message: 'Unable to fetch post.' })
    }
  },
  head () {
    return {
      title: `Post #${this.post.id}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `View everything related to Pet Post #${this.post.id}`,
        },
      ],
    }
  },
  computed: {
    parsedPostDate () {
      const eventDate = new Date(this.post.datePosted)
      return eventDate.toLocaleString()
    },
    ...mapState({
      post: state => state.posts.current
    })
  }
}
</script>

<style scoped>

</style>
