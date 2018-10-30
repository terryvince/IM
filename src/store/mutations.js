import vue from '@/main'
function alertTips (state) {
  if (!state.isAlertTips) {
    alert('你的浏览器不支持本地存储. 这可能是由于浏览器设置 “隐私模式” 引起的！')
    state.isAlertTips = true
  }
}

export default {
  acceptMsg (state, message) {
    state.messages.push(message)
  },
  connectedOpen (state) {
    state.connected = true
  },
  loginChange (state, isLogin) {
    state.isLogin = isLogin
  },
  setContactors (state, arr) {
    state.contactors = arr
  },
  setGroupContactors (state, arr) {
    state.groupContactors = arr
  },
  setProfile (state, ob) {
    state.profile = ob
  },
  setTempPushMessage (state, ob) {
    state.tempPushMessage = ob
  },
  setPushMessage (state, ob) {
    Object.assign(state.pushMessage, ob)
  },
  setCurrentForm (state, ob) {
    if (!state.sessions[ob.frid]) {
      ob.messages = []
      state.currentForm = ob
      let key = ob.frid
      vue.$set(state.sessions, key, ob)
    } else {
      Object.assign(state.sessions[ob.frid], ob)
      state.currentForm = state.sessions[ob.frid]
    }
  },
  addFriendMeassage (state, msg) {
    if (!state.sessions[msg.fromid]) {
      let form = {frid: msg.fromid, messages: []}
      vue.$set(state.sessions, msg.fromid, form)
    }
    state.sessions[msg.fromid].messages.push(msg)
    state.messages.push(msg)
  },
  logout (state) {
    state.username = ''
    state.currentFrom = {}
    state.sessions = {}
    state.messages = []
    state.unreadMsgCount = 0
    state.unreadReqCount = 0
    state.contactors = []
    state.groupContactors = []
    state.connected = false
    state.lostConnect = false
    state.unSendMsg = []
    state.tempPushMessage = {lastid: 0, frlastid: 0, sylastid: 0}
    state.pushMessage = {lastid: 0, frlastid: 0, sylastid: 0}
    state.profile = {}
    state.isLogin = false
    try {
      localStorage.removeItem('username')
      localStorage.removeItem('password')
      localStorage.removeItem('isLogin')
    } catch (e) {
      alertTips(state)
    }
  }
}
