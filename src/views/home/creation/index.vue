<template>
  <div class="creationBody">
    <el-button type="primary" size="large" @click="toWriteView">发布文章</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const toWriteView = () => {
    router.push('/write')
}
</script>

<style scoped lang="less">
.creationBody {
  background: #fff;
  height: 80px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-button{
    width: 80%;
  }
}
</style>
