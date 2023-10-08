<template>
  <div class="top">
    <div class="content">
      <div class="left">
        <img src="../../assets/images/logo.jpg" title="章声论坛" />
        <p>章声论坛</p>
      </div>
      <div class="center">
        <Search />
      </div>
      <div class="right">
        <span class="login">登录/注册</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from "@/views/search/index.vue";
</script>

<style scoped lang="less">
.top {
  width: 100%;
  height: 50px;
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
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;

    .left {
      cursor: pointer;
      display: flex;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
      }

      p {
        margin-top: 4px;
        font-size: 23px;
        color: #000;
        font-family: "华文行楷";
      }
    }

    .right {
      margin-right: 20px;
      display: flex;
      font-size: 14px;
      color: #666;
      .login:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }
}
</style>
