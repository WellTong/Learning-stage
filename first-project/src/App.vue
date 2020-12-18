<template>
  <div id="app">  
    <transition :name="handOff" mode="out-in">
      <router-view></router-view>
    </transition>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
import bottomNav from '@/components/BottomNav'
export default {
  name: 'App',
  data() {
    return {
      handOff:"",
      index: '',
    }
  },
  components: { 
    bottomNav
  },
  mounted(){
    this.index = this.$route.params.index
  },
  beforeUpdate(){
    var targetIndex = this.$route.params.index;
    this.handOff = targetIndex < this.index ? "handLeft" : "handRight"
    this.index = targetIndex
  }
}
</script>

<style>
@import './assets/index.css';
</style>
