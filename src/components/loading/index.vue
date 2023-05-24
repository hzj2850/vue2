<template>
  <div class="glob_loading middle_center">
    <!-- 仿手机端 -->
    <div class="center_body loading-clockwise" v-if="type == 1">
      <div class="la-ball-spin-clockwise">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {{text}}
    </div>
    <!-- Ant Design Vue -->
    <div class="center_body ant_vue_spin" v-if="!type">
      <a-spin size="large" />
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: '加载中'
    }
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
/* 数据加载中 */
.glob_loading {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  user-select: none;
  text-align: center;
  z-index: 999;
}

// 垂直居中
.middle_center {
  display: block;
  &::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    width: 0;
    color: #fff;
  }
  > .center_body {
    display: inline-block;
    vertical-align: middle;
  }
}

/* 加载中（仿手机端） */
.loading-clockwise {
  width: 150px;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 16px;
  color: #fff;
  border: 1px solid transparent;
  .la-ball-spin-clockwise {
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 20px;
  }
}

/* Ant Design Vue */
.ant_vue_spin{
  font-size: 16px;
  color: #fff;
  /deep/ .ant-spin{
    display: block !important;
    margin-bottom: 10px;
  }
}

/* 加载中动画-------8个点----------start */
.la-ball-spin-clockwise,
.la-ball-spin-clockwise > div {
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.la-ball-spin-clockwise {
  display: block;
  font-size: 0;
  color: #fff;
}

.la-ball-spin-clockwise.la-dark {
  color: #333;
}

.la-ball-spin-clockwise > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.la-ball-spin-clockwise {
  width: 32px;
  height: 32px;
}

.la-ball-spin-clockwise > div {
  position: absolute;
  top: 50%;
  left: 50%;
  /* 大小颜色设置--start */
  width: 20%;
  height: 20%;
  margin-top: -10%;
  margin-left: -10%;
  /* 大小颜色设置--end */
  border-radius: 100%;
  -webkit-animation: ball-spin-clockwise 1s infinite ease-in-out;
  -moz-animation: ball-spin-clockwise 1s infinite ease-in-out;
  -o-animation: ball-spin-clockwise 1s infinite ease-in-out;
  animation: ball-spin-clockwise 1s infinite ease-in-out;
}

.la-ball-spin-clockwise > div:nth-child(1) {
  top: 5%;
  left: 50%;
  -webkit-animation-delay: -0.875s;
  -moz-animation-delay: -0.875s;
  -o-animation-delay: -0.875s;
  animation-delay: -0.875s;
}

.la-ball-spin-clockwise > div:nth-child(2) {
  top: 18.1801948466%;
  left: 81.8198051534%;
  -webkit-animation-delay: -0.75s;
  -moz-animation-delay: -0.75s;
  -o-animation-delay: -0.75s;
  animation-delay: -0.75s;
}

.la-ball-spin-clockwise > div:nth-child(3) {
  top: 50%;
  left: 95%;
  -webkit-animation-delay: -0.625s;
  -moz-animation-delay: -0.625s;
  -o-animation-delay: -0.625s;
  animation-delay: -0.625s;
}

.la-ball-spin-clockwise > div:nth-child(4) {
  top: 81.8198051534%;
  left: 81.8198051534%;
  -webkit-animation-delay: -0.5s;
  -moz-animation-delay: -0.5s;
  -o-animation-delay: -0.5s;
  animation-delay: -0.5s;
}

.la-ball-spin-clockwise > div:nth-child(5) {
  top: 94.9999999966%;
  left: 50.0000000005%;
  -webkit-animation-delay: -0.375s;
  -moz-animation-delay: -0.375s;
  -o-animation-delay: -0.375s;
  animation-delay: -0.375s;
}

.la-ball-spin-clockwise > div:nth-child(6) {
  top: 81.8198046966%;
  left: 18.1801949248%;
  -webkit-animation-delay: -0.25s;
  -moz-animation-delay: -0.25s;
  -o-animation-delay: -0.25s;
  animation-delay: -0.25s;
}

.la-ball-spin-clockwise > div:nth-child(7) {
  top: 49.9999750815%;
  left: 5.0000051215%;
  -webkit-animation-delay: -0.125s;
  -moz-animation-delay: -0.125s;
  -o-animation-delay: -0.125s;
  animation-delay: -0.125s;
}

.la-ball-spin-clockwise > div:nth-child(8) {
  top: 18.179464974%;
  left: 18.1803700518%;
  -webkit-animation-delay: 0s;
  -moz-animation-delay: 0s;
  -o-animation-delay: 0s;
  animation-delay: 0s;
}

@keyframes ball-spin-clockwise {
  0%,
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  20% {
    opacity: 1;
  }

  80% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
}

/* 加载中动画-------8个点----------end */
</style>
