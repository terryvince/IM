import {api} from '@/api'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {username: '123456', password: '123456'}
    }
  },
  methods: {
    login () {
      let me = this
      api.login({username: me.loginForm.username, password: me.loginForm.password}).then(function (data) {
        console.log('登录返回数据：', data)
        if (data && data.code === 0) {
          me.$router.push({path: '/'})
          localStorage.isLogin = true
          localStorage.username = me.loginForm.username
          localStorage.password = me.loginForm.password
        } else {
          // console.log('账号或密码错误！')
        }
      })
    }
  },
  mounted () {
  }
}
