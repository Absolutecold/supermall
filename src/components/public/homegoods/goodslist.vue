<template>
  <div class="_goodslist">
    <goodsitem v-for="(item,index) in goodslist" :goodsitem="item" :key="index"></goodsitem>
  </div>
</template>

<script>
  import goodsitem from './goodsitem.vue'

  export default{
    name:'goodslist',
    props:{
      goodslist:Array
    },
    components:{
      goodsitem
    },
  }
</script>

<style scoped>
  ._goodslist{
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
