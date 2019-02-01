<template>
	<div id="app">
		<pg-header></pg-header>
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	name: 'app',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	}
}

</script>