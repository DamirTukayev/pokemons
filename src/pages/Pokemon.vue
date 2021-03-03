<template>
    <div>
        <h1>Pokemon id {{ id }}</h1>
        <button class="btn btn-sm btn-default mb-2" @click="goBackToPokemons">Back</button>
        <hr>
        <ul class="list-group">
            <li class="list-group-item">Имя:  {{pokemons[id-1].name}}</li>
            <li class="list-group-item">Рост: {{pokemons[id-1].height}}</li>
            <li class="list-group-item">Вес: {{pokemons[id-1].weight}}</li>
            <li class="list-group-item">Атака: {{pokemons[id-1].power}}</li>
        </ul>
    </div>

</template>

<script>
    import axios from 'axios'
    export default {
         data() {
          return {
            id: this.$route.params['id'],
            pokemons: []

          }
         },
        methods: {
          goBackToPokemons() {
              this.$router.push('/pokemons')
          }
         },
        created() {
                axios
                    .get('http://localhost:3000/pokemons')
                    .then(response => this.pokemons = response.data)
            }
    }  
    
</script>

<style scoped>

</style>