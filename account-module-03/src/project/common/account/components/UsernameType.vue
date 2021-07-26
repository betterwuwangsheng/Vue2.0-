<template>
  <ul class="username-type-tag">
    <li>
      <i class="icon icon-size-18 icon-mb--4"></i>
      手机
    </li>
    <li class="username-type-tag">
      <i class="icon icon-size-18 icon-mb--4"></i>
      邮箱
    </li>
  </ul>
</template>

<script>
export default {
  name: "UsernameType",
};
</script>

<style lang="scss" scoped>
.username-type-tag {
  text-align: right;
  li {
    display: inline-block;
    margin-left: 15px;
    padding: 7px 15px 6px 13px;
    border-radius: 100px;
    background-color: #ffffff;
    font-size: 14px;
    line-height: 18px;
    color: #ccc;
  }
}
</style>
