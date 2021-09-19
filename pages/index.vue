<template>
  <div>
    <h1>Home</h1>

    <b-container fluid>
      <b-row>
        <b-col v-for="(post, idx) in posts" :key="idx" md="6">
          <posts-post-card :post="post" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import PostCard from '~/components/posts/PostCard'
import { extractPetImageFromResponse, getPetImageCalls } from '~/utils/http'

export default {
  components: {
    PostsPostCard: PostCard
  },
  async asyncData ({ $axios, error }) {
    try {
      const { data } = await $axios.get('http://localhost:3001/posts')
      const posts = data

      const imageCalls = getPetImageCalls($axios, posts.length)
      const imageResults = await Promise.all(imageCalls)
      imageResults.forEach((imgResult, idx) => {
        posts[idx].postImg = extractPetImageFromResponse(imgResult)
      })

      return { posts }
    } catch (e) {
      error({ statusCode: 503, message: 'Unable to load posts at this time. Please try again.' })
    }
  },
  head: () => ({
    title: 'PTTR Home',
  }),
}
</script>
