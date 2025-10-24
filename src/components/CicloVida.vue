<template>
  <div>
    <h1>Ciclo vida</h1>
    <h2 style="color:red">{{mensaje}}</h2>
    <button @click="cambiarMensaje()">Cambiar mensaje</button>
  </div>
</template>

<script>
export default {
name:"CicloVida",
data(){
    return{
        mensaje:"Hoy es viernes"
    }
},
methods:{
    //Aqui incluimos nuestros metodos personalizados
    cambiarMensaje(){
        //para acceder a las variables de data() del component debemos utilizar la palabra this
        this.mensaje="Hoy se sale!!!"
    }
},
mounted(){
    console.log("Component mounted")
},
created(){
    console.log("Component created")
},
updated(){
    console.log("Component updated")
},
unmounted(){
    console.log("Component unmounted")
}
}
</script>

<style>

</style>