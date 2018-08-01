<template>
  <div id="app">
    <common-header :bg="bgColor" :title="titleName"></common-header>
    <router-view/>
    <common-footer :bg="bgColor" @change="fn"></common-footer>
  </div>
</template>

<script>
import CommonFooter from '@/components/common/Footer'
import CommonHeader from '@/components/common/Header'
export default {
  name: 'App',
  data() {
    return {
      bgColor:"#9fee8b",
      titleName:"Movie"
    }
  },
  components: {
    CommonFooter,
    CommonHeader
  },
  methods: {
    fn(color,title) {
      this.bgColor = color;
      this.titleName = title;
    }
  },
  created () {
    let url = this.$route.path;
    // console.log(url)
    // let arr = url.split('/');
    let str = url.split('/')[1];
    switch(str){
      case 'music':
        this.bgColor = 'rgb(38, 189, 216)';
        this.titleName = 'Music';
        break;
      case 'movie':
        this.bgColor = '#9fee8b';
        this.titleName = 'Movie';
        break;
      case 'book':
        this.bgColor = '#e7cd57';
        this.titleName = 'Book';
        break;
      case 'images':
        this.bgColor = '#fccbaf';
        this.titleName = 'Anime';
        break;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 1rem 0;
}
body{
  font-size: 0.32rem
}


</style>
