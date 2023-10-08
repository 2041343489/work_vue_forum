<template>
  <div class="login">
    <el-dialog v-model="useStroe.isShowLogin" title="用户登录" width="35%">
      <div class="left">
        <el-form>
          <el-form-item>
            <el-input
              v-model="phone"
              placeholder="请输入手机号码"
              clearable
              :prefix-icon="User"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              class="captcha"
              v-model="captcha"
              placeholder="请输入验证码"
              clearable
              :prefix-icon="ChatDotSquare"
            />
          </el-form-item>
          <el-form-item>
            <el-button :disabled="isDisabled">获取验证码</el-button>
          </el-form-item>
          <el-form-item>
            <el-button class="btn-login" type="primary">用户登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { User, ChatDotSquare } from "@element-plus/icons-vue";
import { useCounterStore } from "@/stores/counter";

const useStroe = useCounterStore();

const phone = ref<string>("");
const captcha = ref<string>("");
const isDisabled = ref(true);

watch(phone, (newValue) => {
  if (newValue.length === 11) {
    isDisabled.value = false;
  } else {
    isDisabled.value = true;
  }
});
</script>

<style scoped lang="less">
.login {
  :deep(.el-dialog__body) {
    border-top: 1px solid #ddd;
  }
  .left {
    width: 90%;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px 5%;
    .btn-login {
      width: 100%;
    }
    .wxView {
      display: flex;
      flex-direction: column;
      align-items: center;

      .clickBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        p {
          color: #999;
          margin-bottom: 5px;
        }
      }
    }
    .back {
      display: inline-flex;
      cursor: pointer;
      margin-bottom: 5px;
    }
    #login_container {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
  .right {
    width: 80%;
  }
}
</style>
