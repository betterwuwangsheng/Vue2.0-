<template>
  <div class="form-item">
    <!-- @focus="" 获取焦点时事件 -->
    <button
      class="
        button-ui button-ui-block button-ui-round button-ui-main button-ui-large
      "
    >
      <span>重置密码</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Username",
  props: {},
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
