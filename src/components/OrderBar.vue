<template>
    <div class="count">
        <button @click="handleSub">-</button>
            {{localItem.count}}
        <button @click="handlePlus">+</button>
        <button @click="handleDelete">Delete</button>
    </div> 
</template>

<script>
    export default{
        name: 'order-bar',
        props: {
            item: {
                type: Object,
                required: true
            },
            itemList: {
                type: Array,
                required: true
            }
        },
        methods: {
            handlePlus() {
                this.localItem.count++;
            },
            handleSub() {
                if (this.localItem.count > 1) {
                    this.localItem.count--;
                }
            },
            handleDelete(index) {
                this.localitemList.splice(index, 1);
            },
        },
        computed: {

        },
    };
</script>

<style scoped>

</style>