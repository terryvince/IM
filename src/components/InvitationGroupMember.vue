<template>
    <div id="InvitationGroupMember">
      <!--群拉人弹框-->
      <el-dialog title="拉人进群" :visible.sync="isInvite">
        <el-form class="txt-left" :model="groupForm" :label-width="'80px'">
          <el-form-item label="选择群:">
            <el-select class="width-400" v-model="groupForm.groupId" placeholder="请选择">
              <el-option
                v-for="item in groupContactors"
                :key="item.frid"
                :label="item.nickname"
                :value="item.frid">
                <div>
                  <span style="float: left">
                    <img width="40" style="vertical-align: middle" src="../assets/bg.jpg" alt="">
                  </span>
                  <span style="float: right;margin-right: 200px; color: #8492a6; font-size: 13px">{{item.nickname}}</span>
                </div>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择好友:">
            <el-select class="width-400" multiple v-model="groupForm.memberIds" placeholder="请选择">
              <el-option
                v-for="item in contactors"
                :key="item.frid"
                :label="item.nickname"
                :value="item.frid">
                <div>
                  <span style="float: left">
                    <img width="40" style="vertical-align: middle" src="../assets/bg.jpg" alt="">
                  </span>
                  <span style="float: right;margin-right: 200px; color: #8492a6; font-size: 13px">{{item.nickname}}</span>
                </div>
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="postInvite()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {api} from '../api'
export default {
  name: 'InvitationGroupMember',
  props: ['memberid', 'isShowInvite'],
  data () {
    return {
      form: {},
      groupForm: {groupId: null, memberIds: []},
      list: []
    }
  },
  methods: {
    postInvite () {
      api.invitationGroupMember(this.groupForm)
      this.close()
    },
    close () {
      this.$emit('close')
    }
  },
  computed: {
    ...mapGetters(['groupContactors', 'contactors']),
    isInvite: {
      get () {
        return this.isShowInvite
      },
      set () {
        this.close()
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
