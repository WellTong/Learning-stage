<template>
  <div id="app">
    <router-view></router-view>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
import bottomNav from '@/components/BottomNav'
export default {
  name: 'App',
  components: { 
    bottomNav
  }
}
</script>

<style>
*{
  user-select: none;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
}
html,body{
  font-size: 22px;
  width: 100%;
  height: 100%;
}
</style>
