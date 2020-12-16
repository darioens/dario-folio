<template>
  <default-layout>
    <portfolio-page>
      <slot></slot>
    </portfolio-page>
  </default-layout>
</template>

<style lang="scss" scoped>
.menu-link {
  width: 100%;
  height: 100%;

  a:link, a:visited {
    text-decoration: none;
    color: $color-blue;
    cursor: pointer;
    font-weight: bold;
  }

  &:hover > .menu {
    @include respond-to("large and up") {
      display: block;
    }
  }
}

.page {
  margin-top: 0;
  height: 0;
}

.logo {
  width: 80px;
  height: 40px;
}
</style>
<script>
  import DefaultLayout from "./DefaultLayout";
  export default {
    components: {DefaultLayout}
  }
</script>
