<template>
	<div id="nav">
		<slot></slot>
	</div>
</template>

<script>
  export default{
    name:"tabbarbox"
  }
</script>

<style scoped>
  #nav {
    display: flex;
    flex: 1;
    z-index: 9999;
    height: 49px;
    width: 100%;
    background-color: #f6f6f6;
    box-shadow: 0 5px 10px #000;
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>
