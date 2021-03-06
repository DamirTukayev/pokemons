<template>

  <div class="container">
    <nav class="navbar navbar-light bg-light">
      <form class="container-fluid justify-content-start">
        <router-link
          :to="'/'"
        >
          <button class="btn btn-outline-success me-2" type="button">Home</button>
        </router-link>
        <router-link
          :to="'/pokemons'"
        >
          <button class="btn btn-sm btn-outline-secondary" type="button">Pokemons</button> 
        </router-link>

      </form>
    </nav>
    <router-view></router-view>
  </div>

</template>
<script>
  export default {
      }
</script>

<style>

</style>