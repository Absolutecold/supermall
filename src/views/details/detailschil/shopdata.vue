<template>
  <div class="shopdata">
    <div class="top">
      <img :src="shopinfor.logo">
      <span class="ttext">{{shopinfor.name}}</span>
    </div>
    <div class="center">
      <div class="celeft">
        <p class="sales">{{shopinfor.sells|showsells}}<br>总销量</p>
        <p class="baby">{{shopinfor.goodsCount}}<br>全部宝贝</p>
      </div>
      <div class="ceright">
        <p v-for="(item,index) in shopinfor.score" :key="index">
          <span>{{item.name}}&nbsp;</span>
          <span class="hidcolor" :class="{showcolor:item.isBetter}">{{tescore(index)}}&nbsp;</span>
          <span class="hidbg" :class="{showbg:item.isBetter}">{{item.isBetter?"高":"低"}}</span>
        </p>
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      shopinfor: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    filters: {
      showsells(sells) {
        return (sells / 10000).toFixed(1) + "万"
      }
    },
    methods: {
      tescore(index) {
        return this.shopinfor.score[index].score.toFixed(2)
      }
    }
  }
</script>

<style scoped>
  .top {
    margin-top: 20px;
    margin-left: 15px;
    line-height: 60px;
  }

  .top img {
    width: 60px;
    border: #ABABAB solid 1px;
    box-shadow: 1px 1px 3px #ABABAB;
    border-radius: 50%;
  }

  .ttext {
    font-size: 20px;
    position: relative;
    top: -20px;
    left: 8px;
  }

  .center {
    height: 90px;
    position: relative;
  }

  .celeft {
    width: 50%;
    line-height: 25px;
    border-right: 1px dotted #ABABAB;
    display: inline-block;
    display: flex;
    flex: 1;
    justify-content: space-around;
    margin: 20px 0;
  }

  .sales,
  .baby {
    display: inline-block;
    text-align: center;
  }

  .ceright {
    line-height: 35px;
    position: absolute;
    right: 20px;
    top: -30px;
  }

  .hidcolor{
    color: green;
  }

  .showcolor{
    color: red;
  }

  .hidbg{
    color: white;
    background-color: green;
  }

  .showbg{
    color: white;
    background-color: red;
  }
</style>
