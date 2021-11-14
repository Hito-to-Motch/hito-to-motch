export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  delUser(state) {
    state.user = null
  }
}

