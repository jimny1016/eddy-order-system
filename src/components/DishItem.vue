<template>
    <div  class="col-lg-4 col-md-6 mb-4" @click="sendValue(item.Title)">
        <div id="tilte">
            {{ dish.title }}
        </div>
        <div id="units">
            {{ dish.unit }}
        </div>
        <div id="image">
            <!-- <img :src="dish.imgPath"/> -->
            {{ dish.price }}
        </div>
        <div id="price">
            NT${{ dish.price }}
        </div>
    </div>
</template>

<script>
// import { ref, onMounted,defineEmits} from 'vue';
// import axios from 'axios';
//import menujson from '../script/menupagescript.json';


    export default {
        props: ['dish'],
        // props: {
        //     products: {
        //         type: Array,
        //         required: true,
        //     },
        //     variant: {
        //         type: String,
        //         required: false,
        //         default: () => "vertical",
        //         validator: (value) => ["horizontal", "vertical"].includes(value),
        //     },
        // },

        data() {
            return {
            }
        },
        // setup() {
        //     defineEmits(['update:value']);
        //     const key = "1";
        //     const jsonData = ref(null);
        //     const error = ref(null);

        //     const fetchData = () => {
        //         // const url = 'http://192.168.50.164:8081/script/menupagescript.json';
        //         // axios.post(url)
        //         //     .then(response => {// 在这里处理响应数据
        //         //         this.jsonData = response.data;
        //         //         response.success
        //         //         response.status
        //         //         // 进行进一步的操作
        //         //         // 进行进一步的操作，例如在控制台打印数据
        //         //         console.log(jsonData.value);

        //         //     })
        //         //     .catch(error => {// 在这里处理错误
        //         //         console.error(error);// 处理错误，例如在控制台打印错误信息
        //         //         console.error(error.value);
        //         //     });


                    
        //         var ddd = "{ \"id\": 1, \"title\": \"json-server\", \"author\": \"typicode\" }";
        //         this.jsonData = JSON.parse(ddd);
        //     };
        //     onMounted(fetchData);
        //     const sendValue = (value) => {
        //         this.$emit('update:value', value);
        //     };
        //     return {
        //         key,
        //         jsonData,
        //         error,
        //         sendValue
        //     };
        // },
    };
</script>

<style scoped>

</style>