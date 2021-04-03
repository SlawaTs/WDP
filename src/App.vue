<template>
  <div id="app">
    <app-YourLogo></app-YourLogo>
<!--    <app-Home></app-Home>-->
<!--    <add-about></add-about>-->
    <router-view></router-view>
  </div>
</template>

<script>
import AppYourLogo from './components/Your Logo.vue'
// import AppHeader from './components/Home.vue'
// import AddAbout from './components/About.vue'

export default {
  name: 'App',
  components: {
    AppYourLogo,
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
