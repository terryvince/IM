<script>
export default {
  props: {
    cardParms: {}
  },
  name: 'profileCard',
  data () {
    return {
      data: {}
    }
  },
  methods: {
    test () {
      console.log('hello')
    }
  },
  mounted () {
  },
  watch: {
    cardParms: function (v) {
      this.$refs.profile_card.style.left = v.event.clientX + 'px'
      this.$refs.profile_card.style.top = v.event.clientY + 'px'
      console.log(v)
      return v
    }
  }
}
</script>

<template>
  <div @click.stop="" id="ProfileCard" ref="profile_card" class="mmpop_profile">
    <div class="profile_mini">
      <div class="profile_mini_hd">
        <div class="avatar">
          <img class="img" src="../assets/bg.jpg" alt="">
        </div>
      </div>
      <div class="profile_mini_bd">
        <div class="nickname_area">
          <h4 class="nickname">茶语e族</h4>
          <i class="icon icon-man"></i>
        </div>
        <div class="meta_area">
          <div class="meta_item">
            <label class="label">地区：</label>
            <p class="value">四川 遂宁</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .mmpop_profile{
    position: absolute;
    background-color: #fff;
    top: 0;
    left: 0;
    outline: none;
    z-index: 999!important;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    transition-timing-function: cubic-bezier(.25,.46,.45,.94);
    .profile_mini_hd .avatar .img {
      width: 220px;
      height: 220px;
      display: block;
    }
    .profile_mini_bd {
      padding: 20px;
      min-height: 74px;
      .nickname_area {
        margin-bottom: 8px;
      }
      .nickname {
        font-weight: 400;
        font-size: 18px;
        display: inline-block;
        vertical-align: middle;
        max-width: 110px;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
      .web_wechat_men {
        font-size: 16px;
      }
      .meta_item {
        overflow: hidden;
        .label {
          float: left;
          font-size: 12px;
          color: #888;
          margin-right: 10px;
        }
        .value {
          font-size: 12px;
          color: #888;
          width: 105px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          padding-left: 5px;
          padding-right: 5px;
        }
      }
    }
  }
</style>
