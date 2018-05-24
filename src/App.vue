<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <router-link to="/demo1">demo1</router-link></li>
    <router-link to="/demo2">demo2</router-link></li>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
