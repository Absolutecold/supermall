<template>
  <div class="control">
    <p
    v-for="(item,index) in titles"
    :key="index"
    @click="controlcllick(index)"
    :class="{show:controbool(index)}"
    >{{item}}</p>
  </div>
</template>

<script>
  export default{
    name:"tabcontrol",
    data(){
      return {
        numflag:0
      }
    },
    props:{
      titles:Array
    },
    computed:{
    },
		methods:{
      controbool(index){
        return this.numflag==index
      },
      controlcllick(index){
        this.numflag=index
        this.$emit('typeclick',index)
      }
		}
  }
</script>

<style scoped>
  .control{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    flex: 1;
    z-index: 99;
    background-color: #ffffff;
    justify-content: space-around;
    cursor: pointer;
  }
  .show{
    padding-bottom: 10px;
    border-bottom: 3px solid #ff5500;
  }

</style>
