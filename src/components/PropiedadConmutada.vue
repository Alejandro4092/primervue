<template>
  <h1>Propiedad Conmutada</h1>
  <label>Introduzca un número</label>
  <input type="number" >
  <div v-html="evaluarNumero"></div>
  
  <ul>
    <li v-for="game in juegosRojos"  :key="game" v-html="game">
       
    </li>
  </ul>
 
</template>

<script>
export default {
    name:"PropiedadConmutada",
    computed:{
        evaluarNumero(){
            let data="";
            if(this.numero%2==0){
                data="<h4 style='color:green'>Par: "+this.numero+"</h4>";
            }else{
                data="<h4 style='color:red'>Impar: "+this.numero+"</h4>";

            }
            return data;

        },
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
            numero:0,
            juegos:["Parchis","Canicas","Luz verde, luz roja","La galleta"]
        }
    }

}
</script>

<style>

</style>