<template>
  <div>
    <a :href="href"><img :src="src" ></a>
  </div>
</template>

<script>
  export default{
    name:"item",
    data(){
      return {
      }
    },
    props:{
      href:{
        type:String,
        default(){
          return "#"
        }
      },
      src:String
    }
  }
</script>

<style scoped>
  img{
    width: 100%;
  }
</style>
