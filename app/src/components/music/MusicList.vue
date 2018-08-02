<template>
    <div class="musiclist">
        <img :src="'/'+obj.bg" alt="" v-for="(obj,index) in musicList" :key="index" @click="tomusicdetail(obj.id)">
        <!-- <ul class="musiclist">
            <li><img src="../../../static/img/soar_music.jpg" alt=""></li>
            <li><img src="../../../static/img/new_music.jpg" alt=""></li>
            <li><img src="../../../static/img/original_music.jpg" alt=""></li>
            <li><img src="../../../static/img/ktv_music.jpg" alt=""></li>
            <li><img src="../../../static/img/chinese_music.jpg" alt=""></li>
            <li><img src="../../../static/img/my_music.jpg" alt=""></li>
        </ul> -->
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                musicList:[]
            }
        },
        created() {
            axios.get('../static/data/musiclist.json').then(res => {
                this.musicList = res.data.albums;
                console.log(res.data.albums);
            }).catch(res => {
                console.log('获取失败')
            })
        },
        methods:{
            tomusicdetail(id){
                this.$router.push(`/music/musicdetail/${id}`);
            }
        }
        }
        
    
</script>

<style scoped>
.musiclist img{
    display: block;
    width: 50%;
    float: left;     
}


</style>