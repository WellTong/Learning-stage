<template>
    <div id="home">
        <search></search>
        <homeList></homeList>
    </div>
</template>

<script>

import search from '@/components/Search'
import homeList from '@/components/HomeList'
export default {
    components: {
        search,
        homeList
    }
}
</script>

<style scoped>

</style>