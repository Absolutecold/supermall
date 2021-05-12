<template>
  <div class="basicdata">
    <div class="head">
      <p class="title">{{goodsdata.title}}</p>
      <span class="price">{{goodsdata.price}} </span>
      <span class="oldprice">{{goodsdata.oldPrice}}</span>
      <span class="discount" :style="{backgroundColor:goodsdata.discountBgColor}">{{goodsdata.discountDesc}}</span>
    </div>
    <div class="center">
      <span class="flexlist">{{ceone()}}</span>
      <span class="flexlist">{{cetwo()}}</span>
      <span class="flexlist">退货补运费</span>
    </div>
    <div class="bottom">
      <span>{{boone()}}</span>
      <span class="boright">{{botwo()}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "basicdata",
    props: {
      goodsdata: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods:{
      ceone() {
        console.log(this.goodsdata)
        return this.goodsdata.columns[0]
      },
      cetwo() {
        return this.goodsdata.columns[1]
      },
      boone(){
        if(this.goodsdata.services[0].name){
          return this.goodsdata.services[0].name
        }
      },
      botwo(){
        if(this.goodsdata.services[1].name){
          return this.goodsdata.services[1].name
        }
      }
    }
  }
</script>

<style scoped>
  .head {
    width: 100%;
    padding-top: 10px;
  }

  .title {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .price {
    font-size: 25px;
    color: rgb(203, 92, 155);
  }

  .oldprice {
    font-size: 14px;
    color: #ABABAB;
    text-decoration: line-through;
  }

  .discount {
    color: #F6F6F6;
    border-radius: 8px;
    padding: 0 5px;
    position: relative;
    top: -8px;
    left: 8px;
  }

  .center {
    display: flex;
    flex: 1;
    justify-content: space-around;
    width: 92%;
    margin: 0 4%;
    margin-top: 30px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ABABAB;
  }

  .flexlist {
    display: flex;
    flex: 1;
    justify-content: space-around;
    color: #ABABAB;
  }

  .bottom{
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: 5px solid #eaeaea;
    padding-bottom: 20px;
  }
  .bottom:nth-child(2n+1){
    text-indent: 1rem;
    font-size: 20px;
  }
  .boright{
    float: right;
    margin-right: 1.5rem;
  }
</style>
