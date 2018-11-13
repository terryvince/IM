<template>
  <div id="chatHeader">
    <div class="header">
      <div class="avatar">
        <img v-show="profile.headurl" :src="profile.headurl" alt="头像">
        <img v-show="!profile.headurl" src="../assets/bg.jpg" alt="头像">
      </div>
      <div class="info">
        <h3>
          <span class="nickname">{{profile.nickname}}</span>
          <i @click.stop="displayMenu()" class="menu icon icon-unorderedlist pointer fs-24"></i>
        </h3>
      </div>
    </div>
    <!--菜单面板-->
    <div @click.stop="" v-show="isShowMenu" class="menu-list">
      <ul class="dropdown_menu">
        <li @click="displayAddFriend()">
          <a>
            <i class="icon icon-adduser"></i>
            添加好友
          </a>
        </li>
        <li @click="displayGroup()">
          <a>
            <i class="icon icon-addteam"></i>
            创建群
          </a>
        </li>
        <li @click="displayModifyProfile()">
          <a>
            <i class="icon icon-user"></i>
            修改个人资料
          </a>
        </li>
        <li @click="quit()">
          <a>
            <i class="icon icon-logout"></i>
            退出
          </a>
        </li>
      </ul>
    </div>
    <div class="search_bar">
      <i class="icon icon-search wechat_search"></i>
      <input type="text" placeholder="搜索" @input="changeSearch()">

      <!--搜索面板-->
      <div class="recommendation" v-show="isShowSearch">
        <div @click.stop="test('选中项')" class="item" v-for="(item,index) of [1,2,3,4,5,6]" :key="item">
          <h4 v-if="index == 0" class="contact_title txt-left">好友</h4>
          <div class="active">
            <div class="contact_item">
              <div class="avatar">
                <img class="img" src="../assets/bg.jpg" alt="">
              </div>
              <div class="info">
                <h4 class="nickname txt-left">A袁-13368053160</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--选项卡-->
    <div class="tab">
      <div class="tab-item">
        <router-link :to="{path:'/'}"><i class="icon icon-message fs-28"></i></router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'/contactor'}"><i class="icon icon-team fs-28"></i></router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'/notify'}"><i class="icon icon-xiaoxi fs-28"></i></router-link>
      </div>
    </div>

    <!--修改个人资料-->
    <el-dialog title="修改个人资料" :visible.sync="isShowModifyProfile">
      <el-form :model="formProfile">
        <el-form-item label="用户号" :label-width="formLabelWidth">
          <el-input v-model="formProfile.usernum" placeholder="请输入用户号" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="formProfile.nickname" placeholder="请输入昵称" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="txt-left" label="性别" :label-width="formLabelWidth">
          <el-radio-group v-model="formProfile.sex">
            <el-radio :label="0">男</el-radio>
            <el-radio :label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="displayModifyProfile()">取 消</el-button>
        <el-button type="primary" @click="modifyProfile()">确 定</el-button>
      </div>
    </el-dialog>

    <!--加群弹框-->
    <el-dialog title="创建群" :visible.sync="isShowGroup">
      <el-form :model="formGroup">
        <el-form-item label="群昵称" :label-width="formLabelWidth">
          <el-input v-model="formGroup.groupName" placeholder="请输入群昵称" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="displayGroup()">取 消</el-button>
        <el-button type="primary" @click="createGroup()">确 定</el-button>
      </div>
    </el-dialog>

    <!--加好友弹框-->
    <el-dialog title="添加好友" :visible.sync="isShowAddFriend">
      <el-form :model="formAddFriend">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="formAddFriend.number" placeholder="请输入好友账号" autocomplete="off">
            <el-button @click="viewInfo()" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-form-item>
        <el-row v-if="friendInfo">
          <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
              <img style="max-width: 200px;" v-if="friendInfo.headurl" :src="friendInfo.headurl" alt="">
              <img style="max-width: 200px" v-if="!friendInfo.headurl" src="../assets/bg.jpg" class="image">
              <div style="padding: 14px;">
                <span>{{friendInfo.nickname}}</span>
                <i :class="{0:'icon-man',1:'icon-woman'}[friendInfo.sex]" class="icon"></i>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="displayAddFriend()">取 消</el-button>
        <el-button :disabled="!friendInfo" type="primary" @click="createFriend()">添 加</el-button>
      </div>
    </el-dialog>

    <!--邀请加入群-->
    <invitationGroupMember @close="hideInvite()" :isShowInvite="isShowInvite"></invitationGroupMember>
  </div>
</template>

