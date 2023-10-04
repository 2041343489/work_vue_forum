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
.body{
  .content{
    width: 80vw;
    min-height: 500px;
    background: #000;
  }
}
</style>
