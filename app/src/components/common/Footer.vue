<template>
    <div>
        <ul class="footer" :style="{'background':bg}">
            <li @click="$emit('change','#9fee8b','Movie')"><router-link to="/movie/movielist">电影</router-link></li>
            <li @click="$emit('change','rgb(38, 189, 216)','Music')"><router-link to="/music/musiclist">音乐</router-link></li>
            <li @click="$emit('change','#fccbaf','Book')"><router-link to="/book/booklist">书籍</router-link></li>
            <li @click="$emit('change','#e7cd57','Images')"><router-link to="/images/iamgeslist">图片</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['bg']
    }
</script>

<style scoped>
    .footer{
        display: flex;
        height: 1rem;
        line-height: 1rem;
        position: fixed;
        bottom: 0;    
        width: 100%;
    }
    .footer li{
        text-align: center;
        flex-grow: 1;
    }
    .footer a{
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #ffffff
    }
    .footer .router-link-active{
        text-shadow: #000 1px 1px 0;
        font-size: 0.4rem;
    }
</style>