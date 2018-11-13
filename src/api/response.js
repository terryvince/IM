import {jc} from '@/utils'
import {comparePushMessage, closeType} from '@/api'
import store from '@/store'
import router from '@/router'

// 服务端请求客户端

// 接受好友消息
jc.on('pushMessage', function (req) {
  comparePushMessage(req.getData())
})

jc.on('close', function (req) {
  store.commit('logout')
  router.push('/login')
  let data = req.getData()
  alert(closeType[data.type])
  console.log('通知：服务端关闭了websocket通道')
})
