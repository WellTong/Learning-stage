<template>
    <div id="user">
        <ul>
            <li>用户名</li>
            <li>我的钱包</li>
            <li>我的订单</li>
            <li>设置</li>
            <li>退出登录</li>
            <li v-for='(item,index) in stateData' :key="index">
                <span v-if="item.state === 1">{{ item.stateImg }}</span>
                <span v-else-if="item.state === 2">{{ item.stateImg }}</span>
                <span v-else-if="item.state === 3">{{ item.stateImg }}</span>
                <span v-else-if="item.state === 4">{{ item.stateImg }}</span>
                {{ item.stateName }}
            </li>
        </ul>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    data () {
        return {
            stateData: []
        }
    },
    mounted() {
        this.getState()
    },
    methods: {
        getState () {
            axios.get('/static/stateData.json').then(this.getStateSucc)
        },
        getStateSucc (res) {
            this.stateData = res.data
        }
    }
}
</script>

<style scoped>

</style>