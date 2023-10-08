<template>
  <div class="bottom">
      <div class="content">
          <div class="left">制作小组 赤峰学院小组</div>
          <div class="right">
              <span>联系我们</span>
              <span>合作伙伴</span>
              <span>用户协议</span>
              <span>隐私协议</span>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.bottom {
  width: 100%;
  height: 50px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
      width: 1200px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #444;

      .right {
          span {
              margin-right: 10px;
          }
      }
  }
}
</style>