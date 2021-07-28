<template>
  <div id="login">
    <nav-bar />
    <page-title />
    <username-type />

    <!-- 空隙占位 -->
    <div class="blank-10" />

    <username />
    <verification-code />
    <password />
    <confirm-password :inlineStyle="{ marginBottom: 0 }" />

    <!-- 空隙占位 -->
    <div class="blank-50" />
    <submit />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import Username from 'components/form/Username.vue';
import VerificationCode from 'components/form/VerificationCode.vue';
import Password from 'components/form/Password.vue';
import ConfirmPassword from 'components/form/ConfirmPassword.vue';
import Submit from 'components/form/Submit.vue';
import UsernameType from './components/UsernameType.vue';
import PageTitle from './components/PageTitle.vue';

export default {
  name: 'Login',
  components: {
    NavBar,
    PageTitle,
    UsernameType,
    Username,
    VerificationCode,
    Password,
    ConfirmPassword,
    Submit,
  },
};
</script>

<style lang="scss"></style>
