<template>
  <div class="form-item">
    <div class="form-body" :class="{ active: active }">
      <div class="pr">
        <!-- @focus="" 获取焦点时事件 -->
        <van-field
          :type="value_type"
          @focus="active = true"
          @blur="active = false"
          v-model="username"
          :error="error"
          placeholder="请输入密码"
        />

        <div class="field-right-inner">
          <i
            class="icon icon-size-27"
            @click="toggleType"
            :class="value_type === 'password' ? 'icon-eye-on' : 'icon-eye-off'"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Password",
  data() {
    return {
      username: "123456",
      error: false,

      // 默认为 password
      value_type: "password",
      // 点击时修改颜色
      active: false,
    };
  },
  methods: {
    // 切换输入框类型
    toggleType() {
      this.value_type = this.value_type === "password" ? "text" : "password";
    },
  },
};
</script>

<style lang="scss" scoped>
//  浮动到右边
.field-right-inner {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
