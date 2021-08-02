<template>
  <div class="account-layout">
    <div class="wrap-left">
      <div class="account-banner"></div>
    </div>
    <div class="wrap-right">
      <div class="accont-wrap">
        <div class="blank-150"></div>
        <username-type />
        <username :label="true" />
        <password :label="true" />

        <div class="blank-50"></div>
        <submit>
          <span>登录</span>
        </submit>
      </div>
    </div>
  </div>
</template>
<script>
import UsernameType from "project/common/account/components/UsernameType.vue";
import Username from "components/form/Username.vue";
import Password from "components/form/Password.vue";
import Submit from "components/form/Submit.vue";

export default {
  name: "Login",
  data() {
    return {};
  },
  components: {
    Username,
    Password,
    Submit,
    UsernameType,
  },
};
</script>
<style lang="scss" scoped></style>
