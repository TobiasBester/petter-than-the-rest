import {
  extractPetImageFromResponse,
  getPetImageCall,
  getPetImageCalls,
  getPetPost,
  getPetPosts,
} from '~/services/PetService'

export const state = () => ({
  posts: [],
  current: {}
})

export const mutations = {
  SET_POSTS (state, posts) {
    state.posts = posts
  },
  SET_CURRENT (state, post) {
    state.current = post
  }
}

export const actions = {
  async fetchPosts ({ commit }) {
    const { data } = await getPetPosts()
    const posts = data

    const imageCalls = getPetImageCalls(posts.length)
    const imageResults = await Promise.all(imageCalls)
    imageResults.forEach((imgResult, idx) => {
      posts[idx].postImg = extractPetImageFromResponse(imgResult)
    })

    commit('SET_POSTS', posts)
  },
  async fetchPost ({ commit }, postId) {
    const { data } = await getPetPost(postId)
    const post = data

    const imgResult = await getPetImageCall()
    post.postImg = extractPetImageFromResponse(imgResult)

    commit('SET_CURRENT', post)
  }
}
