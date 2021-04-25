<template>
  <div class="tabnav">
    <div class="navleft">
      <slot name="left"></slot>
    </div>
    <div class="navcenter">
      <slot name="center"></slot>
    </div>
    <div class="navright">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .tabnav {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 5px 6px #F3F3F3;
  }

  .navleft,
  .navright {
    width: 60px;
  }

  .navcenter {
    flex: 1;
  }
</style>
