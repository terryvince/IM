<script>
import * as ctr from './loginCtr'
export default ctr
</script>

<style scoped lang="scss">
  .login{
    height: 500px;
    width: 500px;
    background: #f4f4f6;
    border-radius: 5px;
  }
  @media screen and (max-width: 750px){
    .login{
      width: 90%;
      margin: auto 5%;
      form{
        width: 85%;
      }
    }
  }
  form{
    width: 80%;
    margin: 60px auto 0;
    .input-group{
      width: 100%;
      height: 60px;
      line-height: 60px;
      position: relative;
      margin-bottom: 45px;
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
      a{
        color:rgb( 51, 51, 51 );
      }
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

<template>
  <div class="login center box-shadow">
    <form>
      <div class="input-group fs-30">
        <input v-model="loginForm.username" class="txt-input fs-18" type="text" placeholder="请输入你的用户名">
        <i class="icon icon-user"></i>
      </div>
      <div class="input-group fs-30">
        <input v-model="loginForm.password" class="txt-input fs-18" type="password" placeholder="请输入你的密码">
        <i class="icon icon-lock"></i>
      </div>
      <a @click="login()" class="btn txt-white fs-22">登&nbsp;&nbsp;录</a>
      <div class="check-group top-25 clear">
        <!--<label for="rember_pwd" class="left-float"><input id="rember_pwd" type="checkbox">&nbsp;记住密码</label>-->
        <router-link :to="{path:'/register'}" class="right-float">注册账号</router-link>
        <a class="left-float">忘记密码？</a>
      </div>
    </form>
  </div>
</template>
