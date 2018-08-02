<template>
    <div>
        <div class="header" :style="{'background':bg}">
            <span class="header-home" @click="home()">首页</span>
            <span class="header-titlename">{{title}}</span>
            <span class="header-none"></span>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios'
    export default {
        props:['title','bg'],
        methods: {
            home(){
                this.$router.push('/')
            }
        }
    }
    
</script>

<style scoped>
.header{
    position: fixed;
    top:0px;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    display: flex;
}
.header-home,.header-none{
    color:#fff;
    font-size: 0.3rem;
    width: 1rem;
    text-indent: 0.2rem
}
.header-titlename{
    text-align: center;
    color: #fff;
    font-size: 0.5rem;
    flex-grow: 1;
    font-weight: bold;
    
}


</style>