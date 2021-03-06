<template>
    <div>
        <h1>Pokemon id {{ id }}</h1>
        <button class="btn btn-sm btn-info mb-2" @click="goBackToPokemons">Back</button>
        <hr>
        <img  :src="imageUrl + id + '.svg'" alt="">

        <ul class="list-group mt-3">
            <li class="list-group-item">Имя: {{pokemons.name}}</li>
            <li class="list-group-item">Вес: {{pokemons.weight}}</li>
            <li class="list-group-item">Рост: {{pokemons.height}}</li>
            <!-- <pre>{{pokemons.sprites.other.dream_world.front_default}}</pre> -->
        </ul>
    </div>

</template>

<script>
    import axios from 'axios'
    export default {
         data() {
            return {
                id: this.$route.params['id'],
                imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/',
                pokemons:[]
            }
          },
        methods: {
          goBackToPokemons() {
              this.$router.push('/pokemons')
          }
         },
        created() {

                 axios
                    .get(`https://pokeapi.co/api/v2/pokemon/${this.id}` )
                    .then(response => (this.pokemons = response.data))
         }
        }

    
    
</script>

<style scoped>

</style>