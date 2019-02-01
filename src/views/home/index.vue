<template>
  <div class="box">
    <div class="nav">我是首页1</div>
    <h2 class="title">我是列表页面啊</h2>
    <div class="content">
    	<div class="dan">我是内容</div>
    	<img src="~assets/images/logo.png" alt="">
    </div>
    <router-link :to="{ path: '/list'}" class="icon iconfont icon-icon_zhengquetishi">去list</router-link>
  </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
  .nav {
    color: red;
  }
  .content {
    .dan {
      color: red;
    }
  }
</style>
<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>
