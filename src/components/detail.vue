<template>
	<div class="home">
		我是新闻详情页
		<hr />
		参数：{{$route.params}}
		数据：{{$route.query}}
		路径：{{$route.path}}
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