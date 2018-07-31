import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/MovieList'
import MusicList from '@/components/music/MusicList'
import BookList from '@/components/book/BookList'
import ImagesList from '@/components/images/ImagesList'


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
      path: '/images/iamgeslist',
      component: ImagesList
    }
  ]
})
