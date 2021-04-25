<template>
  <div id="app">
    <router-view></router-view>
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
</style>
