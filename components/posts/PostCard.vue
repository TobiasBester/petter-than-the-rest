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
              Posted by {{ post.user.name }}
            </h6>
            <p>
              {{ post.description }}
            </p>
          </b-card-text>
        </b-card-body>
        <b-card-footer>
          <b-row align-v="center" class="justify-content-between">
            <b-col>
              {{ parsedPostDate }}
            </b-col>
            <b-col>
              <posts-pet-button :num-pets="post.numPets" />
            </b-col>
          </b-row>
        </b-card-footer>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import PetButton from '~/components/posts/PetButton'

export default {
  name: 'PostCard',
  components: {
    PostsPetButton: PetButton
  },
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
