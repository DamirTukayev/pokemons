import VueRouter from 'vue-router'
import Home from './pages/Home'
import Pokemons from './pages/Pokemons'
import Pokemon from './pages/Pokemon'
import addPokemon from './pages/AddPokemon'
import errorPage from './pages/Error'






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
            path: '/addpokemon',
            component: addPokemon

       },
       {
           path: '/pokemon/:id',
           component: Pokemon,
       },
       {
           path: '/none',
           redirect: '/'
       },
       {
           path:'*',
           component: errorPage
       }
   ],
   mode: 'history' 
})