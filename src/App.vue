<template>
  <div class="body">
    <indexTop />
    <div class="content">内容</div>
    <indexBottom />
  </div>
</template>

<script setup lang="ts">
import indexTop from "@/components/index_top/index.vue";
import indexBottom from "@/components/index_bottom/index.vue";
</script>

<style scoped lang="less">
.body {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 1200px;
    min-height: 700px;
    margin-top: 90px;
  }

  // .bottom {
  //   width: 100%;
  // }
}
</style>
