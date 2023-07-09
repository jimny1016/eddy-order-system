<template>
    <a href="#" class="return-menu">
        <span class="return">
            <font-awesome-icon icon="circle-arrow-left" style="color: #1e90ff;" size="xl" />
        </span>
    </a>
    <h1>Shopping Cart</h1> 
    {{ tablenumber }}
    <div id="shopping_cart">
        <div class="count">
            <button @click="handleSub(item)">-</button>
                {{item.count}}
            <button @click="handlePlus(item)">+</button>
        </div> 
        <div class="item_header">
            {{ quantity }}
            {{ dish }}
            {{ detail }}
            {{ price }}
        </div>
    </div>
    <h5>Total Price</h5>${{  }}
    <button @click="backtomenu()">Add new meal</button>
    <button @click="neworder()">Place an Order</button>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        methods: {
            handlePlus(item) {
            item.count++;
            },
            handleSub(item) {
            if (item.count > 1) {
                item.count--;
            }
            },
            handleDelete(item) {
                if(item.count==0){
                    this.itemList.splice(item.count, 1);
                }
            },
            backtomenu(){

            },
            neworder(){

            },
        },
        computed: {

        },
    };
</script>

<style scoped>

</style>