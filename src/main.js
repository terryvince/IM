// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import '@/sass/style.scss'
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/utils'
import store from './store'
import {
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Form,
  FormItem,
  Alert,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Loading,
  MessageBox,
  Message,
  Notification,
  Popover,
  Tooltip
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Dialog)
Vue.use(Autocomplete)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Alert)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Upload)
Vue.use(Progress)
Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

/* eslint-disable no-new */
const vue = new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

// function f1 () {
//   return new Promise(resolve => {
//     setTimeout(() => { resolve('one') }, 60 * 1000)
//   })
// }
//
// function f2 () {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('two')
//       resolve('two')
//     }, 5000)
//   })
// }
//
// function f3 () {
//   console.log('123')
//   throw new Error('12123')
//   // return new Promise((resolve) => {
//   //   setTimeout(() => {
//   //     console.log('three')
//   //     resolve('three')
//   //   }, 1000)
//   // })
// }
//
// f1().then(data => {
//   console.log(data)
// }).then(f2).then(f3).catch(err => {
//   console.log(err)
// })

// f1().then(data => {
//   console.log(data, '执行完毕')
// })

Vue.filter('formatDate', function (v, option) {
  console.log(v, '--------------时间')
  if (!v) return ''
  if (v.toString().length === 10) {
    v = v * 1000
  }
  let d = new Date(v)
  let second = d.getSeconds()
  let minute = d.getMinutes()
  let hours = d.getHours()
  let date = d.getDate()
  let month = d.getMonth()
  let year = d.getFullYear()
  // 月份增加前导0
  if (month.toString().length === 1) {
    month = '0' + month
  }
  // 日期增加前导0
  if (date.toString().length === 1) {
    date = '0' + date.toString()
  }
  // 小时增加前导0
  if (hours.toString().length === 1) {
    hours = '0' + hours.toString()
  }
  // 分钟增加前导0
  if (minute.toString().length === 1) {
    minute = '0' + minute.toString()
  }
  // 秒数增加前导0
  if (second.toString().length === 1) {
    second = '0' + second.toString()
  }
  switch (option) {
    case 'date' :
      v = year + '-' + month + '-' + date
      break
    case 'time' :
      v = hours + ':' + minute + ':' + second
      break
    case 'dateTime' :
      v = year + '-' + month + '-' + date + ' ' + hours + ':' + minute + ':' + second
      break
    default :
      v = year + '-' + month + '-' + date + ' ' + hours + ':' + minute + ':' + second
      break
  }
  return v
})

export default vue
