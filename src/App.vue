<template>
  <div class="body">
    <indexTop />
    <div class="center">
      <div class="content">
        <RouterView></RouterView>
      </div>
    </div>
    <indexBottom />
    <Login />
  </div>
</template>

<script setup lang="ts">
import indexTop from "@/components/index_top/index.vue";
import indexBottom from "@/components/index_bottom/index.vue";
import Login from "@/components/login/index.vue";
</script>

<style scoped lang="less">
.body {
  .center {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F5F5F5;
    .content {
      // background: #fff;
      width: 1000px;
      min-height: 700px;
      margin-top: 60px;
    }
  }
}
</style>
