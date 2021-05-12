<template>
  <div class="loopimg" @mouseover="enter()" @mouseleave="leave()">
    <p class="left" :class="{show:bool}" @click="jian">&lt;</p>
    <p class="right" :class="{show:bool}" @click="jia">></p>
    <loopitem :href="href" :src="src"/>
    <div class="dot">
      <span class="yuan" v-for="(item,index) in lilength" :class="{active:dotcli(index)}" @click="dotclice(index)"
        :key="index"></span>
    </div>
  </div>
</template>

<script>
  import loopitem from './loopimgitem.vue'
  export default {
    components: {
      loopitem,
    },
    name: "loopimg",
    data() {
      return {
        subscript: 0,
        bool: false,
        automatic: 0,
        isload:false
      }
    },
    props: {
      imglist: Array,
    },
    created() {
      (() => {
        this.automatic = setInterval(() => {
          this.subscript++
          if (this.lilength == this.subscript) {
            this.subscript = 0
          }
        }, 2000)
      })()
    },
    computed: {
      lilength() {
        return this.imglist.length
      },
      href() {
        if(this.imglist[this.subscript].link){
          return this.imglist[this.subscript].link
        }
        return "#"
      },
      src() {
        return this.imglist[this.subscript].image
      }
    },
    methods: {
      loadimg(){
        if(!this.isload){
          this.$emit("loadimg")
          this.isload=true
        }
      },
      dotcli(index) {
        return this.subscript == index
      },
      dotclice(index) {
        this.subscript = index
      },
      enter() { //移入
        clearInterval(this.automatic);
        this.bool = !this.bool
      },
      leave() { //移出
        this.automatic = setInterval(() => {
          this.subscript++
          if (this.lilength == this.subscript) {
            this.subscript = 0
          }
        }, 2000)
        this.bool = !this.bool
      },
      jian() {
        if (this.subscript == 0) {
          this.subscript = this.lilength
        }
        this.subscript--
      },
      jia() {
        this.subscript++
        if (this.lilength == this.subscript) {
          this.subscript = 0
        }
      }
    }
  }
</script>

<style scoped>
  .loopimg {
    position: relative;
    width: 100%;
    height: 150px;
    overflow: hidden;
  }

  .left,
  .right {
    width: 30px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    background-color: #333;
    color: white;
    font-size: 18px;
    z-index: 99;
    cursor: pointer;
    display: none;
    user-select: none;
  }

  .left {
    position: absolute;
    left: 0;
    top: 35px;
  }

  .right {
    position: absolute;
    right: 0;
    top: 35px;
  }

  .dot {
    position: absolute;
    bottom: 5px;
    left: 42%;
  }

  .yuan {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #dfdfdf;
    margin-left: 3px;
  }

  .active {
    border: 1px solid #ffff00;
    background-color: #ffff00;
  }

  .show {
    display: inline-block;
  }
</style>
