<template>
  <div>
    <tabnav>
      <div slot="left" @click="topback" class="left">&lt;</div>
      <div class="title" slot="center">
        <span
        class="title"
        v-for="(item,index) in tiltes"
        :key="index"
        @click="titleclick(index)"
        :class="{show:istitle(index)}"
        >{{item}}</span>
      </div>
    </tabnav>
  </div>
</template>

<script>
  import tabnav from '../../../components/public/tabnav.vue'
  export default {
    data(){
      return {
        tiltes:['商品','参数','评论','推荐'],
        titleflag:0
      }
    },
    components:{
      tabnav
    },
    methods:{
      titleclick(index){
        this.titleflag=index
        this.$emit('titleclick',index)
      },
      istitle(index){
        return this.titleflag==index
      },
      topback(){
        this.$router.back()
      }
    },
    computed:{
    }
  }
</script>

<style scoped>
  .title{
    display: flex;
    flex: 1;
    justify-content: space-around;
  }
  .show{
    color: #ec4e00;
  }
  .left{
    font-size:40px;
  }
</style>
