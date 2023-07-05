<template>

    <div v-if="dish">
        <div id="image">
            <!-- <img :src="dish.imgPath"/> -->
            {{ dish.imgPath }}
        </div>
        <div id="tilte">
            {{ dish.title }}
        </div>
        <div id="price">
            NT${{ dish.price }}
        </div>
        <div id="units">
            {{ dish.unit }}
        </div>
        <RadioOpt :options="options" /> <!-- 传递选项数组给 RadioOpt 组件 -->
    </div>
    <div v-else>
        <!-- 处理dish为null时的情况 -->
    </div>
<!-- <div>
    <OrderBar :item="item" :itemList="itemList"/>
</div> -->

</template>

<script>
//import RadioOpt from './options/RadioOptions.vue';
import { ref } from 'vue'; // 导入 ref 函数
    export default {
        name: 'dish-detail',
        props: ['dish'],
        setup(props) {
            const options = ref(props.dish.Options); // 创建响应式的选项数组
            return {
                options,
            };
        },
        components: {
            RadioOpt: () => import('./options/RadioOptions.vue'), // 异步加载 RadioOptions.vue 组件
        },
        data() {
            return {
                itemList: [
                // 初始项目列表为空
                ],
                item:{
                    count:0 //for counter (OrderBar)
                },
            };
        },
        methods:{
            sendValue(){
                // 可以在这里执行发送值的逻辑
            }
        },
    };
</script>

<style scoped>

</style>