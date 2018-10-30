// import axios from 'axios'
import {jc, bus} from '@/utils'
import store from '@/store'
import * as request from './request'
import './response'

let api = {
  ...request
}

// websocket链接打开时，刷新重连并自动登录
jc.onConnect = function () {
  store.commit('connectedOpen')
  jc.request('/handShark', {type: 1001}, function (res) {
    if (!res.isSuccessed()) {
      console.log(res.getData)
    }
    if (store.state.isLogin) {
      api.login({username: store.state.username, password: store.state.password})
        .then(data => {
          if (data && data.code === 0) {
            console.log('登录成功！')
          } else {
            console.log('登录失败', data)
          }
        })
        .catch(err => {
          console.log(err, '-----登录请求超时或发生错误')
        })
    }
  })
}

bus.$on('login', function () {
  setTimeout(() => {
    pullProfile()
      .then(pullContactList)
      .then(syncData)
      .catch(err => {
        console.log(err)
      })
  }, 1000)
})

// 同步请求
let isR = false
function syncData () {
  if (isR) {
    isR = false
    return
  }
  isR = true
  api.sendSync().then(function (data) {
    isR = false
    comparePushMessage(data)
  })
}

// {"idx":5,"code":200,"data":{"lastid":4,"frlastid":1,"grlastid":1,"sylastid":1,"time":9999}}
// 比较同步请求是否一致
function comparePushMessage (data) {
  if (data && data.code !== 1 && data.lastid !== store.state.pushMessage.lastid) {
    store.commit('setTempPushMessage', data.data)
    comparePushMessageFrlastid()
    comparePushMessageSylastid()
    console.log('进入比较分支')
  } else {
    syncData()
    console.log('lastId无变化，继续发送同步请求')
  }
  console.log(data, '---心跳返回值')
}

// 比较好友id是否一致 调用了自身，还调用了compareId
function comparePushMessageFrlastid () {
  if (store.state.pushMessage.lastid !== store.state.tempPushMessage.lastid) {
    // todo 拉取操作
    api.getFriendsMessageList().then(function (data) {
      console.log(data, '------好友消息列表返回值')
      if (data.code !== 1) {
        let tempArr = data.data.sort((a, b) => {
          return a.messageid - b.messageid
        })
        data.data.forEach(v => {
          v.msgType = 'text'
          store.commit('addFriendMeassage', v)
        })
        let lastId = tempArr[tempArr.length - 1].messageid
        store.commit('setPushMessage', {frlastid: lastId})
        comparePushMessageFrlastid()
      }
    })
  }
  compareId()
}

// 比较所有id是否一致 调用了同步请求syncData
function compareId () {
  let tem = store.state.tempPushMessage
  let push = store.state.pushMessage
  if (push.frlastid >= tem.frlastid) {
    if (push.sylastid >= tem.sylastid) {
      store.commit('setPushMessage', {lastid: tem.lastid})
      syncData()
    }
  }
}

// 比较系统消息id是否一致
function comparePushMessageSylastid () {
  if (store.state.pushMessage.sylastid !== store.state.tempPushMessage.sylastid) {
    // todo 拉取操作
  }
}

/* ***************************         登录时拉取信息           *********************************** */
// 拉取联系人列表 包含好友和群的联系人列表
async function pullContactList () {
  /* eslint-disable no-unused-vars */
  let tempArr = []
  let contactorList = []
  let complete
  await new Promise(function (resolve) {
    api.getFriendsList().then(function (data) {
      if (data.code === 0) {
        tempArr = data.data
        tempArr.forEach(v => {
          api.getFriendInfoById(v).then(function (data) {
            data.data.frid = v
            contactorList.push(data.data)
            if (tempArr.length === contactorList.length) {
              store.commit('setContactors', contactorList.filter(v => v.userType === 1))
              store.commit('setGroupContactors', contactorList.filter(v => v.userType === 3))
              resolve(contactorList)
            }
          }).catch(err => {
            console.log('拉取信息请求超时或发生错误：', err)
          })
        })
      }
    })
  }).then(function (data) {
    complete = data
  })
  return complete
}

// 拉取个人资料
async function pullProfile () {
  let complete
  await api.getUserInfo().then(function (data) {
    store.commit('setProfile', data.data)
    complete = data.data
  })
  return complete
}

export {api, comparePushMessage, pullContactList}