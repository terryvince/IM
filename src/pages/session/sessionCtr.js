import $ from 'jquery'
import {api, msgType} from '@/api'
import {mapGetters, mapMutations} from 'vuex'
import chatHeader from '../../components/ChatHeader'
import profileCard from '../../components/ProfileCard'

export default {
  name: 'session',
  components: {
    chatHeader,
    profileCard
  },
  props: ['friendInfo'],
  data () {
    return {
      temp_msg: '',
      files: [],
      userMsg: [
        {id: 1, msgType: 'text', msg: '你好啊！', msgId: 1},
        {id: 2, msgType: 'text', msg: '你好！', msgId: 2},
        {id: 1, msgType: 'text', msg: '吃饭没？', msgId: 3},
        {id: 2, msgType: 'text', msg: '没啊！', msgId: 4},
        {id: 1, msgType: 'text', msg: '我们去玩吧！', msgId: 5},
        {id: 2, msgType: 'text', msg: '好啊！', msgId: 6}
      ],
      cardParms: {},
      isShowMenu: false,
      isShowSearch: false,
      isShowGroup: false,
      isShowProfileCard: false
    }
  },
  computed: {
    ...mapGetters(
      [
        'sessions',
        'currentForm',
        'profile',
        'userid'
      ]
    )
  },
  methods: {
    ...mapMutations(['setPushMessage', 'addFriendMeassage', 'setCurrentForm']),
    test (v) {
      alert(v)
    },
    setProfileCard (e, profileCard) {
      this.cardParms = {event: e, data: profileCard}
      this.isShowProfileCard = true
    },
    displayGroup () {
      this.isShowGroup = !this.isShowGroup
    },
    displayMenu () {
      this.isShowMenu = !this.isShowMenu
    },
    displaySearch () {
      this.isShowSearch = !this.isShowSearch
    },
    changeSearch () {
      this.isShowSearch = true
    },
    sendMsg () {
      let me = this
      if (me.currentForm.userType === 1) {
        api.sendToFriendMessage({friendId: me.currentForm.frid, msgtype: msgType.TEXT, content: this.temp_msg})
      } else {
        api.sendToGroupMessage({groupId: me.currentForm.frid, msgtype: msgType.TEXT, content: this.temp_msg})
      }
      this.temp_msg = ''
    },
    sendImage () {
      let id = this.userMsg[this.userMsg.length - 1].msgId + 1
      let item = {id: 2, msgType: 'image', msg: '', msgId: id}
      let me = this
      let file = this.$refs.files.files[0]
      api.sendMsg(file)
      if (window.FileReader) {
        let fr = new FileReader()
        fr.readAsDataURL(file)
        fr.onload = function () {
          item.msg = fr.result
          me.userMsg.push(item)
          console.log(item.msg)
        }
      }
    },
    newLine () {
      this.temp_msg += '\n'
    },
    selectedItem (item) {
      // let me = this
      // Object.keys(this.sessions).forEach(k => {
      //   this.$set(me.sessions[k], 'isSelected', false)
      // })
      // item.isSelected = true
      this.setCurrentForm(item)
    },
    msgToDown () {
      let msgList = this.$refs.msg_list
      if (msgList) {
        $(msgList).scrollTop(msgList.scrollHeight - msgList.clientHeight)
      }
    },
    hideAll (e) {
      this.$refs.chatHeader.hideAll()
      this.isShowProfileCard = false
    }
  },
  updated () {
    this.msgToDown()
  },
  activated () {
    this.msgToDown()
  }
}
