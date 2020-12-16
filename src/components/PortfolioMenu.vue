<template>
  <div class="menu">
    <div class="menu-content">
      <div class="menu-box menu-top-left"></div>
      <div class="menu-box menu-top-center"></div>
      <div class="menu-box menu-top-right"></div>
      <div class="menu-box menu-center-left"></div>
      <div class="menu-box"></div>
      <div class="menu-box menu-center-right"></div>
      <div class="menu-box menu-bottom-left"></div>
      <div class="menu-box menu-bottom"></div>
      <div class="menu-box menu-bottom-right"></div>
      <div class="menu-box menu-center">
        <g-image class="image-center-top-left" src="@/assets/darios-top-left.png"></g-image>
        <g-image class="image-center-top" src="@/assets/darios-top.png"></g-image>
        <g-image class="image-center-top-right" src="@/assets/darios-top-right.png"></g-image>
        <g-image class="image-center-left" src="@/assets/darios-left.png"></g-image>
        <g-image class="image-center-right" src="@/assets/darios-right.png"></g-image>
        <g-image class="image-center-bottom-left" src="@/assets/darios-bottom-left.png"></g-image>
        <g-image class="image-center-bottom" src="@/assets/darios-bottom.png"></g-image>
        <g-image class="image-center-bottom-right" src="@/assets/darios-bottom-right.png"></g-image>
        <g-image class="image-center-normal" src="@/assets/darios-center.png"></g-image>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .menu {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    height: 600px;
  }

  .menu-content {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: $gutter-small;
    grid-row-gap: $gutter-large;
    position: absolute;
    padding: $gutter-large;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .menu-box {
    width: 120px;
    height: 120px;
    border: 10px solid $color-blue-light;
    background-color: $color-black;
    cursor: pointer;
  }

  .image-center-top-left, .image-center-top, .image-center-top-right, .image-center-left, .image-center-right,
  .image-center-bottom-left, .image-center-bottom, .image-center-bottom-right  {
    display: none;
  }

  .image-center-normal {
    display: block;
  }

  .menu-box:hover {
    border: 10px solid $color-red;
  }

  .menu-center {
    position: absolute;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .menu-top-center:hover .menu-center,  .menu-top-center:hover ~ .menu-center{
    .image-center-top { display: block; }
    .image-center-normal { display: none; }
  }

  .menu-top-left:hover .menu-center,  .menu-top-left:hover ~ .menu-center{
    .image-center-top-left { display: block; }
    .image-center-normal { display: none; }
  }

  .menu-top-right:hover .menu-center, .menu-top-right:hover ~ .menu-center{
    .image-center-top-right { display: block; }
    .image-center-normal { display: none; }
  }

  .menu-center-left:hover .menu-center, .menu-center-left:hover ~ .menu-center{
    .image-center-left { display: block; }
    .image-center-normal { display: none; }
  }

  .menu-center-right:hover .menu-center, .menu-center-right:hover ~ .menu-center{
    .image-center-right { display: block; }
    .image-center-normal { display: none; }
  }

  .menu-bottom-left:hover .menu-center, .menu-bottom-left:hover ~ .menu-center{
    .image-center-bottom-left { display: block; }
    .image-center-normal { display: none; }
  }

  .menu-bottom:hover .menu-center, .menu-bottom:hover ~ .menu-center{
    .image-center-bottom { display: block; }
    .image-center-normal { display: none; }
  }

  .menu-bottom-right:hover .menu-center, .menu-bottom-right:hover ~ .menu-center{
    .image-center-bottom-right { display: block; }
    .image-center-normal { display: none; }
  }

</style>
