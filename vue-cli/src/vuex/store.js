import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count: 1
};

const mutations = {
    add(state,num){
        state.count += num;           //  mutations修改状态传值
    },
    reduce(state){
        state.count--;
    }
};

export default new Vuex.Store({
    state,
    mutations
})