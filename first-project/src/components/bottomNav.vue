<template>
  <ul id="bottomNav">
    <router-link to="/home">
      <li><i class="iconfont iconshouye"></i></li>
    </router-link>

    <router-link to="/classify">
      <li><i class="iconfont iconfenlei"></i></li>
    </router-link>

    <router-link to="/cart">
      <li><i class="iconfont icongouwuche"></i></li>
    </router-link>

    <router-link to="/user">
      <li><i class="iconfont icongerenzhongxin"></i></li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "bottomNav",
  methods: {
    toIndex: function() {}
  }
};
</script>

<style scoped>
#bottomNav {
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-top: 1px solid black;
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
}
ul > *{
  flex-grow: 1;
}
ul li {
  background: white;
  box-sizing: border-box;
  padding: 0.5rem;
  border: 1px solid (0, 0, 0, 0.2);
  border-right: 1px solid gray;
  text-align: center;
}
.iconfont {
  font-size: 2rem;
}
</style>
