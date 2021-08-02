<template>
  <div class="form-item">
    <label v-if="label" style="color: #fff">{{ labelText }}</label>
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

      // 点击时修改颜色
      active: false,
    };
  },

  //标签上的参数
  props: {
    label: {
      type: Boolean,
      default: false,
    },
    labelText: {
      type: String,
      default: "请输入用户名",
    },
  },
};
</script>

<style lang="scss" scoped></style>
