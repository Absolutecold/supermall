<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
	export default {
		name: "Scroll",
    props: {
		  probeType: {
		    type: Number,
        default: 1
      },
      Load: {
		    type: Boolean,
        default: false
      },
      data:Array
    },
    data(){
      return {
        scroll:null
      }
    },
    mounted() {
		  setTimeout(this.__initScroll, 2000)
    },
    methods: {
		  __initScroll() {
		    if (!this.$refs.wrapper) return
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click:true,
          // bounce: false,//设置关闭弹性效果
          pullUpLoad:this.Load,
          mouseWheel:true//pc端滑轮滚动
        })
        // 滚动事件
        if(this.probeType!=0||this.probeType!=1){
          this.scroll.on('scroll', pos => {
            this.$emit('scroll', pos)
          })
        }
        //上拉加载事件
        if(this.Load){
          this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
          })
        }
      },
      refresh() {//刷新
        this.scroll && this.scroll.refresh()
      },
      scrollTo(x,y,date){
        this.scroll && this.scroll.scrollTo(x,y,date)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      }
    },
    watch: {
		  data() {
        setTimeout(this.refresh, 100)
      }
    }

	}
</script>

<style scoped>
</style>
