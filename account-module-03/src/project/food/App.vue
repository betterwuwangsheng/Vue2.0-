<template>
  <div id="app">
    <login />
    <router-view />
  </div>
</template>

<script>
import Login from "project/common/account/Login";

export default {
  name: "App",
  components: {
    Login,
  },
};
</script>

<style lang="scss">
#app {
}
</style>
