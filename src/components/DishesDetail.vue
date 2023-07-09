<template>
    <div @click="backToMenu()">
        <MyImage imagePath="/image/icon/previous-blue.png" firstLayerClass="!fixed top-10 ml-2 z-10" imageClass="!w-10 !h-10" />
    </div>    
    <div v-if="dish">
        <div id="image">            
            <!-- {{ dish.imgPath }} -->
            <MyImage imagePath="/image/slick/restaurant-bg-1.jpg" firstLayerClass="w-full h-1/2" />
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
        <div v-if="dish.Options">
            <RadioOpt :options="dish.Options" />
        </div>
         <!-- 传递选项数组给 RadioOpt 组件 -->
    </div>
    <div v-else>
        <!-- 处理dish为null时的情况 -->
    </div>
<!-- <div>
    <OrderBar :item="item" :itemList="itemList"/>
</div> -->

</template>

<script>
    import RadioOpt from './options/RadioOptions.vue';
    import MyImage from './tools/MyImage.vue';
    //import { ref } from 'vue'; // 导入 ref 函数
    export default {
        name: 'dish-detail',
        props: ['dish'],
        // setup(props) {
        //     if(props.dish.Options)
        //     {
        //         const options = ref(props.dish.Options); // 创建响应式的选项数组
        //         return {
        //             options,
        //         };
        //     }
        //     // var options = ref(props.dish.Options); // 创建响应式的选项数组
        //     // return {
        //     //     options,
        //     // };
        // },
        components: {
            RadioOpt,
            MyImage
        },
        // components: {
        //     RadioOpt: () => import('./options/RadioOptions.vue'), // 异步加载 RadioOptions.vue 组件
        // },
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
            },
            backToMenu(){
                this.$emit('backToMenu');
            }
        },
    };
</script>

<style scoped>

</style>