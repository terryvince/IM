import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  currentForm: {},
  sessions: {},
  messages: [],
  unreadMsgCount: 0,
  unreadReqCount: 0,
  contactors: [],
  groupContactors: [],
  groupMemberList: [],
  // {"idx":5,"code":200,"data":{"lastid":4,"time":9999}}
  tempPushMessage: {lastid: 0},
  pushMessage: {lastid: 0},

  profile: {},

  connected: false,
  userid: localStorage.userid || null,
  isLogin: localStorage.isLogin || false,
  username: localStorage.username || '',
  password: localStorage.password || '',
  active: 'message',
  lostConnect: false,
  unSendedMsg: {},
  isAlertTips: false
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  actions,
  mutations
})
