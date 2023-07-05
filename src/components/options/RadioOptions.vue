<template>
    <div>
        {{ 123 }}
        <!-- <label v-for="(option, index) in options" :key="index">
            <input type="radio" :value="option.value" v-model="selectedOption" @change="handleChange" />
            {{ option.label }}
        </label> -->
    </div>
</template>

<script>
    export default {
        name: 'radio-options',
        props: ['options'],
        // {
        //     options: {
        //         type: Array,
        //         required: true,
        //     },
        //     value: {
        //         type: String,
        //         required: true,
        //     },
        // },
        data() {
            return {
                selectedOption: this.value,
            };
        },
        methods: {
            handleChange() {
                this.$emit('update:value', this.selectedOption);
            },
        },
    };
</script>

<style scoped>

</style>