<template>
    <div>
        <h2>这是一个列表页</h2>
        <router-link :to="{name:'SubList1',params:{a:'Part-one'}}">SubList1</router-link>
        <router-link :to="{name:'SubList2',params:{b:'Part-two'}}">SubList2</router-link>
        <router-view></router-view>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>