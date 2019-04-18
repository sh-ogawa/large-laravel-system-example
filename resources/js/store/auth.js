export const state = () => ({
  urls: {}
})

export const actions = {
  addUrls ({ state, commit }, urls) {
    commit('addUrl', urls)
  }
}

export const mutations = {
  'addUrl' (state, urls) {
    state.urls = urls
  }
}
