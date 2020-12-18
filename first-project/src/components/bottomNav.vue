<template>
  <ul id="bottomNav">
    <router-link :to="{name:'home',params:{index:1}}">
      <li><i class="iconfont iconshouye"></i>首页</li>
    </router-link>

    <router-link :to="{name:'classify',params:{index:2}}">
      <li><i class="iconfont iconfenlei"></i>分类</li>
    </router-link>

    <router-link :to="{name:'order',params:{index:3}}">
      <li><i class="iconfont iconquanbudingdan"></i>订单</li>
    </router-link>

    <router-link :to="{name:'user',params:{index:4}}">
      <li><i class="iconfont icongerenzhongxin"></i>我的</li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "bottomNav",
  data(){
    return {
      targetIndex: 0
    }
  },
  methods: {
    getIndex: function(i) {
      // this.targetIndex = e.index;
      console.log(i+ "12312423");
    }
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
  z-index: 100;
}
ul > *{
  flex-grow: 1;
  color: rgba(0, 0, 0, 0.8);
}
ul li {
  background: white;
  box-sizing: border-box;
  padding: 0.5rem;
  border: 1px solid (0, 0, 0, 0.2);
  border-right: 1px solid gray;
  text-align: center;
  font-size: 0.5rem;
}
ul .iconfont {
  display: block;
  font-size: 1.5rem;
}
.active{
  color: red!important;
}
</style>