<script>
import invitationGroupMember from '../components/InvitationGroupMember'
import {mapGetters, mapMutations} from 'vuex'
import {api, codeType} from '../api'
export default {
  name: 'chatHeader',
  components: {
    invitationGroupMember
  },
  data () {
    return {
      data: '',
      isShowMenu: false,
      isShowSearch: false,
      formGroup: {groupName: ''},
      formAddFriend: {number: null},
      friendInfo: null,
      formLabelWidth: '80px',
      isShowGroup: false,
      isShowAddFriend: false,
      isShowInvite: false,
      isShowModifyProfile: false,
      formProfile: {nickname: null, sex: null, usernum: null}
    }
  },
  methods: {
    ...mapMutations(['logout', 'changeProfile']),
    hideAll () {
      this.isShowMenu = false
      this.isShowSearch = false
    },
    displayModifyProfile () {
      try {
        !this.isShowModifyProfile && (this.formProfile = JSON.parse(JSON.stringify(this.profile)))
      } catch (e) {
        console.log(e)
      }
      this.isShowModifyProfile = !this.isShowModifyProfile
    },
    modifyProfile () {
      let me = this
      api.modifyUserInfo(this.formProfile).then(data => {
        switch (data.code) {
          case 1100:
            alert('修改资料失败！')
            break
          case 1101:
            alert('用户号已被占用！')
            break
          default :
            me.changeProfile(me.formProfile)
            break
        }
        me.displayModifyProfile()
      })
    },
    quit () {
      this.logout()
      this.$router.push('/login')
    },
    viewInfo () {
      let me = this
      api.viewFriendInfo(this.formAddFriend).then(data => {
        if (data.code !== 0) {
          alert('你所查询的好友信息不存在！')
          return
        }
        me.friendInfo = data.data
      })
    },
    createGroup () {
      api.establishGroup({groupName: this.formGroup.groupName})
        .then(data => {
          if (data.code === 0) {
            api.pullContactList()
          } else {
            console.log('创建群失败！')
          }
        }).catch(err => {
          console.log(err)
        })
      this.displayGroup()
    },
    createFriend () {
      if (this.friendInfo.userType === codeType.FRIEND_ADD_EXISTENCE) {
        alert('你所添加的账号已经是好友关系！')
        return
      }
      api.addFriend(this.formAddFriend).then(data => {
        if (data && data.code !== 0) {
          alert('添加好友请求发送失败！')
        } else {
          console.log('添加好友请求无返回值！')
        }
      })
      this.displayAddFriend()
    },
    displayInvite () {
      this.isShowInvite = !this.isShowInvite
    },
    showInvite () {
      this.isShowInvite = true
    },
    hideInvite () {
      this.isShowInvite = false
    },
    displayAddFriend () {
      this.isShowAddFriend = !this.isShowAddFriend
      this.friendInfo = null
      this.formAddFriend = {number: null}
    },
    displayGroup () {
      this.isShowGroup = !this.isShowGroup
    },
    displayMenu () {
      this.isShowMenu = !this.isShowMenu
    },
    displaySearch () {
      this.isShowSearch = !this.isShowSearch
    },
    changeSearch () {
      this.isShowSearch = true
    }
  },
  computed: {
    ...mapGetters(['profile'])
  }
}
</script>

<style scoped lang="scss">
  .tab{
    .router-link-exact-active{
      color: #3caf36!important;
    }
  }
  .tab{
    overflow: hidden;
    position: relative;
    padding-bottom: 4px;
    border-bottom: 1px solid #292c33;
    .tab-item{
      float: left;
      width: 33.33%;
      position: relative;
      a{
        display: block;
        color: white;
        text-align: center;
      }
    }
  }
  .icon-man{
    color: #0099FF;
  }
  .icon-woman{
    color: #FF0099;
  }
  .menu-list{
    position: absolute;
    top: 60px;
    left: 85px;
    background: transparent;
    z-index: 102;
    width: 180px;
  .dropdown_menu{
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid #d6d6d6;
    box-shadow: 2px 3px 10px rgba(0,0,0,.1);
    min-width: 125px;
  li i{
    margin-right: 8px;
    font-size: 26px;
  }
  li a{
    display: block;
    text-decoration: none;
    color: #000;
    font-size: 14px;
    padding: 8px;
    border-bottom: 1px solid #f1f1f1;
    text-align: left;
  &:hover{
     background-color: #f5f5f5;
   }
  }
  }
  }

  .header{
    width: 100%;
    height: 76px;
    padding: 18px;
    position: relative;
  .avatar{
    display: table-cell;
    vertical-align: middle;
    word-wrap: break-word;
    word-break: break-all;
    white-space: nowrap;
    padding-right: 10.625px;
  img{
    width: 40px;
    height: 40px;
    border-radius: 2px;
    display: block;
    cursor: pointer;
  }
  }
  .info{
    display: table-cell;
    vertical-align: middle;
    word-wrap: break-word;
    word-break: break-all;
    width: 2000px;
  .nickname{
    display: inline-block;
    font-weight: 400;
    width: 156px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    color: #fff;
    font-size: 18px;
    vertical-align: top;
    line-height: 31px;
    text-decoration: none;
    text-align: left;
  }
  .menu{
    display: inline-block;
    vertical-align: top;
    outline: 0;
    color: #808285;
  }

  }
  }
  .search_bar{
    position: relative;
    width: 244px;
    background: #26292e;
    margin: 0 auto 6px;
  .wechat_search{
    position: absolute;
    z-index: 101;
    top: 1px;
    right: 0px;
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: #808285;
  }
  input{
    width: 214px;
    height: 32px;
    line-height: 32px;
    border: 0;
    border-radius: 2px;
    background-color: #26292e;
    padding-right: 10px;
    color: #fff;
    font-size: 12px;
    margin: 0;
    outline: 0;
  }
  }

  .recommendation{
    background: #33363b;
    width: 244px;
    top: 36px;
    left: 0;
    position: absolute;
    z-index: 99;
  .contact_title{
    margin-top: 0;
    padding: 3px 9px;
    font-weight: 400;
    color: #787b87;
    background-color: #393c43;
  }
  .contact_item{
    overflow: hidden;
    padding: 10px 9px;
    cursor: pointer;
    border-bottom: 1px solid #33363b;
    background-color: #393c43;
  &:hover{
     background: #595b64;
   }
  .avatar{
    float: left;
    margin-right: 10px;
  .img{
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 2px;
  }
  }
  .info{
    overflow: hidden;
    line-height: 30px;
  .nickname{
    font-weight: 400;
    color: #fff;
    font-size: 14px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
  }
  }
  }
</style>
