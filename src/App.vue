<template>
  <div id="app">
    <select-default></select-default>
  </div>
</template>

<script>
import SelectDefault from './components/select/default.vue'

export default {
  name: 'app',
  components: {
    SelectDefault
  }
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
