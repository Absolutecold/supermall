<template>
  <div class="recommendnav">
    <recomd>
      <recomditem v-for="(item,index) in recomdlist" slot="item" :key="index">
        <a slot="img" :href="item.link"><img :src="item.image" ></a>
        <span slot="title">{{item.title}}</span>
      </recomditem>
    </recomd>
  </div>
</template>

<script>
  import recomd from './recommend.vue'
  import recomditem from './reconitem.vue'
  export default {
    data(){
      return {

      }
    },
    components:{
      recomd,
      recomditem
    },
    computed:{

    },
    props:{
      recomdlist:Array
    }
  }
</script>

<style scoped>
  .recommendnav{
    padding: 15px 0 25px 0;
    border-bottom: 10px solid #ebebeb;
  }
</style>
