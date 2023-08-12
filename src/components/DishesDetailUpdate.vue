<template>
    <div @click="backToShoppingCart()" class="cursor-pointer">
        <MyImage imagePath="/image/icon/previous-blue.png" firstLayerClass="!fixed top-10 ml-2 z-10 !w-auto !h-auto" secondLayerClass="!w-auto !h-auto" imageClass="!w-10 !h-10" />
    </div>    
    <div v-if="dish" class="mb-20">
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
                <div v-if="option.type=='1'">
                    <div class="flex justify-between">
                        <div>
                            <div class="text-xl font-bold">
                                {{ option.name }}
                            </div>
                            <div class=" text-gray-500">
                                {{ option.memo }}
                            </div>
                        </div>
                        <div>
                            <div class="bg-blue-500 rounded-full text-white py-0.5 px-2" v-if="option.requirement">
                                必填                        
                            </div>
                        </div>
                    </div>
                    <div v-for="(optionVaule, optionVauleIndex) in option.optionVaules" :key="'optionVauleChecobox-' + optionVauleIndex" @click="optionVaule.beChoise = !optionVaule.beChoise" class="flex items-center space-x-2 my-2 cursor-pointer">
                        <div class="flex justify-between w-full">
                            <div>
                                <input type="checkbox" @click.stop v-model="optionVaule.beChoise" class="w-5 h-5 text-blue-500 rounded mr-1 relative top-[0.2rem]" /> 
                                <label class="text-lg">{{ optionVaule.valueName }}</label>
                            </div>
                            <div v-if="optionVaule.price > 0">
                                NT${{ optionVaule.price }}
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="option.type=='2'">
                    <div class="flex justify-between">
                        <div>
                            <div class="text-xl font-bold">
                                {{ option.name }}
                            </div>
                            <div class=" text-gray-500">
                                {{ option.memo }}
                            </div>
                        </div>
                        <div>
                            <div class="bg-blue-500 rounded-full text-white py-0.5 px-2" v-if="option.requirement">
                                必填                        
                            </div>
                        </div>
                    </div>
                    <div v-for="(optionVaule, optionVauleIndex) in option.optionVaules" :key="'optionVauleRadio-' + optionVauleIndex" @click="handleRadioChange(optionIndex, optionVauleIndex)" class="flex items-center space-x-2 my-2 cursor-pointer">
                        <div class="flex justify-between w-full">
                            <div>
                                <input type="radio" :name="'radio-' + option.key" :checked="optionVaule.beChoise" class="w-5 h-5 text-blue-500 rounded mr-1 relative top-0.5" /> 
                                <label class="text-lg">{{ optionVaule.valueName }}</label>
                            </div>
                            <div v-if="optionVaule.price > 0">
                                NT${{ optionVaule.price }}
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="option.type=='3'">
                    <div class="flex justify-between">
                        <div>
                            <div class="text-xl font-bold">
                                {{ option.name }}
                            </div>
                            <div class=" text-gray-500">
                                {{ option.memo }}
                            </div>
                        </div>
                        <div>
                            <div class="bg-blue-500 rounded-full text-white py-0.5 px-2" v-if="option.requirement">
                                必填                        
                            </div>
                        </div>
                    </div>
                    <div v-for="(optionVaule, optionVauleIndex) in option.optionVaules" :key="'optionVauleRadio-' + optionVauleIndex" class="flex items-center space-x-2 my-2">
                        <textarea v-model="optionVaule.content" class="w-full p-2 border border-black rounded shadow"></textarea>
                    </div>
                </div>
                <div v-if="option.type=='4'">
                    <div class="flex justify-between">
                        <div>
                            <div class="text-xl font-bold">
                                {{ option.name }}
                            </div>
                            <div class=" text-gray-500">
                                {{ option.memo }}
                            </div>
                        </div>
                        <div>
                            <div class="bg-blue-500 rounded-full text-white py-0.5 px-2" v-if="option.requirement">
                                必填                        
                            </div>
                        </div>
                    </div>
                    <div v-for="(optionVaule, optionVauleIndex) in option.optionVaules" :key="'optionVauleRadio-' + optionVauleIndex" class="flex items-center space-x-2 my-2">
                        <div class="flex justify-between w-full">
                            <div class="flex">
                                <MyImage imagePath="/image/icon/minus.png" @click="()=>{ optionVaule.content = parseInt(optionVaule.content) - 1 < 0 ? 0 : parseInt(optionVaule.content) - 1 }"  firstLayerClass="!w-auto !h-auto top-[0.3rem] cursor-pointer" secondLayerClass="!w-auto !h-auto" imageClass="!w-4 !h-4" />
                                <div class="mx-2 text-center">{{ optionVaule.content }}</div>
                                <MyImage imagePath="/image/icon/plus.png" @click="()=>{ optionVaule.content = parseInt(optionVaule.content) + 1 }"  firstLayerClass="!w-auto !h-auto top-[0.3rem] cursor-pointer" secondLayerClass="!w-auto !h-auto" imageClass="!w-4 !h-4" />
                                <label class="text-lg ml-2">{{ optionVaule.valueName }}</label>
                            </div>
                            <div v-if="optionVaule.price > 0">
                                NT${{ optionVaule.price }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
            <!-- {{ this.disheOptions }} -->
        </div>
    </div>
            <!-- {{ this.$store.getters.cart }} -->
    <!-- {{ beUpdatedCartCell }} -->
    <div class="!fixed left-0 bottom-0 w-[100vw] z-10!h-auto p-4 bg-white">
        <div class="flex justify-between max-w-3xl m-auto items-center">
            <div class="flex">
                <MyImage imagePath="/image/icon/minus.png" @click="()=>{ dishesCount = parseInt(dishesCount) - 1 < 1 ? 1 : parseInt(dishesCount) - 1 }"  firstLayerClass="!w-auto !h-auto cursor-pointer" secondLayerClass="!w-auto !h-auto" imageClass="!w-10 !h-10" />
                <div class="mx-2 text-center text-2xl self-center">{{ dishesCount }}</div>
                <MyImage imagePath="/image/icon/plus.png" @click="()=>{ dishesCount = parseInt(dishesCount) + 1 }"  firstLayerClass="!w-auto !h-auto cursor-pointer" secondLayerClass="!w-auto !h-auto" imageClass="!w-10 !h-10" />
            </div>
            <div @click="addToCart" class="bg-blue-400 px-14 py-2 rounded-md text-white text-center text-2xl self-center cursor-pointer">儲存</div>
        </div>
    </div>

</template>

<script>
    import MyImage from './tools/MyImage.vue';
    
    export default {
        name: 'dish-detail-update',
        components: {
            MyImage,
        },
        data() {
            return {
                dish: null,
                disheOptions:[],
                dishesCount: 1
            };
        },
        computed:{
            beUpdatedCartCell() {                
                return this.$store.getters.beUpdatedCartCell;
            }
        },
        watch: {
            beUpdatedCartCell: {
                immediate: true,
                deep: true,
                handler(newVal) {
                    if (newVal && newVal.cartCell.product) {
                        this.dish = JSON.parse(JSON.stringify(newVal.cartCell.product));
                        this.disheOptions = JSON.parse(JSON.stringify(this.dish.options));
                    }
                    else{
                        this.dish = null;
                        this.disheOptions = null;
                    }
                },
            },
        },       
        methods:{
            handleRadioChange(optionIndex, optinValueIndex) {
                this.disheOptions[optionIndex].optionVaules.forEach((optionVaule, index) => {
                    if(index == optinValueIndex)
                        optionVaule.beChoise = true;
                    else
                        optionVaule.beChoise = false;
                });
            },
            backToShoppingCart(){
                this.$store.dispatch('updatePageState', {pageState: 2 });
            },
            addToCart() {
                let isOk = this.checkRequirement();
                if(!isOk) {
                    return;
                }
                let myDish = this.dish;
                myDish.options = this.disheOptions;

                let resultCartCell = JSON.parse(JSON.stringify(this.beUpdatedCartCell));
                resultCartCell.cartCell.product = myDish;
                resultCartCell.cartCell.quantity = this.dishesCount;
                                
                this.$store.dispatch('updateBeUpdatedCartCell', {cartCell:resultCartCell});
                this.$store.dispatch('updateCartCell');
                this.$store.dispatch('updateBeUpdatedCartCell', {cartCell:null});
                
                this.backToShoppingCart();              
            },
            checkRequirement() {
                let isOk = true;
                let message = '';

                if(this.disheOptions){
                    for (let optionIndex = 0; optionIndex < this.disheOptions.length; optionIndex++) {
                        let option = this.disheOptions[optionIndex];

                        if(!option.requirement) {
                            continue;
                        }
                        let isChecked = false;
                        for (let optionVaulesIndex = 0; optionVaulesIndex < option.optionVaules.length; optionVaulesIndex++) {
                            let optionValue = option.optionVaules[optionVaulesIndex];
                            switch(option.type) {
                                case 1:
                                case 2:
                                    isChecked = optionValue.beChoise || isChecked;
                                break;     
                                case 3:
                                case 4:
                                    isChecked = !(optionValue.content == '' || optionValue.content == '0');
                                break;    
                                default:
                                    throw new Error("Option type not included.");
                            }
                        }
                        if(!isChecked) {
                            message += option.name + '尚未選擇, ';
                        }
                        
                        isOk = isOk && isChecked;
                    }
                }

                if(message) {
                    alert(message);
                }
                return isOk;
            }
        },
    };
</script>

<style scoped>

</style>