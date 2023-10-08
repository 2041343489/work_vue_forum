<template>
  <el-row :gutter="20">
    <el-col :span="18">
      <Essay />
    </el-col>
    <el-col :span="6">456</el-col>
  </el-row>
</template>

<script setup lang="ts">
import Essay from "./essay/index.vue";
</script>

<style scoped lang="less"></style>
