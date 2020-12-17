<template>
  <div id="app">
    <bottomNav></bottomNav>
  </div>
</template>

<script>
import bottomNav from './components/bottomNav.vue'
export default {
  components: { bottomNav },
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
}
html,body{
  font-size: 22px;
  width: 100%;
  height: 100%;
}
</style>
