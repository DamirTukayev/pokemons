<template>
    <div>
        <h1>Pokemon pages</h1>

        <ul>

            <router-link
                tag="li"
                v-for="pokemons in idPokemonServer"
                :to="'/pokemon/' + pokemons"
                :key="pokemons"
            >
                <a>
                    Pokemon {{ pokemons }}
                </a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                idPokemonServer: null
            }
        },
        mounted() {
            axios
                .get('http://localhost:3000/pokemons')
                .then(response => this.idPokemonServer = response.data.length)
        }
    }

</script>

<style scoped>

</style>