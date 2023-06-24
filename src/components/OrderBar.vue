<template>
    <div class="count">
        <button @click="handleSub(item)">-</button>
            {{item.count}}
        <button @click="handlePlus(item)">+</button>
    </div> 
</template>

<script>
    export default new Vue({
    el: '#app',
    data() {
        return {
        };
    },
    methods: {
        handlePlus(item) {
        item.count++;
        },
        handleSub(item) {
        if (item.count > 1) {
            item.count--;
        }
        },
        handleDelete(index) {
        this.itemList.splice(index, 1);
        },
    },
    computed: {

    },
    });
</script>

<style scoped>

</style>