// import {api} from '@/api'
import {mapMutations, mapGetters} from 'vuex'
import chatHeader from '../../components/ChatHeader'

export default {
  name: 'Contactor',
  components: {
    chatHeader
  },
  data () {
    return {
      data: '',
      isShowMenu: false,
      isShowSearch: false,
      friendList: [],
      curSelItem: null
    }
  },
  computed: {
    ...mapGetters([
      'contactors',
      'groupContactors',
      'profile'
    ])
  },
  methods: {
    ...mapMutations(['setCurrentForm']),
    test (v) {
      alert(v)
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
    selectedItem (item) {
      this.curSelItem = item
    },
    goSendMsg () {
      let me = this
      this.setCurrentForm(me.curSelItem)
      this.$router.push({name: 'session', params: {friendInfo: me.curSelItem}})
    },
    emitChatHeader () {
      this.$refs.chatHeader.hideAll()
    }
  },
  mounted () {
  }
}
