<script>
import * as ctr from './registerCtr'
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
  <div class="register center box-shadow">
    <!--<h1 class="fs-26 txt-bold txt-white" style="background:#0066CC;border-radius: 5px 5px 0 0;height: 80px;line-height: 80px;">账号注册</h1>-->
    <form>
      <div class="input-group fs-30">
        <input class="txt-input fs-18" type="text" placeholder="请输入你的用户名">
        <i class="icon icon-user"></i>
      </div>
      <div class="input-group fs-30">
        <input class="txt-input fs-18" type="password" placeholder="请输入你的密码">
        <i class="icon icon-lock"></i>
      </div>
      <div class="input-group fs-30">
        <input class="txt-input fs-18" type="password" placeholder="确认密码">
        <i class="icon icon-lock"></i>
      </div>
      <router-link :to="{path:'/'}" class="btn txt-white fs-22">注&nbsp;&nbsp;册</router-link>
      <!--<div class="check-group top-25 clear">-->
        <!--<label for="rember_pwd" class="left-float"><input id="rember_pwd" type="checkbox">&nbsp;记住密码</label>-->
        <!--<a class="right-float">忘记密码？</a>-->
      <!--</div>-->
    </form>
  </div>
</template>
