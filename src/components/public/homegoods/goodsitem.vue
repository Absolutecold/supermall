<template>
  <div class="goodsitem">
    <div class="_img"><img :src="goodsitem.show.img" @load="imgload" @click="details"></div>
     <p class="title">{{goodsitem.title}}</p>
     <span class="price">{{goodsitem.price}}</span>
     <img src="../../../assets/img/home/收藏.png" />
    <span>{{goodsitem.sale}}</span>
  </div>
</template>

<script>
  export default {
    props:{
      goodsitem:Object
    },
    methods: {
      imgload(){
        this.$bus.$emit('imgload')
      },
      details(){
        this.$router.push('/details/'+this.goodsitem.iid)
      }
    },
  }
</script>

<style scoped>
  /* ._goodslist{
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-around;
  } */


  .goodsitem{
    width: 45%;
    font-size: 14px;
    border: 1px solid #ababab;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 8px;
    transition: all 0.8s;
  }
  .goodsitem:hover{
    transform: translateY(-4px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
  .title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
  }
  ._img img{
    width: 100%;
  }
  .price{
    color: red;
  }
</style>
