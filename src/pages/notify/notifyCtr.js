import chatHeader from '../../components/ChatHeader'
import {mapGetters, mapMutations} from 'vuex'
import {api, msgType} from '../../api'

export default {
  name: 'Notify',
  components: {
    chatHeader
  },
  data () {
    return {
      isShowNotify: true
    }
  },
  computed: {
    ...mapGetters(['notifyList'])
  },
  methods: {
    ...mapMutations(['setNotifyList']),
    displayNotify () {
      this.isShowNotify = !this.isShowNotify
    },
    handleApply (type, item) {
      let me = this
      let code = {1: msgType.FRIEND_AGREE, 2: msgType.FRIEND_REFUSE}[type]
      api.handleApply({msgid: item.msgid, fromid: item.fromid, type: code}).then(data => {
        if (data && data.code === 0) {
          me.setNotifyList({
            key: 'applyFriend',
            data: me.notifyList.applyFriend.filter(v => v.msgid !== item.msgid)
          })
        }
      })
    }
  }
}
