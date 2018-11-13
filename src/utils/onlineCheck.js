const EventListener = {
  addEvent: function (el, type, handler) {
    if (el.addEventListener) {
      el.addEventListener(type, handler, false)
    } else if (el.attachEvent) {
      el.attachEvent('on' + type, handler)
    } else {
      el['on' + type] = handler
    }
  }
}

EventListener.addEvent(window, 'online', function () {
  // alert('已连接互联网！')
})

EventListener.addEvent(window, 'offline', function () {
  // alert('请注意，您已断开互联网连接，应用将不能正常运行！')
})

export default EventListener
