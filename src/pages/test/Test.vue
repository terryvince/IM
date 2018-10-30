<style scoped lang="scss">
  #test{
    width: 800px;
    height: 600px;
    background: white;
    padding: 15px;
  }
</style>
<template>
    <div id="test" class="center">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="发送JSON:">
          <el-input class="height-full" :rows="10" type="textarea" v-model="form.json"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="send()">发送</el-button>
          </el-form-item>
        <el-form-item label="返回值:">
          <el-input class="height-full" :rows="10" type="textarea" v-model="result"></el-input>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
import {jc} from '@/utils'
export default {
  name: 'test',
  data () {
    return {
      form: {json: ''},
      result: ''
    }
  },
  methods: {
    send () {
      let ob = JSON.parse(this.form.json)
      let me = this
      jc.request(ob.url, ob.data, function (res) {
        if (!res.isSuccessed()) {
          console.log('请求发生错误：', res.getData())
        } else {
          console.log(res.getData())
          me.result = JSON.stringify(res.getData())
        }
      })
    }
  }
}
</script>
