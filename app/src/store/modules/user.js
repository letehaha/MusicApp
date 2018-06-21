const state = {
  user_id: '',
  user_name: ''
}

const getters = {
  getUserByName: state => state.user_name
}

const mutations = {
  SET_USER_NAME (state, name) { state.user_name = name }
}

export default {
  state,
  getters,
  mutations
}
