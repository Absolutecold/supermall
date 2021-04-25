<template>
	<div class="nav">
		<slot></slot>
	</div>
</template>

<script>
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.nav {
		display: flex;
		flex: 1;
		height: 49px;
		width: 100%;
		background-color: #f6f6f6;
		box-shadow: 0 5px 10px #000;
		position: fixed;
		bottom: 0;
		left: 0;
	}
</style>
