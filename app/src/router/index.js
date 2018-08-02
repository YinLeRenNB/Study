import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/MovieList'
import MusicList from '@/components/music/MusicList'
import BookList from '@/components/book/BookList'
import AnimeList from '@/components/anime/AnimeList'
import MovieDetail from '@/components/movie/MovieDetail'
import MusicDetail from '@/components/music/MusicDetail'
import Indexaa from '@/components/index/Index'

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
      path: '/anime/animelist',
      component: AnimeList
    },{
      path: '/movie/moviedetail/:movieId',
      component: MovieDetail
    },{
      path: '/music/musicdetail/:musicId',
      component: MusicDetail
    }
  ]
})
