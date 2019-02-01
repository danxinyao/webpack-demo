<template>
	<div class="header">
		<router-link :to="item.path" v-for="item in menuList" :class="{ 'active' : $route.path == item.path}">{{item.name}}</router-link>
	</div>
</template>
<script>
	import index from './index'
	export default {
		...index
	}
</script>
<style lang="less" scoped>
	.header {
		width:  100%;
		height: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 3px solid #e6e6e6;
		a {
			display: inline-block;
			padding: 0 30px;
			color: #333;
			text-decoration: none;
			&:hover, &.active {
				color: red;
			}
		}
	}
</style>
