<template>
  <div id="app">
    <keep-alive exclude="Details"><router-view></router-view></keep-alive>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import tabbar from './components/current/tabbar.vue'
  export default {
    components:{
      tabbar
    }
  }
</script>

<style>
  @import url("assets/css/init.css");
</style>
