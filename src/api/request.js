import {jc, bus} from '@/utils'
import store from '@/store'

// 拉取好友列表
async function getFriendsList () {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/getFriendsList', null, function (res) {
      if (!res.isSuccessed()) {
        reject(res.getData())
      } else {
        resolve(res.getData())
      }
    })
  }).then(function (data) {
    result = data
  })
  return result
}

// 拉取个人信息
async function getUserInfo () {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/getUserInfo', null, function (res) {
      if (!res.isSuccessed()) {
        reject(res.getData())
      } else {
        resolve(res.getData())
      }
    })
  }).then(function (data) {
    result = data
  })
  return result
}

/* 登录
 *
 *ver 版本号 loginType 1账号 2手机 deviceId 设备码 , systemType web 1001
 */
async function login ({ver = 0, deviceId = 'FC-AA-14-BC-7D-01', systemType = 1001, loginType = 1, username = '123456', password = '123456'}) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/login',
      {
        ver: ver,
        logintype: loginType,
        deviceid: deviceId,
        userostype: systemType,
        username: username,
        password: password
      }, function (res) {
        if (!res.isSuccessed()) {
          reject(res.getData())
        } else {
          store.commit('loginChange', true)
          bus.$emit('login')
          resolve(res.getData())
        }
      })
  }).then(function (data) {
    result = data
  }, function (err) {
    result = err
  })
  return result
}

/* 创建群
 *
 *groupName 群名字
 */
async function establishGroup ({ver = 0, deviceId = 'FC-AA-14-BC-7D-01', systemType = 1001, loginType = 1, groupName}) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/establishGroup',
      {
        ver: ver,
        logintype: loginType,
        deviceid: deviceId,
        userostype: systemType,
        nickname: groupName
      }, function (res) {
        if (!res.isSuccessed()) {
          reject(res.getData())
        } else {
          store.dispatch('createGroup', true)
          resolve(res.getData())
        }
      })
  }).then(function (data) {
    result = data
  }, function (err) {
    result = err
  })
  return result
}

/* 查询好友信息
 *
 *  frid 好友通信id
 */
async function getFriendInfoById (frid) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/getFriendInfoById',
      {
        frid: frid
      }, function (res) {
        if (!res.isSuccessed()) {
          reject(res.getData())
        } else {
          resolve(res.getData())
        }
      })
  }).then(function (data) {
    result = data
  })
  return result
}

async function getFriendInfoByAccount (account) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/getFriendInfoByAccount',
      {
        account: account
      }, function (res) {
        if (!res.isSuccessed()) {
          reject(res.getData())
        } else {
          resolve(res.getData())
        }
      })
  }).then(function (data) {
    result = data
  })
  return result
}

/* 拉取好友消息(聊天记录)
 *
 *  frlastid 好友消息id
 */
async function getFriendsMessageList () {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/getFriendsMessageList',
      {
        frlastid: store.state.pushMessage.frlastid
      }, function (res) {
        if (!res.isSuccessed()) {
          reject(res.getData())
        } else {
          resolve(res.getData())
        }
      })
  }).then(function (data) {
    result = data
  })
  return result
}

/* 发送消息
 *
 *  fromid 好友消息id data 发送内容
 */
function sendToFriendMessage ({friendId, content}) {
  jc.request('/friendMessage',
    {
      fromid: friendId,
      data: content
    })
}

/* 发送群消息
 *
 *  groupid 群id data 发送内容
 */
function sendToGroupMessage ({groupId, content}) {
  jc.request('/onMessageGroup',
    {
      groupid: groupId,
      data: content
    })
}

/*
 * 同步请求
 */
async function sendSync () {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/heart',
      {
        lastid: store.state.pushMessage.lastid
      }, function (res) {
        if (!res.isSuccessed()) {
          reject(res.getData())
        } else {
          resolve(res.getData())
        }
      })
  }).then(data => {
    result = data
  }, err => {
    console.log('同步请求发生错误或无返回值：', err)
  })
  return result
}

export {
  getFriendsList,
  login,
  sendSync,
  getFriendsMessageList,
  getFriendInfoById,
  getFriendInfoByAccount,
  sendToFriendMessage,
  getUserInfo,
  establishGroup,
  sendToGroupMessage
}
