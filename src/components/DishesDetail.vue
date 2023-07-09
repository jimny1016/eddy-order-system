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
        <div v-if="this.disheOptions">
            <div v-for="(option, optionIndex) in this.disheOptions" :key="'option-' + optionIndex">
                <div v-if="option.Type=='2'">                    
                    <label v-for="(optionVaule, optionVauleIndex) in option.OptionVaules" :key="'optionVaule-' + optionVauleIndex">
                        <input type="checkbox" v-model="optionVaule.BeChoise" /> 
                        {{ optionVaule.ValueName }}
                    </label>
                </div>
            </div>
            {{ this.disheOptions }}
        </div>
    </div>
<!-- <div>
    <OrderBar :item="item" :itemList="itemList"/>
</div> -->

</template>

<script>
    import MyImage from './tools/MyImage.vue';
    
    export default {
        name: 'dish-detail',
        props: ['dish'],
        components: {
            MyImage
        },
        data() {
            return {
                disheOptions:[]
            };
        },
        watch: {
            dish: {
            immediate: true,
            deep: true,
            handler(newVal) {
                if (newVal && newVal.Options) {
                this.disheOptions = JSON.parse(JSON.stringify(newVal.Options));
                }
            },
            },
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