<template>
  <div id="app">
    <h1>{{msg}}</h1>
       <hr />
 		<router-link to="/home">首页</router-link>
 		<router-link to="/news">新闻</router-link>
 		<router-link to="/user">用户</router-link>
 		<!--<transition
 			enter-active-class="animated fadeIn"
 			leave-active-class="animated fadeOut"
 			>
 			<router-view class="appview"></router-view>
 		</transition>-->
 		<router-view></router-view>
 		<h1>vuex</h1>
 		<input type="button" name="" id="" value="+" @click="increment" />
 		<input type="button" name="" id="" value="-" @click="decrement" />
 	  <input type="button" name="" id="" value="偶数+" @click="odd" />
 		{{Count}}
    
 
  </div>
</template>

<script>
	import {mapActions,mapGetters} from 'vuex';
	//mapActions  发请求
	//mapGetters  收状态
	
	import home from './components/home.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'VueCli+Router',
 //     count:0
    }
  },
  methods:mapActions(
  	['increment','decrement','odd']
  ),
  computed:mapGetters(
  	['Count']
  ),
  components:{
  	home
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.appview{
	position: absolute;
}
</style>
