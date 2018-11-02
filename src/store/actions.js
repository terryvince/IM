import {api} from '../api'

export const createGroup = ({commit}, payload) => {
  // to do something
}
export const addMember = ({commit, state}, msg) => {
  if (!state.groupContactors.find(v => v.frid === msg.toid)) {
    api.pullContactList().then(data => {
      commit('addFriendMeassage', msg)
    })
  } else {
    commit('addFriendMeassage', msg)
  }
}
