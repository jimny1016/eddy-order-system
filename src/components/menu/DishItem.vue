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
        <div>
            <div>
                <!-- <img :src="dish.imgPath"/> -->
                {{ dish.imgPath }}
            </div>
            <div>
                <font-awesome-icon :icon="['fas', 'plus-circle']" style="color: #1e90ff;"  size="lg"  @click="sendBakValue(dish.DishKey)"/>
            </div>            
        </div>
    </div>
</template>

<script>
    export default {
        props: ['dish'],
        data() {
            return {
            }
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