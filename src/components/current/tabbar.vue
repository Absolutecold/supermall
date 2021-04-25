<template>
	<barbox>
		<baritem path="/home" isstyle="blue">
			<img slot="img" src="../../assets/img/Tabbar/首页-选中.png">
			<img slot="activeimg" src="../../assets/img/Tabbar/redhome.png">
			<div slot="text">首页</div>
		</baritem>

		<baritem path="/fen" isstyle="blue">
			<img slot="img" src="../../assets/img/Tabbar/fen.png">
			<img slot="activeimg" src="../../assets/img/Tabbar/redfen.png">
			<div slot="text">分类</div>
		</baritem>

		<baritem path="/shopcat" isstyle="blue">
			<img slot="img" src="../../assets/img/Tabbar/购物车.png">
			<img slot="activeimg" src="../../assets/img/Tabbar/redcat.png">
			<div slot="text">购物车</div>
		</baritem>

		<baritem path="/my" isstyle="blue">
			<img slot="img" src="../../assets/img/Tabbar/my.png" />
			<img slot="activeimg" src="../../assets/img/Tabbar/redmy.png">
			<div slot="text">我的</div>
		</baritem>
	</barbox>
</template>

<script>
	import barbox from '../public/tabbarbox.vue'
	import baritem from '../public/tabbaritem.vue'
	export default{
		components:{
			barbox,
			baritem
		}
	}
</script>

<style>
</style>
