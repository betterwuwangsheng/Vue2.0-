<template>
  <div class="form-item">
    <div class="form-body" :class="{ active: active }">
      <div class="pr">
        <van-field
          @focus="active = true"
          @blur="active = false"
          placeholder="请输入验证码"
        />
        <div class="code-button">
          <button type="button">获取验证码</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerificationCode",
  data() {
    return {
      error: false,

      //点击时修改颜色
      active: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.code-button {
  position: absolute;
  right: 0;
  top: 0;
  button {
    padding: 0;
    border: none;
    background: none;
    line-height: 24px;
  }
}
</style>
