<template>
	<div id="Home">
    <tabnav class="_homenav">
      <div slot="center">购物街</div>
    </tabnav>
  </div>
</template>

<script>
  import tabnav from '../../components/public/tabnav.vue'
  export default{
    components:{
      tabnav
    }
  }
</script>

<style>
  ._homenav{
    background-color: rgb(255,142,150);
    color: #F6F6F6;
  }
</style>
