import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/MovieList'
import MusicList from '@/components/music/MusicList'
import BookList from '@/components/book/BookList'
import AnimeList from '@/components/anime/AnimeList'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
    }
  ]
})
