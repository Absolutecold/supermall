<template>
	<div class="box" @click="chilclik">
		<div v-if="!isactive">
			<slot name="img"></slot>
		</div>
		<div v-else>
			<slot name="activeimg"></slot>
		</div>
		<div :style="actvieStyle">
			<slot name="text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			path: String,
			itemStyle: {
				type: String,
				default:"red"
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			chilclik() {
				this.$router.replace(this.path).catch(err => err)
			}
		},
		computed: {
			isactive() {
				return this.$route.path.indexOf(this.path) !== -1
			},
			actvieStyle() {
				return this.isactive ? {
					color: this.itemStyle
				} : {}
			}
		}

	}
</script>

<style>
	.box {
		flex: 1;
		text-align: center;
		cursor: pointer;
		font-size: 14px;
	}

	.box img {
		width: 24px;
		vertical-align: middle;
		margin-top: 4px;
	}

	.active {
		color: red;
	}
</style>
