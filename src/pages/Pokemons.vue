<template>
    <div>
        <h1>Pokemon pages</h1>

        <ul>

            <router-link
                tag="li"
                v-for="pokemons in 20"
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
    export default {
        data () {
            return {
            }
        }
    }

</script>

<style scoped>

</style>