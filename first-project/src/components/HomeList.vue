<template>
    <div id="homeList">
        <div v-for="(item,i) in homeList" :key="i"><i :class="item.icon"></i>{{ item.title }}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            homeList:[
                {title:'今日爆款',icon:'iconfont iconjifenshangcheng'},
                {title:'今日爆款',icon:'iconfont iconjifenshangcheng'},
                {title:'购物车',icon:'iconfont icongouwuche'},
                {title:'今日爆款',icon:'iconfont iconjifenshangcheng'},
                {title:'今日爆款',icon:'iconfont iconjifenshangcheng'},
                {title:'今日爆款',icon:'iconfont iconjifenshangcheng'},
                {title:'今日爆款',icon:'iconfont iconjifenshangcheng'},
                {title:'今日爆款',icon:'iconfont iconjifenshangcheng'},
            ]
        }
    }
}
</script>

<style scoped> 
#homeList{
    position: absolute;
    top: 4rem;
    padding: 0.1rem;
    background: lightgray;
}
#homeList div{
    width:25%;
    display: inline-block;
    font-size: 0.8rem;
    text-align: center;
    
    background: white;
}
#homeList .iconfont{
    font-size: 2rem;
    display: block;

}
</style>