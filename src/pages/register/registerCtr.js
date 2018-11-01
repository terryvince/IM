import {api} from '../../api'

export default {
  name: 'register',
  data () {
    return {
      form: {logintype: 1, username: '', password: '', comfirmPwd: ''},
      tip: '',
      isShowAlert: false,
      registerType: 'username'
    }
  },
  methods: {
    displayAlert () {
      this.isShowAlert = !this.isShowAlert
    },
    changeRegisterType () {
      if (this.registerType === 'username') {
        this.registerType = 'phone'
      } else if (this.registerType === 'phone') {
        this.registerType = 'username'
      }
    },
    sendRegister () {
      let validate = {username: /^(?![0-9]+$)[0-9,A-z]{4,16}$/, phone: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/}
      if (!validate[this.registerType].test(this.form.username)) {
        if (this.registerType === 'username') {
          this.tip = '用户名错误：请输入4-16位以字母开头的用户名！'
        } else if (this.registerType === 'phone') {
          this.tip = '手机号错误：请输入正确的手机号！'
        }
        if (!this.isShowAlert) {
          this.displayAlert()
        }
        return
      }
      if (!/^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/.test(this.form.password)) {
        this.tip = '请输入6-20位字母，数字和特殊字符两个以上组合的密码！'
        if (!this.isShowAlert) {
          this.displayAlert()
        }
        return
      }
      if (this.form.password !== this.form.comfirmPwd) {
        this.tip = '确认密码不一致, 请重新填写密码！'
        if (!this.isShowAlert) {
          this.displayAlert()
        }
        return
      }
      api.register(this.form).then(data => {
        if (data && data.code === 0) {
          // success
          this.$router.push('/login')
        } else {
          console.log('注册失败:', data)
        }
      }).catch(err => {
        console.log('注册请求发生错误：', err)
      })
    }
  },
  mounted () {
  }
}
