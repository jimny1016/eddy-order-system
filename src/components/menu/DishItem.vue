<template>
    <div class="px-2 mb-4 flex justify-between">
        <div>
            <div class="text-xl font-semibold">
                {{ dish.title }}
            </div>
            <div class="text-gray-500 h-16">
                {{ dish.unit }}
            </div>
            <div class="text-blue-500 text-xl font-bold">
                NT${{ dish.price }}
            </div>
        </div>
        <div class="w-[120px] h-[120px] relative">
            <MyImage imagePath="/image/slick/restaurant-bg-1.jpg" firstLayerClass="w-full h-full left-[-15px]" imageClass="rounded-2xl" />
            <!-- {{ dish.imgPath }} -->
            <div class="absolute-right-center cursor-pointer">
                <font-awesome-icon :icon="['fas', 'plus-circle']" style="color: #1e90ff;" size="2xl" @click="sendBakValue(dish.DishKey)"/>
            </div>            
        </div>
    </div>
</template>

<script>
    import MyImage from '../tools/MyImage';
    export default {
        props: ['dish'],
        data() {
            return {
            }
        },
        components:{ 
            MyImage 
        },
        methods:{
            sendBakValue(dishKey){
                this.$emit('dishKey', dishKey);
            }
        },
    };
</script>

<style scoped>

</style>