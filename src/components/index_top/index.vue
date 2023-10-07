<template>
  <div class="top">
    <div class="content">
      <div class="left">
        <img
          src="../../assets/images/logo.png"
          title="章声论坛"
        />
        <p>章声论坛</p>
      </div>
      <div class="right">
        <span class="help">帮助中心</span>
        <span class="login">登录/注册</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.top {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 99;
  top: 0px;

  .content {
    width: 1200px;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;

    .left {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }

      p {
        font-size: 20px;
        color: #55a6fe;
      }
    }

    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #666;

      .help {
        margin-right: 10px;
      }
      .help:hover {
        color: #55a6fe;
        cursor: pointer;
      }
      .login:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }
}
</style>
