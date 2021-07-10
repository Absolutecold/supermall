<template>
  <div id="Home">
    <tabnav class="_homenav">
      <div slot="center">购物街</div>
    </tabnav>
    <scroll :probe-type="3" @scroll="scroll" class="center" :Load="true" @pullingUp="pullingUp" :data="type"
      ref="scroll">
      <div>
        <loopimg v-if="loopimg.length>0" :imglist="loopimg" />
        <reconnav v-if="recommend.length>0" :recomdlist="recommend" />
        <popular />
        <tabcontrol :titles="title" @typeclick="typeclick" />
        <goodslist :goodslist="type"></goodslist>
      </div>
    </scroll>
    <gototop @topclick="gotoclick" v-show="isbool"></gototop>
  </div>
</template>

<script>
  //组件引用
  import tabnav from '../../components/public/tabnav.vue'
  import loopimg from '../../components/public/loopimg.vue'
  import reconnav from './recommend/recommendnav.vue'
  import popular from './tabpopular.vue'
  import tabcontrol from './tabcontrol.vue'
  import goodslist from '../../components/public/homegoods/goodslist.vue'
  import scroll from '../../components/public/betterscroll/scroll.vue'
  import gototop from '../../components/public/betterscroll/gotop.vue'

  //网络请求
  import {
    gethome,
    homegoods
  } from "../../network/home.js"
  import {
    debounce
  } from '../../currency/debounce.js'
  export default {
    components: {
      tabnav,
      loopimg,
      reconnav,
      popular,
      tabcontrol,
      goodslist,
      scroll,
      gototop
    },
    data() {
      return {
        loopimg: [],
        recommend: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        goodsindex: "pop",
        title: ['流行', '新款', '精选'],
        isbool: false,
        controltop: 0,
        isfixe: false,
        scrollTop: 0
      }
    },
    created() {
      this.gethome(),
        this.homegoods('pop'),
        this.homegoods('new'),
        this.homegoods('sell')
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 500)
      this.$bus.$on('imgload', () => {
        refresh()
      })
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.scrollTop, 1000)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.scrollTop = this.$refs.scroll.scroll.y
    },
    methods: {
      gethome() {
        gethome().then(res => {
          this.loopimg = res.data.data.banner.list
          this.recommend = res.data.data.recommend.list
        })
      },
      homegoods(type) {
        const page = this.goods[type].list.page + 1
        homegoods(type, page).then(res => {
          for (let i = 0; i < res.data.data.list.length; i++) {
            this.goods[type].list.push(res.data.data.list[i])
          }
          this.goods[type].list.page += 1
          this.$refs.scroll.finishPullUp()
        })
      },
      pullingUp() {
        this.homegoods(this.goodsindex)
      },
      typeclick(index) {
        const typelist = ['pop', 'new', 'sell']
        this.goodsindex = typelist[index]
      },
      scroll(positon) {
        this.isbool = -(positon.y) > 1000
        this.isfixe = -(positon.y) > this.controltop
      },
      gotoclick() {
        this.$refs.scroll.scrollTo(0, 0, 1000)
      }
    },
    computed: {
      type() {
        return this.goods[this.goodsindex].list
      },
    }
  }
</script>

<style scoped>
  #Home {
    padding-bottom: 49px;
  }

  ._homenav {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
    background-color: rgb(255, 142, 150);
    color: #F6F6F6;
  }

  .fiexd {
    position: relative;
    top: 44px;
  }

  .center {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
