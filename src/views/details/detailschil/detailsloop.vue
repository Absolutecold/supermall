<template>
  <div class="loopimg">
    <img :src="src" @load="loadimg"/>
    <div class="dot">
      <span class="yuan" v-for="(item,index) in lilength" :class="{active:dotcli(index)}" @click="dotclice(index)" :key="index"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loopimg",
    data() {
      return {
        subscript: 0,
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
      src() {
        return this.imglist[this.subscript]
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
    }
  }
</script>

<style scoped>
  .loopimg {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }

  .dot {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 5px;
  }

  .yuan {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #dfdfdf;
    margin-left: 5px;
  }

  .active {
    border: 1px solid #ffff00;
    background-color: #ffff00;
  }
</style>
