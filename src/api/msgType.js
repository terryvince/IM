let msgType = {
  NONE: 0, // 空
  TEXT: 100, // 好友文本
  AUDIO: 101, // 好友音频
  IMAGE: 102, // 好友图片
  VIDEO: 103, // 好友视频
  FRIEND_ADD: 104, // 好友添加成功
  FRIEND_INFO_CHANGE: 105, // 好友资料变更

  GROUP_TEXT: 200, // 群文本
  GROUP_AUDIO: 201, // 群音频
  GROUP_IMAGE: 202, // 群图片
  GROUP_VIDEO: 203, // 群视频
  GROUP_MEMBER_ADD: 204, // 加入群成功，加群也要发这个

  isCommonType (type) {
    let comType = [100, 101, 102, 103, 200, 201, 202, 203]
    return comType.find(v => v === type)
  }
}

export default msgType
