<template>
    <!--Reference: https://medium.com/notonlycss/how-to-create-a-tab-component-in-vue-js-2812c75807f9 -->
    <!--Reference: https://codesandbox.io/s/vue-js-tabs-d0zn6?file=/src/components/AppTabs.vue -->
    <div
        :class="{
        'flex space-x-4': variant === 'horizontal',
        }"
    >
        <ul
        class="list-none bg-opacity-30 p-1.5 rounded-lg text-center overflow-auto whitespace-nowrap"
        :class="{
            'flex items-center': variant === 'vertical',
        }"
        >
            <li
                v-for="(tab, index) in tabList"
                :key="index"
                class="mr-2 p-1.5 font-bold"
                :class="{
                'text-black bg-white shadow-xl border-b-4 border-blue-400': index + 1 === activeTab,
                'text-gray-400': index + 1 !== activeTab,
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
                @click="scrollTo(tab)"
                />
            </li>
        </ul>
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
        methods: {
            scrollTo(tab) {
                const element = document.getElementById(tab);
                if (element) {
                    const elementRect = element.getBoundingClientRect();
                    const offsetTop = elementRect.top;
                    const offsetLeft = elementRect.left;

                    // 計算偏移後的目標位置
                    const targetTop = offsetTop + window.pageYOffset - 96;
                    const targetLeft = offsetLeft + window.pageXOffset;

                    // 平滑滾動到目標位置
                    window.scrollTo({
                        top: targetTop,
                        left: targetLeft,
                        behavior: 'smooth'
                    });
                }
            }
        }
    };

</script>

<style scoped>

</style>
