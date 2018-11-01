// import {api} from '../../api'

export default {
  name: 'register',
  data () {
    return {
      form: {logintype: 1, username: '', password: '', comfirmPwd: ''},
      tip: ''
    }
  },
  methods: {
    sendRegister () {
      if (this.from.password !== this.form.comfirmPwd) {
        this.tip = '确认密码不一致, 请重新填写密码！'
        return
      }
      if (!/^(?![0-9]+$)[0-9,A-z]{4,16}$/.test(this.form.username)) {
        this.tip = '请输入4-16位以字母开头的用户名！'
      }
      if (!/^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/.test(this.form.password)) {
        this.tip = '请输入6-20位字母，数字和特殊字符两个以上组合成的密码！'
      }
      console.log(this.tip)
      return 0
      // api.register(this.form).then(data => {
      //   if (data && data.code === 0) {
      //     // success
      //     this.$router.push('/login')
      //   } else {
      //     // fail
      //   }
      // })
    }
  },
  mounted () {
  }
}
