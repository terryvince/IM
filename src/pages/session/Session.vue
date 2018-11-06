<script>
import * as ctr from './sessionCtr'
export default ctr
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .main{
    height: 80%;
    min-height: 600px;
    padding-top: 100px;
    display: block;
    -webkit-transition: padding .3s linear;
    -webkit-backface-visibility: hidden;
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
    .col-1,.col-2,.col-3,col-4{
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
    .col-4{
      width: 150px;
      height:782px;
      border-left: 1px solid #cccccc;
      background: #eee;
    }
    .col-2{
      width: 280px;
      background:#2e3238;
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
            width: 40px;
            height: 40px;
            border-radius: 2px;
          }
        }
        .ext{
          float: right;
          color: #6b6f7c;
          font-size: 13px;
          text-align: right;
          .attr{
            height: 19px;
            line-height: 1.5;
          }
        }
        .info{
          overflow: hidden;
          .nickname{
            font-weight: 400;
            font-size: 13px;
            color: #fff;
            line-height: 20px;
            .nickname-text{
              display: inline-block;
              *display: inline;
              *zoom: 1;
              vertical-align: top;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-wrap: normal;
            }
            .msg{
              color: #fff;
              font-size: 13px;
              width: 100%;
              display: inline-block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-wrap: normal;
              height: 1.5em;
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
    .chart-area{
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
        height: 541px;
        bottom: 180px;
        padding: 10px 19px 0;
        border: none!important;
        box-sizing: content-box!important;
        left: 0;
        margin: 0;
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
                  overflow: visible;
                  position: relative;
                  img{
                    display: block;
                    cursor: pointer;
                    max-width: 350px;
                    max-height: 240px;
                    vertical-align: middle;
                  }
                }
                .icon-warning-circle-fill{
                  position: absolute;
                  right: 100%;
                  top: 50%;
                  margin-top: -11px;
                  margin-right: 9px;
                  cursor: pointer;
                  font-size: 22px;
                }
                .ico_loading{
                  position: absolute;
                  right: 100%;
                  top: 50%;
                  vertical-align: middle;
                  margin-top: -7px;
                  margin-right: 13px;
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
    .null-area{
      margin-top: 150px;
      .icon-wechat-fill{
        font-size: 100px;
        color: #e2e2e2;
      }
      .text{
        color: #cccccc;
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

  .chatRoomMembersWrap{
    .members_wrp{
      top: 50px;
      margin-top: 1px;
      box-shadow: 1px 1px 1px #e0e0e0;
      width: 100%;
      .members {
        padding: 10px 4px 8px 17px;
        background-color: #eee;
        border-bottom: 1px solid #dedede;
        .members_inner {
          margin-right: -4px;
          max-height: 300px;
          overflow-y: auto;
          overflow-x: hidden;
          .member {
            float: left;
            position: relative;
            height: 85px;
            margin-right: 14px;
            margin-left: 7px;
            padding-top: 10px;
            &:after {
              content: "";
              display: block;
              clear: both;
            }
            .avatar {
              display: block;
              cursor: pointer;
              width: 55px;
              height: 55px;
              background-color: #ccc;
            }
            .nickname {
              color: #888;
              width: 72px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-wrap: normal;
              font-size: 12px;
              margin-left: -8px;
              vertical-align: middle;
            }
          }
        }
      }
    }
    .mmpop {
      position: absolute;
      background-color: #fff;
      z-index: 99;
      /*top: 0;*/
      left: 0;
      outline: none;
    }
    .slide-down {
      transition-timing-function: cubic-bezier(.25,.46,.45,.94);
    }
  }
  .message-system{
    text-align: center;
    margin: 10px auto;
    max-width: 50%;
    .system-content{
      display: inline-block;
      font-size: 12px;
      padding: 1px 18px;
      color: #b2b2b2;
      border-radius: 2px;
    }
  }
</style>

<template>
  <div class="session" @click="hideAll($event)">

    <!--资料卡片-->
    <profileCard v-show="isShowProfileCard" :cardParms="cardParms"></profileCard>

    <div class="main">
      <div class="main_inner dis-table">
        <div class="col-1" v-show="false">
          <div id="switchAccount">
            <div class="title txt-center fs-20">切换账号</div>
            <div class="switch-wrap">
              <a class="btn btn-default bg-white bottom-10 top-10">客服1</a>
              <a class="btn btn-default bg-white bottom-10">客服2</a>
              <a class="btn btn-default bg-white">客服3</a>
            </div>
          </div>
        </div>
        <div class="col-2 rel-position">

            <chatHeader ref="chatHeader"></chatHeader>

          <div class="tab">
            <div class="tab-item">
              <router-link :to="{path:'/'}"><i class="icon icon-message-fill fs-28" style="color: #3caf36"></i></router-link>
            </div>
            <div class="tab-item">
              <router-link :to="{path:'/contactor'}"><i class="icon icon-team fs-28 txt-white"></i></router-link>
            </div>

          </div>
          <div class="chat-list">

            <div @click="selectedItem(item)" :class="{'active':item.isSelected}" class="chat-item" v-for="item of sessions" :key="item.frid">
              <div class="ext">
                <p class="attr">{{(item.lastedMsg && item.lastedMsg.time) | formatDate('time')}}</p>
              </div>
              <div class="avatar">
                <img v-show="item.headurl" :src="item.headurl" alt="头像">
                <img v-show="!item.headurl" src="../../assets/bg.jpg" alt="头像">
              </div>
              <div class="info">
                <h3 class="nickname txt-left">
                  <span class="nickname-text">{{item.nickname}}</span>
                  <span class="msg" style="max-width:230px">{{item.lastedMsg && item.lastedMsg.data}}</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 rel-position">
          <div v-if="currentForm.frid!=0 && !currentForm.frid" class="null-area">
            <i class="icon icon-wechat-fill"></i>
            <p class="text fs-14">未选择聊天</p>
          </div>
          <!--currentForm.frid-->
          <div v-if="currentForm.frid==0 || currentForm.frid" class="chart-area">
            <div class="box-hd">
            <!--群成员列表-->
            <transition name="el-zoom-in-top">
              <div v-show="isShowGroup" class="chatRoomMembersWrap" style="position: relative;z-index: 999">
                <div class="mmpop members_wrp slide-down">
                  <div class="members">
                    <div class="members_inner">
                      <div v-for="item of groupMemberList" :key="item.frid" class="member">
                        <img v-show="!item.headurl" @click.self.stop="setProfileCard($event,item)" class="avatar" src="../../assets/bg.jpg" :title="item.nickname">
                        <img v-show="item.headurl" @click.self.stop="setProfileCard($event,item)" class="avatar" :src="item.headurl" :title="item.nickname">
                        <p class="nickname">{{item.nickname}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
              <div class="title-wrap">
                <div class="title pointer">
                  <a @click="displayGroup()" class="title-name">{{currentForm.nickname}}<i :class="{'icon-down':!isShowGroup,'icon-up':isShowGroup}" class="icon"></i></a>
                </div>
                <i title="邀请入群" @click="$refs.chatHeader.showInvite()" class="right-float icon icon-plus-circle-fill fs-16 pointer"></i>
              </div>
            </div>
            <div class="scroll-wrap">
              <div class="box-bd" ref="msg_list">
              <!--currentForm.messages-->
                <div class="message" :class="{'you':item.fromid!=0,'me':item.fromid==0,'no-arrow':item.msgtype == msgType.IMAGE|| item.msgtype == msgType.GROUP_IMAGE}" v-for="item of currentForm.messages" :key="item.msgid">
                  <div v-if="compareMsgType(item.msgtype)" class="message-common">
                    <img class="avatar" src="../../assets/bg.jpg" alt="">
                    <div class="content">
                      <div class="bubble" :class="{'clear-bg':item.msgtype == msgType.IMAGE|| item.msgtype == msgType.GROUP_IMAGE }">
                        <div class="bubble-cont">
                        <!--文本-->
                          <div class="plain" v-if="item.msgtype == msgType.TEXT|| item.msgtype == msgType.GROUP_TEXT">
                            <pre class="message-plain">{{item.data}}</pre>
                            <i v-show="false" class="icon icon-warning-circle-fill txt-warning" title="重新发送"></i>
                            <img v-show="false" class="ico_loading" src="../../assets/loading.gif" alt="">
                          </div>
                          <!--图片-->
                          <div class="image" v-if="item.msgtype == msgType.IMAGE|| item.msgtype == msgType.GROUP_IMAGE">
                            <img :src="item.msg" alt="" :style='item.style'>
                            <i v-show="false" class="icon icon-warning-circle-fill txt-warning" title="重新发送"></i>
                            <img class="ico_loading" src="../../assets/loading.gif" alt="">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="!compareMsgType(item.msgtype)" class="message-system clear">
                    <span class="system-content">{{item.data}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-ft">
              <div class="toolbar">
                <label href="javascript:;" title="上传图片" class="icon icon-image fs-24 rel-position pointer">
                <input ref="files" @change="sendImage()" type="file"
                style="
                opacity: 0;position:absolute;z-index:-99">
                </label>
              </div>
              <!--富文本-->
              <!--<div class="content" contenteditable>--><!--</div>-->
              <textarea @keyup.ctrl.enter="newLine()" @keyup.enter.exact="sendMsg()" v-model="temp_msg" class="content"></textarea>
              <div class="action">
                <span class="desc">按下Ctrl+Enter换行</span>
                <a @click="sendMsg()" href="javascript:;" class="btn btn-default bg-white">发送</a>
              </div>
            </div>
          </div>
        </div>
        <!--<div class="col-4 rel-position">-->
            <!--111-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>
