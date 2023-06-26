<template>

    <div  class="col-lg-4 col-md-6 mb-4" v-for="item in menujson" :key="item.id">
        <div id="tilte">
            {{ menujson.Title }}
        </div>
        <div id="units">
            {{ menujson.unit }}
        </div>
        <div id="image">
            <img :src="imgPath"/>
        </div>
        <div id="price">
            NT${{ menujson.price }}
        </div>

    </div>
</template>

<script>
import menujson from '../script/menupagescript.json'
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
    data() {
        return {
        key: "1",
        myJson: menujson,
        };
    },
    };

</script>

<style scoped>

</style>