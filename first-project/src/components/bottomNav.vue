<template>
    <div id="bottomNav">
        <i class="iconfont iconshouye"></i>
        <i class="iconfont iconfenlei"></i>
        <i class="iconfont icongouwuche"></i>
        <i class="iconfont icongerenzhongxin"></i>
    </div>
</template>

<script>
export default {
    name: 'bottomNav'
}
</script>

<style scoped>
#bottomNav{
    box-sizing: border-box;
    border-top: 1px solid black;
    position: fixed;
    display: flex;
    text-align: center;
    bottom: 0;
    width: 100%;
}
.iconfont{
    box-sizing: border-box;
    flex-grow: 1;
    font-size: 2rem;
    padding: 0.5rem;
    border: 1px solid (0, 0, 0, 0.2);
    box-shadow: -2px 1px 2px 1px rgba(0, 0, 0, 0.2)
}
</style>