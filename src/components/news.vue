<template>
	<div class="home">
		我是news页
		<hr />
		<router-link to = "/news/detail/001">新闻详情页1</router-link>
		<router-link to = "/news/detail/002?a=11&b=12">新闻详情页2</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				msg:'bmw'
			}
		}
	}
</script>

<style>
	.home{
		
	}
</style>