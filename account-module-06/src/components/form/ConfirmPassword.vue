<template>
  <div class="form-item" :style="inlineStyle">
    <div class="form-body" :class="{ active: active }">
      <div class="pr">
        <!-- @focus="" 获取焦点时事件 -->
        <van-field
          :type="value_type"
          @focus="active = true"
          @blur="active = false"
          v-model="username"
          :error="error"
          placeholder="请再次输入密码"
        />

        <div class="field-right-inner">
          <i class="icon" @click="toggleType">
            <svg-icon
              :icon-class="value_type === 'password' ? 'eyeOff' : 'eye'"
              class-name="svg-icon-24 svg-icon-password"></svg-icon>
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmPassword',
  props: {
    inlineStyle: {
      type: Object,
      default() {},
    },
  },
  data() {
    return {
      username: '123456',
      error: false,

      // 默认为 password
      value_type: 'password',
      // 点击时修改颜色
      active: false,
    };
  },
  methods: {
    // 切换输入框类型
    toggleType() {
      this.value_type = this.value_type === 'password' ? 'text' : 'password';
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
