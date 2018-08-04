import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/MovieList'
import MusicList from '@/components/music/MusicList'
import BookList from '@/components/book/BookList'
import PhotoList from '@/components/photo/PhotoList'
import MovieDetail from '@/components/movie/MovieDetail'
import MusicDetail from '@/components/music/MusicDetail'
import Indexaa from '@/components/index/Index'
import PhotoDetail from '@/components/photo/PhotoDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },{
      path: '/index',
      component: Indexaa
    },
    {
      path: '/movie/movielist',
      component: MovieList
    },{
      path: '/music/musiclist',
      component: MusicList
    },{
      path: '/book/booklist',
      component: BookList
    },{
      path: '/anime/photolist',
      component: PhotoList
    },{
      path: '/movie/moviedetail/:movieId',
      component: MovieDetail
    },{
      path: '/music/musicdetail/:musicId',
      component: MusicDetail
    },{
      path: '/photo/photodetail/:photoId',
      component: PhotoDetail
    }
  ]
})
