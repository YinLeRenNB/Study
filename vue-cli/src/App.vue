<template>
  <div id="app">
    <div>   
      <button @click="goBack()">后退</button>
      <button @click="goForward()">前进</button>
      <button @click="goHome()">返回首页</button>
    </div>

    <router-link to="/index">首页</router-link>
    <router-link to="/list">列表页</router-link>
    <router-link to="/url/hahah/20">Url传参</router-link>
    <router-link to="/home">重定位</router-link>

    <transition name="fade" mode="out-in">
      <router-view></router-view>    
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    goForward(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 2s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;  
}
.fade-leave-active{
  transition: opacity 1s;
}
.fade-leave-to{
  opacity: 0;  
}

</style>
