import Vue from 'vue'

import Vuex from 'vuex'; //引入并注册vuex
Vue.use(Vuex);

const state = {
	count:0
}
const actions = {
	increment:({
		commit,state 
	})=>{
			//处理加的请求
			commit('jia')
	},
	decrement:({
		commit,state 
	})=>{
			//处理加的请求
			commit('jian')
	},
	odd:({
		commit,state 
	})=>{
			//处理加的请求
			if(state.count %2==0){
	    		commit('jia')
			}
	}
}
const mutations = {
	jia(state){
		state.count++;
	},
	jian(state){
		state.count--;
	}
}
const getters = {
	Count(state){
	return	state.count
	}
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
});
