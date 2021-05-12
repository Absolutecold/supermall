<template>
  <div class="img" @click="topclick">
    <img src="../../../assets/img/common/top.png">
  </div>
</template>

<script>
  export default {
    methods: {
      topclick(){
        this.$emit("topclick")
      }
    },
  }
</script>

<style scoped>
  .img img{
    cursor: pointer;
    width: 40px;
    z-index: 99999;
    position: fixed;
    bottom: 65px;
    right: 10px;
  }
</style>
