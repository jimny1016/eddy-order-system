<template>

    <div  class="col-lg-4 col-md-6 mb-4" v-for="item in jsonData" :key="item.id" @click="sendValue(item.Title)">
        <div id="tilte">
            {{ item.Title }}
        </div>
        <div id="units">
            {{ item.unit }}
        </div>
        <div id="image">
            <img :src="item.imgPath"/>
        </div>
        <div id="price">
            NT${{ item.price }}
        </div>
    </div>
</template>

<script>
import { ref, onMounted,defineEmits} from 'vue';
import axios from 'axios';
//import menujson from '../script/menupagescript.json';


    export default {
    props: {
        products: {
        type: Array,
        required: true,
        },
        variant: {
        type: String,
        required: false,
        default: () => "vertical",
        validator: (value) => ["horizontal", "vertical"].includes(value),
        },
    },
    setup() {
        defineEmits(['update:value']);
        const key = "1";
        const jsonData = ref(null);
        const error = ref(null);

        const fetchData = () => {
            const url = 'http://192.168.50.164:8081/script/menupagescript.json';
            axios.post(url)
                .then(response => {// 在这里处理响应数据
                jsonData.value = response.data;
                // 进行进一步的操作
                // 进行进一步的操作，例如在控制台打印数据
                console.log(jsonData.value);
                })
                .catch(error => {// 在这里处理错误
                console.error(error);// 处理错误，例如在控制台打印错误信息
                console.error(error.value);
                });
        };
        onMounted(fetchData);
        const sendValue = (value) => {
            this.$emit('update:value', value);
        };
        return {
        key,
        jsonData,
        error,
        sendValue
        };
    },
    };
</script>

<style scoped>

</style>