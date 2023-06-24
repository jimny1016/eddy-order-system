<template>

    <div>
        <div class="container mx-auto">
            <ul>
                <li><a href="#" class="navbar-brand">{{tableNum}}</a></li>
                <li><a href="#" class="navbar-brand">{{title}}</a></li>
                <li classs="li-cart"><a href="#" class="navbar-cart"><span class="cart"><font-awesome-icon icon="cart-shopping" style="color: #1e90ff;" size="xl" /></span></a></li>
                <li class="li-lng"><a href="#" class="navbar-lng"><span class="lng"><font-awesome-icon icon="globe" style="color: #1e90ff;" size="xl" /></span></a></li>
            </ul>
        </div>
    </div>

    </template>
    
<script>
    export default {
        name: 'NavigationHeaderBar',
        props: {
            tableNum: {
                type: Number,
                required: true,
            },
            title:{
                type: String,
                required: true,
            }
        },
        data() {
            return {
            collapsed: true,
            };
        },
        template: `<div class="responsive-nav visible-xs visible-sm" v-bind:class="{collapsed: collapsed}">
                <a class="navbar-brand" v-on:click="toggleActive(!collapsed)">
                    {{triggerText}}
                </a><slot v-on:click="toggleActive(false)"></slot></div>`,
        computed: {
            triggerText() {
            return this.collapsed && 'Menu' || 'Close';
            },
        },
        methods: {
            toggleActive(flag) {
            this.collapsed = flag;
            },
        },
    };

    
</script>
    
<style scoped>

    ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: visible;
    }

    li {
        float: left;   
    }

    li a {
    display: block;
    margin: 0;
    padding: 10px;
    background-color: #dddddd;
    }
    
    span.lng{
        text-align: right;
        }
    span.cart{
        text-align: right;    
    }
</style>