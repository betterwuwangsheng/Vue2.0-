<template>
  <div class="form-item">
    <div class="form-body" :class="{ active: active }">
      <!-- @focus="" 获取焦点时事件 -->
      <van-field
        @focus="active = true"
        @blur="active = false"
        v-model="username"
        :error="error"
        placeholder="请输入用户名"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Username",
  data() {
    return {
      username: "",
      error: false,

      //点击时修改颜色
      active: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
