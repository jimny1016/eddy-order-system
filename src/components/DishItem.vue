<template>
<div>
    {{ Title }}
    <img :src="imgPath"/>
    {{ price }}
</div>
</template>

<script>
    export default{
        data() {
            return {
                key:"1"
            };
        },
    };
</script>

<style scoped>

</style>