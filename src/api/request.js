import {jc, bus, guid} from '@/utils'
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

/* 注册
 *
 *ver 版本号 loginType 1账号 2手机 deviceid 设备码 , userostype web 1001
 */
async function register ({logintype = 1, username, password}) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/register',
      {
        ver: 0,
        logintype: logintype,
        deviceid: 'FC-AA-14-BC-7D-01',
        userostype: 1001,
        osversion: 0,
        screen: '',
        username: username,
        password: password
      }, function (res) {
        if (!res.isSuccessed()) {
          reject(res.getData())
        } else {
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

/* 登录
 *
 *ver 版本号 loginType 1账号 2手机 deviceid 设备码 , userostype web 1001
 */
async function login ({loginType = 1, username, password}) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/login',
      {
        ver: 0,
        logintype: loginType,
        deviceid: 'FC-AA-14-BC-7D-01',
        userostype: 1001,
        osversion: 0,
        screen: '',
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
    store.commit('setUserId', parseInt(data.data.userid))
    localStorage.setItem('userid', parseInt(data.data.userid))
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
    jc.request('/createGroup',
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

/* 添加好友
 *
 *number 好友账号
 */
async function addFriend ({number}) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/addFriend',
      {
        number: number
      }, function (res) {
        if (!res.isSuccessed()) {
          reject(res.getData())
        } else {
          resolve(res.getData())
        }
      })
  }).catch(err => {
    console.log('创建好友请求发生错误：', err)
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

/* 拉取所有消息(含普通消息和特殊消息)
 *
 *  lastid 消息id
 */
async function getAllMessageList () {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/getMessages',
      {
        lastid: store.state.pushMessage.lastid
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

/* 拉取群成员列表
 *
 */
async function getGroupUserList (groupid) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/getGroupUserList',
      {
        fromid: groupid
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

/* 拉取群成员信息
 *
 *  lastid 消息id
 */
async function getGroupUserInfo ({frid, groupid}) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/getGroupUserInfo',
      {
        frid: frid,
        fromid: groupid
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
function sendToFriendMessage ({friendId, content, msgtype}) {
  let msg = {
    fromid: friendId,
    data: content,
    msgtype: msgtype,
    localid: guid()
  }
  jc.request('/friendMessage', msg)
  // store.commit('addUnSendedMsg', msg)
}

/* 发送群消息
 *
 *  groupid 群id data 发送内容
 */
function sendToGroupMessage ({groupId, content, msgtype}) {
  let msg = {
    fromid: groupId,
    data: content,
    msgtype: msgtype,
    localid: guid()
  }
  jc.request('/onMessageGroup', msg)
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
    console.log('同步请求无返回值：', err)
  })
  return result
}

export {
  getFriendsList,
  login,
  register,
  sendSync,
  getFriendInfoById,
  getFriendInfoByAccount,
  sendToFriendMessage,
  getUserInfo,
  establishGroup,
  sendToGroupMessage,
  getAllMessageList,
  getGroupUserList,
  getGroupUserInfo,
  addFriend
}
