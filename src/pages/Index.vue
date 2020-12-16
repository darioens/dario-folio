<template>
  <portfolio-layout>
    <div class="content">
      <portfolio-menu></portfolio-menu>
    </div>
  </portfolio-layout>
</template>

<script>
  export default {
    metaInfo() {
      return {
        title: 'Daríos',
      }
    }
  }
</script>


<style lang="scss" scoped>
  .content {
    background-color: $color-blue;
  }
</style>
