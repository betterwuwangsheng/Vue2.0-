<template>
  <div id="login">
    <nav-bar />
    <page-title />
    <username-type />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import PageTitle from "./components/PageTitle";
import UsernameType from "./components/UsernameType";

export default {
  name: "Login",
  components: {
    NavBar,
    PageTitle,
    UsernameType,
  },
};
</script>

<style lang="scss" scoped></style>
