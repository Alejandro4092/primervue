<template>
  <h1>Propiedad Conmutada</h1>
  <ul>
    <li v-for="game in juegosRojos"  :key="game" v-html="game">
       
    </li>
  </ul>
  <ul>
    <li v-for="game in juegosRojos"  :key="game">
      
       
    </li>
  </ul>
</template>

<script>
export default {
    name:"PropiedadConmutada",
    computed:{
        //Se escribe como un metodo pero se utiliza como una propiedad
        juegosRojos(){
            var datos=this.juegos;
            var i=0;
            for(var game of this.juegos){
                var juegoRojo="<span style='color:red' > "+game+"</span>";
                datos[i]=juegoRojo;
                i++;
            }
            return datos;
        }
    },
    data(){
        return{
            juegos:["Parchis","Canicas","Luz verde, luz roja","La galleta"]
        }
    }

}
</script>

<style>

</style>