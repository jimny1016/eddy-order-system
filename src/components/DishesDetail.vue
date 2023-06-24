<template>
<img :src="imagePath"/>
{{ Title }}
{{ Price }}
{{ Units }}

<OrderBar/>
</template>

<script>
import OrderBar from './components/OrderBar.vue';
    export default {
    name: 'OrderDetail',
    components: {
    //  HelloWorld, Slider,
    OrderBar,
    },
    data() {
        return {
        };
    },
    };
</script>

<style scoped>

</style>