<template>
  <div>
    <h1>Ejemlpo Directivas</h1>
    <h3>{{ $data }}</h3>
    <label>Introduzca serie</label>
    <input type="text" name="" v-model="serieNueva">
    <button @click="nuevaSerie()"> Nueva serie??</button>
    <ul v-if="series.length > 0">
      <li v-for="serie in series" :key="serie">
        {{ serie }}
      </li>
    </ul>
    <label>Introduzca un númeor</label>
    <input type="number" v-model="numero" />
    <h3 v-if="numero > 0" style="color: green">Positivo</h3>
    <h3 v-else-if="numero < 0" style="color: green">Negativo</h3>
    <h3 v-else style="color: blue">Cero</h3>
  </div>
</template>

<script>
export default {
  name: "DirectivasComponent",
  data() {
    return {
      series: ["Futurama", "Mindhunter", "The Boys", "Stanger Things"],
      numero: 0,
      nombre: "Alumno",
      serieNueva: "",
    };
  },
  methods: {
    nuevaSerie() {
      this.series.push(this.serieNueva);
    },
  },
};
</script>

<style></style>
