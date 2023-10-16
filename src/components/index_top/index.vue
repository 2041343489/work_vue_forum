<template>
  <div class="top">
    <div class="content">
      <div class="left" @click="toIndex">
        <img src="../../assets/images/logo.jpg" title="章声论坛" />
        <p>章声论坛</p>
      </div>
      <div class="center">
        <Search />
      </div>
      <div class="right">
        <span class="login" @click="loginClick">登录/注册</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from "@/views/search/index.vue";
import { useCounterStore } from "@/stores/counter";
import { useRouter } from "vue-router";

const useStore = useCounterStore();
const router = useRouter();

const loginClick = () => {
  useStore.isShowLogin = true;
};

const toIndex = () => {
  router.push("/");
};
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
  border-bottom: 1px solid #eee;
  background: #fff;

  .content {
    width: 90vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
