<template>


<div>
  <h1 style="color:red">Menu del Componente</h1>
  <MenuComponent/>
 
  <hr>
  <router-view>

  </router-view>
  
</div>


</template>

<script>


//import HolaMundo from './components/HolaMundo.vue'
// import CineComponent from './components/CineComponent.vue'
// import MusicaComponent from './components/MusicaComponent.vue'
// import HomeComponent from './components/HomeComponent.vue'
 import MenuComponent from './components/MenuComponent.vue'

export default {
  name: 'App',
  components: {
    MenuComponent
    // CineComponent,
    // MusicaComponent,
    // HomeComponent,
   // HolaMundo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
