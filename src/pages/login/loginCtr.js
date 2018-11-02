import {api} from '@/api'
export default {
  name: 'Login',
  data () {
    return {
      tip: '',
      isShowAlert: false,
      loginForm: {username: '123456a', password: '123456aa'}
    }
  },
  methods: {
    displayAlert () {
      this.isShowAlert = !this.isShowAlert
    },
    login () {
      let me = this
      api.login({username: me.loginForm.username, password: me.loginForm.password}).then(function (data) {
        console.log('登录返回数据：', data)
        if (data && data.code === 0) {
          localStorage.isLogin = true
          localStorage.username = me.loginForm.username
          localStorage.password = me.loginForm.password
          me.$router.push({path: '/'})
        } else {
          console.log('账号或密码错误！')
        }
      })
    }
  },
  mounted () {
  }
}
