<template>
    <div class="px-2 md:pr-0">
        <div v-for="(tab, tabIndex) in manuData" :key="`tab-${tabIndex}`">
            <div class="text-2xl py-1 font-bold">{{ tab.TabName }}</div>
            <DishItem v-for="(dish, dishIndex) in tab.Dishes" :key="`dish-${dishIndex}`" :dish="dish" @dishKey="getValue"/>
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
            // return {
            //     tabs: ['Recommend','Classic','Rice','Noodles'],
            //     item: ['炒飯','燴飯','麵'],
            //     ingredients:[
            //         {title:'招牌蛋炒飯',units:'一份',price:80},
            //         {title:'綜合天婦羅',units:'大蝦天婦羅*3、地瓜天婦羅*3、蔬菜天婦羅*3 一份9個',price:200},
            //         {title:'當日特選餐',units:'每日特選餐點不同,請至櫃檯詢問謝謝',price:''},
            //     ],
            //     receivedValue: '',
            // };
        },
        methods: {
        //    switchDisplayTodetail(){
        //        this.showSlider = value;
        //    },
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