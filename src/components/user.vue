<template>
	<div class="home">
		我是user页
		<hr />
		<router-link to="/user/login">登录</router-link>
		<router-link to="/user/reg">注册</router-link>
		<transition
			enter-active-class="animated bounceInLeft"	
			leave-active-class="animated bounceOutLeft"	
		>
			<router-view></router-view>
		</transition>
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