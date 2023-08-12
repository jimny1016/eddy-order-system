<template>
    <div class="h-[96px]">

    </div>
    <div class="px-2 md:pr-0">
        <div v-for="(tab, tabIndex) in manuData" :key="`tab-${tabIndex}`">
            <div class="text-2xl py-1 font-bold" :id="tab.tabName">{{ tab.tabName }}</div>
            <DishItem v-for="(dish, dishIndex) in tab.dishes" :key="`dish-${dishIndex}`" :dish="dish" @dishKey="getValue"/>
        </div>
    </div>
</template>

<script>
    import DishItem from '../menu/DishItem.vue';
    export default{
        props: ['manuData',],
        components: {
            DishItem
        },
        data() {
        },
        methods: {
            getValue(value) {
                this.receivedValue = value;
                console.log(value);
                if(value!==""){
                    this.$emit('dishKey', value);
                }
            },
        },
    };

</script>

<style scoped>

</style>