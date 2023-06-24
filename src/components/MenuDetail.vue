<template>
<div>
    <div v-for="tab in tabs">
    <DishItem v-for="dishesitems in item"/>
    </div>
</div>
</template>

<script>
import DishItem from './components/DishItem.vue';
    export default{
    components: {DishItem
    },
    el: '#order-list',
    data() {
        return {
        tabs: ['Recommend','Classic','Rice','Noodles'],
        item: ['炒飯','燴飯','麵'],
        ingredients:[
            {title:'招牌蛋炒飯',units:'一份',price:80},
            {title:'綜合天婦羅',units:'大蝦天婦羅*3、地瓜天婦羅*3、蔬菜天婦羅*3 一份9個',price:200},
            {title:'當日特選餐',units:'每日特選餐點不同,請至櫃檯詢問謝謝',price:''},
        ]
        };
    },
    };

</script>

<style scoped>

</style>