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
    flex: 1;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .navleft,
  .navright {
    width: 60px;
  }

  .navcenter{
    flex: 1;
  }

</style>
