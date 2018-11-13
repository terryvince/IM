import {api, isMyMsg} from '../api'

export const createGroup = ({commit}, payload) => {
  // to do something
}
export const addMember = ({commit, state}, msg) => {
  let toid = parseInt(msg.toid)
  if (!state.groupContactors.find(v => v.frid === toid)) {
    api.pullContactList().then(data => {
      if (isMyMsg(msg)) {
        commit('addFriendMeassage', msg)
      }
    })
  } else {
    commit('addFriendMeassage', msg)
  }
}

export const getApplyList = ({commit, state}, notifyKey) => {
  api.getApplyList().then(data => {
    if (data && data.code === 0) {
      commit('setNotifyList', {key: notifyKey, data: data.data})
    }
  })
}

export const updateContactor = ({commit, state}, msg) => {
  let toid = parseInt(msg.toid)
  if (!state.contactors.find(v => v.frid === toid)) {
    api.pullContactList().then(data => {
      if (isMyMsg(msg)) {
        let ob = data.find(v => v.frid === toid)
        msg.data = '你已和' + ob.nickname + '成为好友！'
        commit('addFriendMeassage', msg)
      }
    })
  } else {
    let ob = state.contactors.find(v => v.frid === toid)
    msg.data = '你已和' + ob.nickname + '成为好友！'
    commit('addFriendMeassage', msg)
  }
}
