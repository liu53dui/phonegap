<template>
	<div class="home">
		我是home页
		数据：{{msg}}
		<br />
		<input type="button" name="" id="" value="去登录页" @click="show" />
	</div>
</template>

<script>
	export default {
		data(){
			return{
				msg:'bmw'
			}
		},
		methods:{
			show(){
				alert('ok');
				this.$router.replace({path:'/user/login'});
			}
		}
	}
</script>

<style>
	.home{
		
	}
</style>