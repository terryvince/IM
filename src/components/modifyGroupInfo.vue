<template>
    <div id="modifyGroupInfo">
      <!--修改群资料弹框-->
      <el-dialog title="修改群资料" :visible.sync="isShowChangeGroup">
        <el-form :model="groupForm">
          <el-form-item label="群昵称" label-width="80">
            <el-input v-model="groupForm.nickname" placeholder="请输入群昵称" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dispalyChangeGroup()">取 消</el-button>
          <el-button type="primary" @click="modifyGroup()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import {api} from '../api'
export default {
  name: 'modifyGroupInfo',
  props: ['groupId', 'nickname'],
  data () {
    return {
      isShowChangeGroup: false,
      groupForm: {groupId: null, nickname: null}
    }
  },
  methods: {
    ...mapMutations(['setGroupContactors', 'setCurrentForm']),
    dispalyChangeGroup () {
      this.isShowChangeGroup = !this.isShowChangeGroup
    },
    modifyGroup () {
      let me = this
      // todo change the group info
      api.modifyGroupInfo(this.groupForm).then(data => {
        switch (data.code) {
          case 1100:
            alert('修改资料失败！')
            break
          default :
            let groups
            try {
              groups = JSON.parse(JSON.stringify(this.groupContactors))
              groups.forEach(v => {
                if (v.frid === me.groupId) {
                  v.nickname = me.groupForm.nickname
                }
              })
            } catch (e) {
              console.log(e)
            }
            me.setGroupContactors(groups)
            me.setCurrentForm({frid: me.groupId, nickname: me.groupForm.nickname})
            break
        }
        me.dispalyChangeGroup()
      })
    }
  },
  computed: {
    ...mapGetters(['groupContactors'])
  },
  watch: {
    'groupId': function (v) {
      this.groupForm.groupId = v
    },
    'nickname': function (v) {
      this.groupForm.nickname = v
    }
  }
}
</script>

<style scoped lang="scss">

</style>
