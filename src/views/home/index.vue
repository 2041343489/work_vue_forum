<template>
  <el-row :gutter="20">
    <el-col :span="18">
      <!-- 首页文章列表 -->
      <Essay />
    </el-col>
    <el-col :span="6">
      <div class="right">
        <!-- 创作者中心 -->
        <Creation />
        <!-- 话题 -->
        <Topic />
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import Essay from "./essay/index.vue";
import Creation from "./creation/index.vue"
import Topic from "./topic/index.vue"
</script>

<style scoped lang="less"></style>
