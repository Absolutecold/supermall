<template>
  <div class="recom">
    <slot name="item"></slot>
  </div>
</template>

<script>
  export default{
    name:"recommend",

  }
</script>

<style>
.recom{
    display: flex;
    flex: 1;
    justify-content: space-around;
  }
</style>
