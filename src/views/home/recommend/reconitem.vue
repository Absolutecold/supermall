<template>
  <div class="recomitem">
    <div class="img"><slot name="img"></slot></div>
    <div class="_title"><slot name="title"></slot></div>
  </div>
</template>

<script>
	export default{
		name:"reconitem",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
  .recomitem{
    width: 80px;
    text-align: center;
  }
  .recomitem img{
     width: 80px;
  }
  ._title{
    margin-top: 5px;
  }
</style>
