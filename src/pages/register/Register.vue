<template>
  <div class="register center box-shadow">
    <!--<h1 class="fs-26 txt-bold txt-white" style="background:#0066CC;border-radius: 5px 5px 0 0;height: 80px;line-height: 80px;">账号注册</h1>-->
    <form>
      <el-tooltip class="item" effect="dark" content="请输入4-16位以字母开头的用户名" placement="top">
        <div class="input-group fs-30 bottom-35">
          <input class="txt-input fs-18" v-model="form.username" maxlength="16" type="text" placeholder="请输入你的用户名">
          <i class="icon icon-user"></i>
        </div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="请输入6-20位字母，数字和特殊字符两个以上组合成的密码" placement="top">
        <div class="input-group fs-30 bottom-35">
          <input class="txt-input fs-18" v-model="form.password" maxlength="20" type="password" placeholder="请输入你的密码">
          <i class="icon icon-lock"></i>
        </div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="请输入与密码一致" placement="top">
        <div class="input-group fs-30 bottom-35">
          <input class="txt-input fs-18" v-model="form.comfirmPwd" maxlength="20" type="password" placeholder="确认密码">
          <i class="icon icon-lock"></i>
        </div>
      </el-tooltip>
      <a @click="sendRegister()" class="btn txt-white fs-22">注&nbsp;&nbsp;册</a>
      <div class="check-group top-25 clear">
        <a @click="changeRegisterType()" class="right-float txt-underline">通过{{ {username:'账号', phone: '手机号'}[registerType] }}注册</a>
      </div>
    </form>
    <div v-if="isShowAlert" style="margin: 0 10px">
      <el-alert
        @close="displayAlert()"
        :title="tip"
        type="error"
        show-icon>
      </el-alert>
    </div>
  </div>
</template>

<script>
import ctr from './registerCtr'
export default ctr
</script>

<style scoped lang="scss">
  .register{
    height: 550px;
    width: 500px;
    background: #f4f4f6;
    border-radius: 5px;
  }
  @media screen and (max-width: 750px){
    .register{
      width: 90%;
      margin: auto 5%;
      form{
        width: 85%;
      }
    }
  }
  form{
    width: 80%;
    margin: 50px auto 0;
    .bottom-35{
      margin-bottom: 35px;
    }
    .input-group{
      width: 100%;
      height: 60px;
      line-height: 60px;
      position: relative;
      .icon{
        position: absolute;
        left: 10px;
        top: 0;
      }
      input:focus~i{
        color:#478de3 ;
      }
      input.txt-input{
        width: 100%;
        height: 100%;
        padding: 0 0 0 50px;
        display: block;
        border: 1px solid #eaeaea;
        /*border: none;*/
        transition: box-shadow .2s;
        border-radius: 4px;
        &:focus{
          /*border: 1px solid transparent;*/
          box-shadow: 1px 1px 3px 0px #478de3 inset,-1px -1px 3px 0 #478de3 inset;
        }
      }
    }
    .btn{
      width: 100%;
      margin: 0 auto;
      background: #478de3;
      display: block;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
    .check-group{
      width: 100%;
      height: 30px;
      line-height: 30px;
    }
    input[type='checkbox']{
      width: 17px;
      height: 17px;
      border-radius: 2px;
      display: inline-block;
      position: relative;
      top: 3px;
    }
  }
</style>
