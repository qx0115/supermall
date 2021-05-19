<template>
  <div class="successful">
    <div class="header">
      <span
        ><img
          class="successful-logo"
          src="../assets/css/footerlogo-02.png"
          alt=""
      /></span>
    </div>
    <div class="successful-title">Successfully subscribed~</div>
    <img class="successful_icon" src="../assets/css/successful.png" alt="" />
    <span class="successful_content"
      >About to jump to the homepage…</span
    >
     <div class="successfulsub_timer">
       Automatically jump to the homepage after &nbsp; {{ time }}s
      </div>
    <div class="successful_end">
     
      <div class="successful_copyright">
        Copyright © 2021 All rights reserved.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "successful",
  data() {
    return {
      time: 3
    };
  },
  methods: {
    countDown() {
      let that = this;
      that.time--;
    }
  },
  mounted() {
    let that = this;
    that.time = 3;
    setInterval(that.countDown, 1000);
  },
  watch: {
    time: function(newVal, oldVal) {
      if (newVal === 0) {
        this.$router.push("./Home");
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import "../assets/fonts/font.css";
.successful-logo {
  width: 200px;
  height: 60px;
  position: absolute;
  top: 21px;
  left: 261px;
}
.successful_timer {
  color: #333333;
}
.successful {
  width: 1920px;
  height: 1080px;
  position: relative;
}
.successful-title {
  position: absolute;
  top: 168px;
  left: 681px;
  font-size: 46px;
  font-family: Raleway-SemiBold, Raleway;
  font-weight: 600;
  color: #a40000;
  line-height: 54px;
}
.successful_icon {
  position: absolute;
  top: 300px;
  left: 905px;
  width: 110px;
  height: 110px;
}
.successful_content {
  position: absolute;
  text-align: center;
  top: 440px;
  left: 801px;
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  line-height: 28px;
}
.successful_end {
  position: absolute;
  top: 1000px;
  width: 1920px;
  height: 80px;
  background-color: #333;
}
.successful_copyright {
  height: 12px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 12px;
  position: absolute;
  top: 32px;
  left: 856px;
}
.successfulsub_timer{
  position: absolute;
  top: 506px;
  left: 1119px;

font-size: 19px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;
line-height: 26px;
}
</style>
