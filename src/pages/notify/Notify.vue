<script>
import ctr from './notifyCtr'
export default ctr
</script>
<template>
    <div id="notify">
      <div class="main">
        <div class="main_inner dis-table">
          <div class="col-2 rel-position">

            <chatHeader ref="chatHeader"></chatHeader>
          </div>
          <div class="col-3 rel-position">
            <div class="profile-area">
              <div class="box-hd">
                <div class="title-wrap">
                  <div class="title pointer">
                    <a class="title-name">通知</a>
                  </div>
                </div>
              </div>
              <div class="scroll-wrap">
                <div class="box-bd">
                  <div v-for="v of notifyList.applyFriend" :key="v.msgId">
                    <transition name="el-zoom-in-center">
                      <el-card v-show="isShowNotify" class="notify-wrap" shadow="hover">
                          <div class="notify-list-item">
                            <div class="avatar">
                              <img src="../../assets/bg.jpg" alt="">
                            </div>
                            <div class="content">
                                <!--<p class="fs-14 txt-bold">大名鼎鼎&nbsp;&nbsp;<i class="icon icon-man txt-normal"></i></p>-->
                                <p class="fs-12 lh-1_5">{{v.data}}&nbsp;</p>
                            </div>
                            <div class="action-wrap txt-right">
                              <el-button @click="handleApply(1, v)" type="primary" size="small">同意</el-button>
                              <el-button @click="handleApply(2, v)" type="warning" size="small">拒绝</el-button>
                              <!--<el-button @click="displayNotify()" type="info" size="small">忽略</el-button>-->
                            </div>
                          </div>
                      </el-card>
                    </transition>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped lang="scss">
  .notify-wrap{
    width: 95%;
    margin: 10px auto 0;
  }
  .notify-list-item{
    padding: 0;
    font-size: 14px;
    text-align: left;
    vertical-align: middle;
    overflow: hidden;
    .avatar{
      float: left;
      img{
        width: 50px;
      }
    }
    .content{
      width: 50%;
      float: left;
      margin:0 20px;
    }
    .action-wrap{
      width: 35%;
      float: left;
    }
  }
  .main{
    height: 80%;
    min-height: 600px;
    padding-top: 100px;
    display: block;
    -webkit-transition: padding .3s linear;
    backface-visibility: hidden;
  }
  @media screen and (max-width: 1100px){
    .main{
      height: 100%;
      padding: 0;
    }
  }
  .main_inner{
    max-width: 1200px;
    min-width: 1000px;
    height: 100%;
    margin: 0 auto;
    border-radius: 3px;
    overflow: hidden;
  }
  .col-1,.col-2,.col-3{
    display: table-cell;
    vertical-align: top;
  }
  .col-1{
    width: 150px;
    background: #eeeeee;
    .title{
      height: 51px;
      line-height: 51px;
      border-bottom: 1px solid #d6d6d6;
    }
  }
  .col-2{
    width: 280px;
    background:#2e3238;
    .tab{
      overflow: hidden;
      position: relative;
      padding-bottom: 4px;
      border-bottom: 1px solid #292c33;
      .tab-item{
        float: left;
        width: 50%;
        position: relative;
        a{
          display: block;
          text-align: center;
        }
      }
    }
    .chat-list{
      height: 628px;
      overflow-y: auto;
      .contact-title{
        padding: 8px 18px;
        font-weight: 400;
        color: #787b87;
        background: #292d32;
        font-size: 14px;
      }
      .chat-item{
        overflow: hidden;
        padding: 12px 18px 11px;
        border-bottom: 1px solid #292c33;
        cursor: pointer;
        position: relative;
        transition: background-color .5s;
        &.active{
          background: #3a3f45;
        }
        &:hover{
          background: #3a3f45;
        }
        .avatar{
          float: left;
          margin-right: 10px;
          position: relative;
          img{
            display: block;
            width: 30px;
            height: 30px;
            border-radius: 2px;
          }
        }
        .info{
          overflow: hidden;
          .nickname{
            font-weight: 400;
            font-size: 13px;
            color: #fff;
            line-height: 30px;
          }
        }
      }
    }
  }
  .col-3{
    width: 720px;
    height:782px;
    background: #eeeeee;
  }
  .profile-area{
    position: relative;width: 100%;height: 100%;left: 0;top: 0;margin: auto auto;
    .box-hd{
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      line-height: 30px;
    }
    .title-wrap{
      position: relative;
      padding: 10px 0;
      margin: 0 19px;
      border-bottom: 1px solid #d6d6d6;
      background-color: #eee;
      z-index: 1024;
      .title{
        font-weight: 400;
        height: 25px;
        display: inline-block;
        font-size: 14px;
        .title-name{
          display: inline-block;
          vertical-align: middle;
          max-width: 300px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          text-decoration: none;
          color: #000;
          font-weight: 400;
        }
      }
    }
    .scroll-wrap{
      position: absolute;
      overflow: hidden;
      top: 51px;
      right: 0;
      left: 0;
      padding: 0!important;
    }
    .box-bd{
      height: 730px;
      bottom: 180px;
      margin-right: 19px;
      background: white;
      border: none!important;
      box-sizing: content-box!important;
      left: 0;
      max-height: none!important;
      max-width: none!important;
      overflow: auto;
      position: relative!important;
      top: 0;
      width: auto!important;
      right: 0;
      .message{
        overflow: hidden;
        margin-bottom: 16px;
        width: 100%;
        &.no-arrow .content .bubble:after{
          display: none;
        }
        .avatar{
          width: 40px;
          height: 40px;
          border-radius: 2px;
          float: left;
          cursor: pointer;
        }
        .content{
          overflow: hidden;
          .bubble{
            background-color: #b2e281;
            max-width: 500px;
            min-height: 1em;
            display: inline-block;
            vertical-align: top;
            position: relative;
            text-align: left;
            font-size: 14px;
            border-radius: 3px;
            margin: 0 10px;
            &.clear-bg{
              background-color: transparent;
            }
            .bubble-cont{
              word-wrap: break-word;
              word-break: break-all;
              min-height: 25px;
              .plain{
                padding: 9px 13px;
                pre{
                  margin: 0;
                  font-family: inherit;
                  font-size: inherit;
                  white-space: pre-wrap;
                  word-break: normal;
                }
              }
              .image{
                border-radius: 4px;
                overflow: hidden;
                position: relative;
                img{
                  display: block;
                  cursor: pointer;
                  max-width: 350px;
                  max-height: 240px;
                  vertical-align: middle;
                }
              }
            }
            &:after{
              content: " ";
              width: 0;
              height: 0;
              line-height: 0;
              font-size: 0;
              position: absolute;
              top: 14px;
              border-width: 6px;
              border-style: solid;
            }
          }
        }
        &.me{
          float: right;
          text-align: right;
          clear: right;
          .avatar{
            float: right;
          }
          .content .bubble:after{
            left: 100%;
            border-color:transparent transparent transparent #b2e281;
          }
        }
        &.you{
          float: left;
          text-align: left;
          clear: left;
          .content .bubble{
            background-color: white;
          }
          .content .bubble:after{
            right: 100%;
            border-color:transparent white transparent transparent;
          }
        }
      }
    }
    .box-ft{
      height: 180px;
      margin-right: 19px;
      border-top: 1px solid #d6d6d6;
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      .toolbar{
        height: 30px;
        padding: 5px 17px;
        text-align: left;
        a{
          color: #555;
        }
      }
      .content{
        width: 700px;
        height: 84px;
        overflow-y: auto;
        /*text-align: left;*/
        padding: 5px 17px;
        text-align: justify;
        border: none;
        font-size: 14px;
        white-space: pre-wrap;
        word-break: normal;
        font-family: inherit;
        line-height: 1.6;
        background: #eeeeee;
        img{
          max-width: 700px;
        }
        &:focus{
          outline: none;
        }
      }
      .action{
        text-align: right;
        margin-top: 5px;
        .desc{
          color: #888;
          font-size: 12px;
          margin-left: 10px;
          margin-right: 7px;
        }
        a{
          background-color: #fff;
          color: #222;
          display: inline-block;
          border: 1px solid #c1c1c1;
          padding: 3px 30px;
          font-size: 14px;
          border-radius: 4px;
        }
      }
    }
  }
  .icon-profile{
    width: 150px;
    height: 150px;
    display: block;
    margin: 50px auto 0;
    background: url("../../assets/profile.png")no-repeat;
  }
  .profile{
    padding: 80px 0;
    text-align: center;
    .avatar{
      margin-bottom: 22px;
      img{
        display: block;
        width: 100px;
        height: 100px;
        margin: 0 auto;
        border-radius: 4px;
      }
    }
    .nickname{
      font-weight: 400;
      font-size: 24px;
      margin-bottom: 10px;
      display: inline-block;
    }
    .signature{
      font-size: 14px;
      color: #888;
    }
    .meta-area{
      width: 250px;
      padding-left: 160px;
      text-align: left;
      margin: 30px auto 40px;
      .meta-item{
        overflow: hidden;
        .label{
          float: left;
          font-size: 12px;
          color: #888;
          margin-right: 10px;
        }
        .value{
          font-size: 12px;
          color: #888;
          width: 134px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
      }
    }
    .button{
      display: inline-block;
      width: 200px;
      text-align: center;
      color: #fff;
      line-height: 40px;
      background-color: #42ac3e;
      font-size: 14px;
      text-decoration: none;
      border-radius: 4px;
    }
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
  .icon-man{
    color: #0099FF;
  }
  .icon-woman{
    color: #FF0099;
  }
</style>
