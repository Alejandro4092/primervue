<template>
<div>
    <h1>Mi primer vue de viernes, que ilusión!!!!!</h1>
    <img src="./../assets/images/miniom.jpg">
    <h2>Su nombre es {{nombre}}</h2>
    <h2>Su edad es {{edad}}</h2>
</div>
  
</template>

<script>
//Vue utiliza codigo js(Especial)
//Cada component que generemos de tener un nombre obligatorio
//y debemmos exportarlo con dicho nombre. el name es la etiqueta que utilizaran otros componentes para dibujar


export default {
name: "HolaMundo",
data(){
    //Las variables so declaradas en formato json dentro de un return
    return{
        nombre:"Alumno",
        edad:"25",
        miArray:[],
        objeto:{}
    }
}
}
</script>

<style>
h1 {color:blue}
@import './../assets/css/estilos.css';
</style>