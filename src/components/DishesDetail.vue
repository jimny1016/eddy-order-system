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
        <div v-if="this.disheOptions" class="px-4">
            <div v-for="(option, optionIndex) in this.disheOptions" :key="'option-' + optionIndex" class="mb-8">
                <div v-if="option.Type=='1'">
                    <div class="flex justify-between">
                        <div>
                            <div class="text-xl font-bold">
                                {{ option.Name }}
                            </div>
                            <div class=" text-gray-500">
                                {{ option.Memo }}
                            </div>
                        </div>
                        <div>
                            <div class="bg-blue-500 rounded-full text-white py-0.5 px-2" v-if="option.Requirement">
                                必填                        
                            </div>
                        </div>
                    </div>
                    <div v-for="(optionVaule, optionVauleIndex) in option.OptionVaules" :key="'optionVauleChecobox-' + optionVauleIndex" @click="optionVaule.BeChoise = !optionVaule.BeChoise" class="flex items-center space-x-2 my-2 cursor-pointer">
                        <div class="flex justify-between w-full">
                            <div>
                                <input type="checkbox" @click.stop v-model="optionVaule.BeChoise" class="w-5 h-5 text-blue-500 rounded mr-1 relative top-[0.2rem]" /> 
                                <label class="text-lg">{{ optionVaule.ValueName }}</label>
                            </div>
                            <div v-if="optionVaule.Price > 0">
                                NT${{ optionVaule.Price }}
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="option.Type=='2'">
                    <div class="flex justify-between">
                        <div>
                            <div class="text-xl font-bold">
                                {{ option.Name }}
                            </div>
                            <div class=" text-gray-500">
                                {{ option.Memo }}
                            </div>
                        </div>
                        <div>
                            <div class="bg-blue-500 rounded-full text-white py-0.5 px-2" v-if="option.Requirement">
                                必填                        
                            </div>
                        </div>
                    </div>
                    <div v-for="(optionVaule, optionVauleIndex) in option.OptionVaules" :key="'optionVauleRadio-' + optionVauleIndex" @click="handleRadioChange(optionIndex, optionVauleIndex)" class="flex items-center space-x-2 my-2 cursor-pointer">
                        <div class="flex justify-between w-full">
                            <div>
                                <input type="radio" :name="'radio-' + option.Key" @click.stop :checked="optionVaule.BeChoise" class="w-5 h-5 text-blue-500 rounded mr-1 relative top-0.5" /> 
                                <label class="text-lg">{{ optionVaule.ValueName }}</label>
                            </div>
                            <div v-if="optionVaule.Price > 0">
                                NT${{ optionVaule.Price }}
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="option.Type=='4'">
                    <div class="flex justify-between">
                        <div>
                            <div class="text-xl font-bold">
                                {{ option.Name }}
                            </div>
                            <div class=" text-gray-500">
                                {{ option.Memo }}
                            </div>
                        </div>
                        <div>
                            <div class="bg-blue-500 rounded-full text-white py-0.5 px-2" v-if="option.Requirement">
                                必填                        
                            </div>
                        </div>
                    </div>
                    <div v-for="(optionVaule, optionVauleIndex) in option.OptionVaules" :key="'optionVauleRadio-' + optionVauleIndex" class="flex items-center space-x-2 my-2 cursor-pointer">
                        <div class="flex justify-between w-full">
                            <div class="flex">
                                <MyImage imagePath="/image/icon/minus.png" @click="()=>{ optionVaule.Content = parseInt(optionVaule.Content) - 1 < 0 ? 0 : parseInt(optionVaule.Content) - 1 }"  firstLayerClass="!w-auto !h-auto top-[0.3rem]" secondLayerClass="!w-auto !h-auto" imageClass="!w-4 !h-4" />
                                <div class="mx-2 text-center">{{ optionVaule.Content }}</div>
                                <MyImage imagePath="/image/icon/plus.png" @click="()=>{ optionVaule.Content = parseInt(optionVaule.Content) + 1 }"  firstLayerClass="!w-auto !h-auto top-[0.3rem]" secondLayerClass="!w-auto !h-auto" imageClass="!w-4 !h-4" />
                                <label class="text-lg ml-2">{{ optionVaule.ValueName }}</label>
                            </div>
                            <div v-if="optionVaule.Price > 0">
                                NT${{ optionVaule.Price }}
                            </div>
                        </div>
                    </div>
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
            handleRadioChange(optionIndex, optinValueIndex) {
                this.disheOptions[optionIndex].OptionVaules.forEach((optionVaule, index) => {
                    if(index == optinValueIndex)
                        optionVaule.BeChoise = true;
                    else
                        optionVaule.BeChoise = false;
                });
            },
            backToMenu(){
                this.$emit('backToMenu');
            }
        },
    };
</script>

<style scoped>

</style>