<template>
  <div id="details">
    <topbar class="topbar"/>
    <better class="center" @scroll="scroll" :probe-type="3" ref="scroll">
      <div>
        <loop :imglist="topImages" />
        <basicdata :goodsdata="goods" />
        <shopdata :shopinfor="shops" />
        <detaInfo :detailInfo="detailInfo" @detaimgload="detaimgload"/>
        <degoods :paramInfo="param" />
        <deta-comment :commentInfo="comInfo"/>
      </div>
    </better>
    <gotop @topclick="topclick" v-show="isbool" />
  </div>
</template>

<script>
  import topbar from './detailschil/Topbar.vue'
  import loop from './detailschil/detailsloop.vue'
  import basicdata from './detailschil/basicdata.vue'
  import shopdata from './detailschil/shopdata.vue'
  import detaInfo from './detailschil/detaInfo.vue'
  import better from '../../components/public/betterscroll/scroll.vue'
  import gotop from '../../components/public/betterscroll/gotop.vue'
  import degoods from './detailschil/detailedgoods.vue'
  import detaComment from './detailschil/newscomment.vue'
  //商品详细的网络请求
  import {
    getdetails,
    Goods,
    Shop,
    GoodsParam
  } from '../../network/details.js'
  import{debounce} from '../../currency/debounce.js'

  export default {
    name: "Details",
    components: {
      topbar,
      loop,
      basicdata,
      shopdata,
      detaInfo,
      better,
      gotop,
      degoods,
      detaComment
    },
    data() {
      return {
        iid: '',
        topImages: [],
        goods: {},
        shops: {},
        detailInfo: {},
        isbool: false,
        param: {},
        comInfo:{},
        debounce:{},
        topbar:[]
      }
    },
    created() {
      this._getdetails()
    },
    mounted() {
      this.debounce=debounce(this.$refs.scroll.refresh,500)
    },
    methods: {
      _getdetails() {
        const iid = this.$route.params.iid
        this.iid = iid

        getdetails(iid).then(res => {
          console.log(res)
          const data = res.data.result
          //轮播图数据
          this.topImages = data.itemInfo.topImages
          //商品基本信息
          this.goods = new Goods(data.skuInfo, data.itemInfo, data.columns, data.shopInfo.services)
          console.log(this.goods)
          // console.log(this.goods)
          //商铺基本信息
          this.shops = new Shop(data.shopInfo)
          //商品图片
          this.detailInfo = data.detailInfo
          //尺寸相关
          this.param = new GoodsParam(data.itemParams.info, data.itemParams.rule)

          if (data.rate.list) {
            this.comInfo = data.rate.list[0];
          }
        })
      },
      topclick() {
        this.$refs.scroll.scrollTo(0, 0, 1000)
      },
      scroll(prs) {
        this.isbool = -(prs.y) >= 1000
      },
      detaimgload(){
        this.debounce()
      },
    }
  }
</script>

<style scoped>
  #details {
    position: relative;
    z-index: 999999;
    background-color: #fff;
    height: 100vh;
  }

  .topbar {
    position: relative;
    width: 100%;
    z-index: 9999;
  }

  .center {
    background-color: #FFFFFF;
    height: calc(100vh - 44px);
    overflow: hidden;
  }
</style>
