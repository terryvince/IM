const WebSocketServer = require('ws').Server

let ws = new WebSocketServer({
  port: 3000
})

console.log('建立websocket服务器')

ws.on('connection', function (websocket, req) {
  websocket.on('message', function (msg) {
    console.log('来自客户端消息：' + msg)
    websocket.send('你发送的消息是 ' + msg)
  })
  websocket.on('close', function () {
    console.log('连接已关闭')
  })
  websocket.on('open', function () {
    console.log('连接已打开')
  })
  websocket.on('error', function (err) {
    console.log('错误消息：' + err)
  })
  websocket.send('success!')
  console.log('websocket连接通道建立')
})
