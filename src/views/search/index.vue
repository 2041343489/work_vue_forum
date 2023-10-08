<template>
  <div class="search">
    <el-autocomplete
      :trigger-on-focus="false"
      :select-when-unmatched="true"
      clearable
      placeholder="探索章声论坛"
      @select="handleSelect"
    >
      <template #suffix>
        <el-icon class="search_button">
          <Search @click="handleSelect" />
        </el-icon>
      </template>
    </el-autocomplete>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";

const handleSelect = (item: any) => {
  console.log(item);
};
</script>

<style scoped lang="less">
.search {
  .search_button :hover{
    cursor: pointer;
  }
}
:deep(.el-input__wrapper) {
  width: 500px;
  border-radius: 20px;
}
:deep(.is-focus) {
  box-shadow: none;
  border: 1px solid #666;
}
</style>
