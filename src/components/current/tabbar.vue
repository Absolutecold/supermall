<template>
  <barbox>
    <baritem path="/home" isstyle="blue">
      <img slot="img" src="../../assets/img/Tabbar/首页-选中.png">
      <img slot="activeimg" src="../../assets/img/Tabbar/redhome.png">
      <div slot="text">首页</div>
    </baritem>

    <baritem path="/fen" isstyle="blue">
      <img slot="img" src="../../assets/img/Tabbar/fen.png">
      <img slot="activeimg" src="../../assets/img/Tabbar/redfen.png">
      <div slot="text">分类</div>
    </baritem>

    <baritem path="/shopcat" isstyle="blue">
      <img slot="img" src="../../assets/img/Tabbar/购物车.png">
      <img slot="activeimg" src="../../assets/img/Tabbar/redcat.png">
      <div slot="text">购物车</div>
    </baritem>

    <baritem path="/my" isstyle="blue">
      <img slot="img" src="../../assets/img/Tabbar/my.png" />
      <img slot="activeimg" src="../../assets/img/Tabbar/redmy.png">
      <div slot="text">我的</div>
    </baritem>
  </barbox>
</template>

<script>
  import barbox from '../public/tabbar/tabbarbox.vue'
  import baritem from '../public/tabbar/tabbaritem.vue'
  export default {
    components: {
      barbox,
      baritem
    },
    name:"tabbar"
  }
</script>

<style scoped>
  .box {
    flex: 1;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    
  }

  .box img {
    width: 24px;
    vertical-align: middle;
    margin-top: 4px;
  }

  .active {
    color: red;
  }
</style>
