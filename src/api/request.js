import {jc, bus, guid} from '@/utils'
import store from '@/store'
import msgType from './msgType'

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
    bus.$emit('login')
    store.commit('loginChange', true)
    store.commit('setUserId', parseInt(data.data.userid))
    localStorage.setItem('userid', parseInt(data.data.userid))
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
async function addFriend ({number, data = null}) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/addFriend',
      {
        number: number,
        data: data
      }, function (res) {
        if (!res.isSuccessed()) {
          reject(res.getData())
        } else {
          resolve(res.getData())
        }
      })
  }).catch(err => {
    console.log('添加好友请求发生错误或超时：', err)
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

/* 查询好友信息（通过账号查找）
 *
 *  number 好友账号
 */
async function viewFriendInfo ({number}) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/findFriend',
      {
        number: number
      }, function (res) {
        if (!res.isSuccessed()) {
          reject(res.getData())
        } else {
          resolve(res.getData())
        }
      })
  }).then(function (data) {
    result = data
  }).catch(err => {
    console.log('查询好友信息发生错误或超时：' + err)
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

/* 邀请好友进群
 *
 *  fromid 群id
 *  member 好友id
 */
async function invitationGroupMember ({groupId, memberIds}) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/invitationGroupMember',
      {
        fromid: groupId,
        type: msgType.GROUP_MEMBER_ADD,
        members: memberIds
      }, function (res) {
        if (!res.isSuccessed()) {
          reject(res.getData())
        } else {
          resolve(res.getData())
        }
      })
  }).then(function (data) {
    result = data
  }).catch(err => {
    console.log('邀请好友进群请求发生错误或超时：', err)
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
  jc.request('/friendMessage', msg)
  // onMessageGroup
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

/* 拉取（好友群等）申请列表
 *
 */
async function getApplyList () {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/getApplyMessage', null, function (res) {
      if (!res.isSuccessed()) {
        reject(res.getData())
      } else {
        resolve(res.getData())
      }
    })
  }).then(function (data) {
    result = data
  }).catch(err => {
    console.log('拉取申请列表发生错误', err)
  })
  return result
}

/* 处理申请（同意或拒绝）
 *
 */
async function handleApply ({type, msgid, fromid}) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/refusingOrAgree',
      {
        type: type,
        msgid: msgid,
        fromid: fromid
      },
      function (res) {
        if (!res.isSuccessed()) {
          reject(res.getData())
        } else {
          resolve(res.getData())
        }
      })
  }).then(function (data) {
    result = data
  }).catch(err => {
    console.log('处理申请请求发生错误', err)
  })
  return result
}

/* 删除好友
 * fromid 好友id
 */
async function removeFriend ({fromid}) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/removeFriend',
      {
        fromid: fromid
      },
      function (res) {
        if (!res.isSuccessed()) {
          reject(res.getData())
        } else {
          resolve(res.getData())
        }
      })
  }).then(function (data) {
    result = data
  }).catch(err => {
    console.log('删除好友请求发生错误', err)
  })
  return result
}

/* 退出群
 * fromid 群id
 */
async function leaveGroup ({groupId}) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/leaveGroup',
      {
        fromid: groupId
      },
      function (res) {
        if (!res.isSuccessed()) {
          reject(res.getData())
        } else {
          resolve(res.getData())
        }
      })
  }).then(function (data) {
    result = data
  }).catch(err => {
    console.log('退出群请求发生错误', err)
  })
  return result
}

/* 修改个人资料
 * usernum 用户号（即微信号）， nickname 昵称， sex 性别
 */
async function modifyUserInfo ({usernum, nickname, sex}) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/modifyUserInfo',
      {
        usernum: usernum,
        nickname: nickname,
        sex: sex
      },
      function (res) {
        if (!res.isSuccessed()) {
          reject(res.getData())
        } else {
          resolve(res.getData())
        }
      })
  }).then(function (data) {
    result = data
  }).catch(err => {
    console.log('修改个人资料请求发生错误', err)
  })
  return result
}

/* 修改群资料
 * groupId 用户号（即微信号）， nickname 昵称
 */
async function modifyGroupInfo ({groupId, nickname}) {
  let result
  await new Promise(function (resolve, reject) {
    jc.request('/modifyGroupInfo',
      {
        fromid: groupId,
        nickname: nickname
      },
      function (res) {
        if (!res.isSuccessed()) {
          reject(res.getData())
        } else {
          resolve(res.getData())
        }
      })
  }).then(function (data) {
    result = data
  }).catch(err => {
    console.log('修改群资料请求发生错误', err)
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
  addFriend,
  invitationGroupMember,
  viewFriendInfo,
  getApplyList,
  handleApply,
  removeFriend,
  leaveGroup,
  modifyUserInfo,
  modifyGroupInfo
}
