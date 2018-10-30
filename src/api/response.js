import {jc} from '@/utils'
import {comparePushMessage} from '@/api'

// 服务端请求客户端

// 接受好友消息
jc.on('pushMessage', function (req) {
  comparePushMessage(req.getData())
})
jc.on('close', function (req) {
  console.log('通知：服务端关闭了websocket通道')
})
