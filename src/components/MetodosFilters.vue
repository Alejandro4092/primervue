<template>
  <h1>Metodos Filters</h1>
  <ul>
    <li v-for="num in numeros" :key="num">
      Número: {{ num }} Doble: {{ $filters.getNumeroDoble(num) }}
    </li>
  </ul>
  <ul>
    <li v-for="name in nombres" :key="name">
      {{$filters.mayuscula(name)}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "MetodosFilters",
  data() {
    return {
      numeros: [55, 21, 33, 44, 88],
      nombres: ["Lucia", "Diana", "Antonia", "Carlos"],
    };
  },
};
</script>

<style>
</style>