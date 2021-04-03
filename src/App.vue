<template>
  <div id="app">
    <app-nav-bar></app-nav-bar>
<!--    <app-Home></app-Home>-->
<!--    <add-about></add-about>-->
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavBar from './components/NavBar.vue'
// import AppHeader from './components/Home.vue'
// import AddAbout from './components/About.vue'

export default {
  name: 'App',
  components: {
    AppNavBar,
    // AppHeader,
    // AddAbout
  }
}
</script>

<style>
#app {
  max-width: 1400px;
  width: 100%;
  margin: 0px;
}
</style>
