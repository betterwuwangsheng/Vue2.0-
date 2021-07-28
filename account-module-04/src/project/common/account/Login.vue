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
import NavBar from "components/common/navbar/NavBar";
import PageTitle from "./components/PageTitle";
import UsernameType from "./components/UsernameType";
import Username from "components/form/Username";
import VerificationCode from "components/form/VerificationCode";
import Password from "components/form/Password";
import ConfirmPassword from "components/form/ConfirmPassword";
import Submit from "components/form/Submit";

export default {
  name: "Login",
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
