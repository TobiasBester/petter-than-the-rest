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
import { mapState } from 'vuex'
import PostCard from '~/components/posts/PostCard'

export default {
  components: {
    PostsPostCard: PostCard
  },
  async fetch ({ store, error }) {
    try {
      await store.dispatch('posts/fetchPosts')
    } catch (e) {
      error({ statusCode: 503, message: 'Unable to load posts at this time. Please try again.' })
    }
  },
  head: () => ({
    title: 'PTTR Home',
  }),
  computed: {
    ...mapState({
      posts: state => state.posts.posts,
    }),
  },
}
</script>
