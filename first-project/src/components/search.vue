<template>
    <div id="search">
        <div>
            <label for="sContent"><i class="iconfont iconsousuo"></i></label>
            <input id="sContent" type="text" placeholder="吃喝玩乐" v-model="searchVal">
            <span v-if="searchVal"><i class="iconfont iconguanbi" @click="clearContent"></i></span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            searchVal: '',
        }
    },
    methods: {
        clearContent: function () {
            this.searchVal = null;
        }
    },
    updated: function (){
        console.log(typeof this.searchVal);
    }
}
</script>

<style scoped>
#search{
    padding: 1rem 0;
    border-bottom: 1px solid gray;
}
#search div{
    box-sizing: border-box;
    width: 90%;
    margin: 0 auto;
    height: 2rem;
    padding: 0 1rem;
    border-radius: 0.8rem;
    border: 1px solid gray;
}
#sContent{
    user-select: text;
    box-sizing: border-box;
    width: 84%;
    height: 100%;
    font-size: 1rem;
    outline: none;
    border: none;
}
</style>