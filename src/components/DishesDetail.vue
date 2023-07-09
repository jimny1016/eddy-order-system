<template>
    <div @click="backToMenu()">
        <MyImage imagePath="/image/icon/previous-blue.png" firstLayerClass="!fixed top-10 ml-2 z-10 !w-auto !h-auto" secondLayerClass="!w-auto !h-auto" imageClass="!w-10 !h-10" />
    </div>    
    <div v-if="dish">
        <div>            
            <!-- {{ dish.imgPath }} -->
            <MyImage imagePath="/image/slick/restaurant-bg-1.jpg" firstLayerClass="!h-[30vh]"/>
        </div>
        <div class="flex justify-between mt-4 mb-8">
            <div>
                <div class="text-3xl font-bold">
                    {{ dish.title }}
                </div>
                <div class="text-xl text-gray-600">
                    {{ dish.unit }}
                </div>
            </div>
            <div class="text-3xl text-blue-400">
                NT${{ dish.price }}
            </div>
        </div>
        <div v-if="dish.Options">
            {{ dish.Options }}
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