export const state = () => ({
  profile: {},
})

export const mutations = {
  SET_PROFILE (state, profile) {
    state.profile = profile
  }
}

export const actions = {
  fetchProfile ({ commit }) {
    const profile = {
      userName: 'Micycle',
      dateJoined: new Date().toLocaleDateString(),
      numPosts: 5,
      numFollowers: 500,
    }

    commit('SET_PROFILE', profile)

    return profile
  }
}
