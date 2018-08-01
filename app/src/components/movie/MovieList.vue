<template>
    <div>
        <ul>
             <li class="movieList" v-for="(obj,index) in movieList" :key="index">
                <div class="movie-img">
                    <img :src="obj.img" alt="">
                </div>
                <div class="movie-info">
                    <h3>{{obj.nm}}</h3>
                    <p>{{obj.ver}}</p> 
                    <p>{{obj.cat}}</p>
                    <p>主演：{{obj.star}}</p>
                    <p class="showinfo">{{obj.showInfo}}</p>
                </div>
            </li>
        </ul>

        <div>
            <img class="loading" src="@/assets/loading.gif" alt="" v-show="isShow">
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    export default {
       data(){
            return{
               movieList: [],
               isShow:false,
               resultLength:0
            }
       },
       methods: {
            load(){
                axios.get(`../static/data/moviedata${this.movieList.length}.json`).then(res =>{
                    this.resultLength = res.data.data.movies.length;
                    this.movieList = this.movieList.concat(res.data.data.movies);
                }).catch(res => {
                    console.log('获取数据失败');
                });
                    this.isShow = false;
                
            }
       },
       created() {
        this.load();
        
        window.onscroll = () => {
            //取出滚动条滚动出去的高度
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(scrollTop)
            //页面的可视高度
            let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
            // console.log(clientHeight)            
            //整个页面的高度
            let height = document.documentElement.scrollHeight || document.body.scrollHeight;
            // console.log(height)

            if(scrollTop + clientHeight >= height -1){
                
                if(this.resultLength == 10){
                    this.isShow = true;
                    this.load();
                }
            }
            
            
        }

       }
       

       
    }
</script>

<style scoped>
.movieList{
    display: flex;
    padding: 0.2rem;
    font-size: 14px;
    line-height: 1.8;
    border-bottom: 1px #ccc solid;
}
.movie-img{
    flex-grow: 1;
    width: 0;
    margin-right: 0.1rem;
}
.movie-info{
    flex-grow: 2;
    width: 0;
}
.movie-img img{
    width: 100%;
}
.showinfo{
    color: #ccc;
}
.loading{
    display: block;
    margin: 0 auto;
}
</style>