<template>
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li
      v-for="i in count"
      :key="i"
      class="infinite-list-item"
      @click="logNumber(i)"
    >
      {{ i }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
const load = () => {
  count.value += 2;
};

const logNumber = (item:number) => {
  console.log(item);
};
</script>

<style scoped lang="less">
.infinite-list {
  height: 700px;
  padding: 0;
  margin: 0;
  list-style: none;
  background: #fff;
}

.infinite-list::-webkit-scrollbar {
  width: 0px; // 滑块宽度
}
// .infinite-list::-webkit-scrollbar-thumb {
//   background: #ccc; // 滑块颜色
//   border-radius: 5px; // 滑块圆角
// }
// .infinite-list::-webkit-scrollbar-thumb:hover {
//   background: #ddd; // 鼠标移入滑块变色
// }
.infinite-list .infinite-list-item {
  height: 100px;
  border-bottom: 1px solid #eee;
  margin: 10px;
}
</style>
