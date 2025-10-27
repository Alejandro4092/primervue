<template>
  <div>
    <h1>
        Par Impar
        <input type="text" v-model="numero">
        <button @click="GenerarNumero">Numero aleatorio</button>
        <h3 v-if="numero%2==0">Par</h3>
        <h3 v-else-if="numero%2!==0">Impar</h3>
        

    </h1>
  </div>
</template>

<script>
export default {
    name:"ParImpar",
    data(){
        return{
        numero:0
        }
    },
    methods:{
      GenerarNumero(){
        this.numero=Math.floor(Math.random()*100)+1;
      }
    }

}
</script>

<style>

</style>