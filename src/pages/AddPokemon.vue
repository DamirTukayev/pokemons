<template>
    <div class="container pt-2">
        <div class="form-group">
            <label for="name">Pokemon name</label>
            <input type="text" id="name" class="form-control" v-model.trim="pokemonName">
        </div>
         <div class="form-group">
            <label for="name">Pokemon height</label>
            <input type="text" id="height" class="form-control" v-model.trim="pokemonHeight">
        </div>
        <div class="form-group">
            <label for="name">Pokemon weight</label>
            <input type="text" id="weight" class="form-control" v-model.number="pokemonWeight">
        </div>
        <div class="form-group">
            <label for="name">Pokemon power</label>
            <input type="text" id="power" class="form-control" v-model.number="pokemonPower">
        </div>

        <button class="btn btn-success mt-3" @click="createPokemon">Create pokemon</button>
        
    </div>
</template>

<script>
    export default {
        data () {
            return{
                pokemonName: '',
                pokemonHeight: '',
                pokemonWeight: '',
                pokemonPower: ''

            }
        },
        methods: {
            createPokemon() {
                const pokemon = {
                    name: this.pokemonName,
                    year: this.pokemonYear,
                    height: this.pokemonHeight,
                    weight: this.pokemonWeight,
                    power: this.pokemonPower,
                }
                this.$http.post('http://localhost:3000/pokemons', pokemon)
                    .then(response => {
                        return response.json()
                    })
                    .then(newPokemon =>{
                        console.log(newPokemon);
                    })
                    
            }
        }
    }

</script>

<style scoped>

</style>