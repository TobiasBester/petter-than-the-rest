<template>
  <div>
    <h2>Post of {{ post.pet.name }} from {{ post.user.name }}</h2>
    <hr>
    <b-row>
      <b-col md="6">
        <strong>{{ post.description }}</strong>
      </b-col>
      <b-col>
        {{ parsedPostDate }}
      </b-col>
      <b-col>
        <b-btn>
          Pets Received: {{ post.numPets }}
        </b-btn>
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
import { extractPetImageFromResponse, getPetImageCall } from '~/utils/http'

export default {
  name: 'SelectedPost',
  async asyncData ({ $axios, error, params }) {
    try {
      const { data } = await $axios.get(`http://localhost:3001/posts/${params.id}`)
      const post = data

      const imgResult = await getPetImageCall($axios)
      post.postImg = extractPetImageFromResponse(imgResult)

      return { post }
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
    }
  }
}
</script>

<style scoped>

</style>
