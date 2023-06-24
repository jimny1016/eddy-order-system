<template>
    <div>
        <span v-for="extraOptions in theme"></span>

    </div>
    <!--
<Options v-for="orderItemOptions" :theme="theme"/>-->
<label for="option_1" theme="theme"><input type="checkbox" id="option_1" v-for="orderItemOptions in theme"></label>
    </template>
    
    <script>
    export default new Vue({
    el: '#op-item-title',
    data() {
        return {
        theme: [辣度,加購
        ]
        };
    }
    });

    </script>
    
    <style scoped>
    
    </style>