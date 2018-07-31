<template>
    <div>
        <h2>这是一个首页</h2>
        <h1>计数器：{{$store.state.count}}</h1>
        <button @click="$store.commit('add',1)">加一</button>   <!-- mutations修改状态传值 -->
        <button @click="$store.commit('reduce')">减一</button>
    </div>
</template>

<script>
import store from '@/vuex/store'
    export default {
        data(){
            return{};
        },
        store
    }
</script>

<style scoped>

</style>