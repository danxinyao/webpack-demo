<template>
  <div class="box">
    <h2 class="title">我是列表页面啊</h2>
    <router-link :to="{ path: '/detail'}">detail</router-link>
    <img src="~assets/images/logo.png">
  </div>
</template>
<style type="text/css" scoped>
    .title {
        color: green;
    }
</style>
<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>
