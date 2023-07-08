<template>
    <!--Reference: https://medium.com/notonlycss/how-to-create-a-tab-component-in-vue-js-2812c75807f9 -->
    <!--Reference: https://codesandbox.io/s/vue-js-tabs-d0zn6?file=/src/components/AppTabs.vue -->
    <div
        :class="{
        'flex space-x-4': variant === 'horizontal',
        }"
    >
        <ul
        class="list-none bg-blue-900 bg-opacity-30 p-1.5 rounded-lg text-center overflow-auto whitespace-nowrap"
        :class="{
            'flex items-center': variant === 'vertical',
        }"
        >
        <li
            v-for="(tab, index) in tabList"
            :key="index"
            class="w-full px-4 py-1.5 rounded-lg"
            :class="{
            'text-blue-600 bg-white shadow-xl': index + 1 === activeTab,
            'text-white': index + 1 !== activeTab,
            }"
        >
        <!-- 產出頁籤，而tab.name是從調用端傳給tab，再取this.$children來取得裡面的props -->
            <label
            :for="`${_uid}${index}`"
            v-text="tab"
            class="cursor-pointer block"
            ></label>
            <input
            :id="`${_uid}${index}`"
            type="radio"
            :name="`${_uid}-tab`"
            :value="index + 1"
            v-model="activeTab"
            class="hidden"
            />
        </li>
        </ul>
        <!-- <template v-for="(tab, index) in tabList">
        <div
            :key="index"
            v-if="index + 1 === activeTab"
            class="flex-grow bg-white rounded-lg shadow-xl p-4"
        >
            <slot :name="`tabPanel-${index + 1}`"></slot>
        </div>
        </template> -->
    </div>
</template>

<script>
    export default {
    props: {
        tabList: {
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
        activeTab: 1,
        };
    },
    };

</script>

<style scoped>

</style>
