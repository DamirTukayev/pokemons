import VueRouter from 'vue-router'
import Home from './pages/Home'
import Pokemons from './pages/Pokemons'
import Pokemon from './pages/Pokemon'


export default new VueRouter ({
   routes: [
       {
            path: '',
            component: Home
       },
       {
            path: '/pokemons',
            component: Pokemons
       },
       {
           path: '/pokemon/:id',
           component: Pokemon,
       },
       {
           path: '/none',
           redirect: '/'
       }
   ],
   mode: 'history' 
})