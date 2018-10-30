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
    let other
    let toid = parseInt(msg.toid.slice(msg.toid.indexOf('_') + 1))
    msg.toidInt = toid
    if (msg.fromid === toid) {
      other = msg.fromid
    } else {
      if (msg.fromid === state.userid) {
        other = toid
      } else if (toid === state.userid) {
        other = msg.fromid
      }
    }
    if (!state.sessions[other]) {
      let form = {frid: other, messages: []}
      vue.$set(state.sessions, other, form)
    }
    state.sessions[other].messages.push(msg)
    state.messages.push(msg)
  },
  addUnSendedMsg (state, msg) {
    state.unSendedMsg[msg.localid] = msg
  },
  setSendedMsg (state, msg) {
    delete state.unSendedMsg[msg.localid]
  },
  setUserId (state, id) {
    state.userid = id
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
    state.tempPushMessage = {lastid: 0}
    state.pushMessage = {lastid: 0}
    state.profile = {}
    state.isLogin = false
    state.userid = null
    try {
      localStorage.removeItem('userid')
      localStorage.removeItem('username')
      localStorage.removeItem('password')
      localStorage.removeItem('isLogin')
    } catch (e) {
      alertTips(state)
    }
  }
}
