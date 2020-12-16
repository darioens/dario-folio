<template>
  <div class="base-layout">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .base-layout {
    display: grid;
    // this is due to the fixed header for all pages
    grid-template-rows: 1fr min-content;
    min-height: 100%;
  }
</style>
