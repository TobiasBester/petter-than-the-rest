<template>
  <b-card no-body class="overflow-hidden m-2" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <nuxt-link :to="`/post/${post.id}`">
          <b-card-img-lazy
            :src="post.postImg"
            :alt="imgAltText"
            :blank-src="null"
            class="rounded-0"
          />
        </nuxt-link>
      </b-col>
      <b-col md="6">
        <b-card-body :title="post.pet.name">
          <b-card-text>
            <h6 class="text-primary">
              {{ post.user.name }}
            </h6>
            <p>
              {{ post.description }}
            </p>
          </b-card-text>
        </b-card-body>
        <b-card-footer>
          <b-row class="align-content-center justify-content-between">
            <b-col>
              {{ parsedPostDate }}
            </b-col>
            <b-col>
              <b-btn>
                Pets Received: {{ post.numPets }}
              </b-btn>
            </b-col>
          </b-row>
        </b-card-footer>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true
    },
  },
  computed: {
    parsedPostDate () {
      const eventDate = new Date(this.post.datePosted)
      return eventDate.toLocaleString()
    },
    imgAltText () {
      return `Image of ${this.post.pet.name} from ${this.post.user.name}`
    }
  }
}
</script>

<style scoped>

</style>
