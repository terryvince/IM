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
  delFriend (state, id) {
    vue.$delete(state.sessions, id)
    state.contactors = state.contactors.filter(v => id !== v.frid)
  },
  delGroup (state, id) {
    vue.$delete(state.sessions, id)
    state.groupContactors = state.groupContactors.filter(v => id !== v.frid)
  },
  setNotifyList (state, {key, data}) {
    state.notifyList[key] = data
  },
  setContactors (state, arr) {
    state.contactors = arr
  },
  setGroupContactors (state, arr) {
    state.groupContactors = arr
  },
  setGroupMemberList (state, arr) {
    state.groupMemberList = arr
  },
  setProfile (state, ob) {
    state.profile = ob
  },
  changeProfile (state, ob) {
    Object.assign(state.profile, ob)
  },
  setTempPushMessage (state, ob) {
    state.tempPushMessage = ob
  },
  setPushMessage (state, ob) {
    Object.assign(state.pushMessage, ob)
  },
  setCurrentForm (state, ob) {
    let key = ob.frid
    if (!state.sessions[key]) {
      vue.$set(ob, 'messages', [])
      vue.$set(state.sessions, key, ob)
    } else {
      Object.assign(state.sessions[key], ob)
    }
    state.currentForm = state.sessions[key]
  },
  clearCurrentForm (state) {
    state.currentForm = {}
  },
  addFriendMeassage (state, msg) {
    let other
    let toid = parseInt(msg.toid) // 取出整数toid
    msg.toidInt = toid
    other = toid
    if (!state.sessions[other]) { // 判断接收的消息存不存在会话
      let form = {frid: other, messages: [], userType: 0}
      // 为新建的窗口命名
      state.groupContactors.forEach(v => {
        if (v.frid === other) {
          form.userType = 3
          Object.assign(form, v)
        }
      })
      state.contactors.forEach(v => {
        if (v.frid === other) {
          form.userType = 1
          Object.assign(form, v)
        }
      })
      vue.$set(state.sessions, other, form)
    }
    state.sessions[other].messages.push(msg)
    state.messages.push(msg)
    vue.$set(state.sessions[other], 'lastedMsg', msg)
  },
  addUnSendedMsg (state, msg) {
    vue.$set(state.unSendedMsg, msg.localid, msg)
  },
  setSendedMsg (state, msg) {
    vue.$delete(state.unSendedMsg, msg.localid)
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
