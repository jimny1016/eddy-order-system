<template>
    <div>
      <ComponentA v-if="showA"  @button-click="toggleView($event)"/>
      <!-- <button @click="$emit('button-click', 'Hello from Component A')">Switch to Component B</button> -->
      <ComponentB v-else-if="showB"  @button-click="toggleView($event)"/>
      <ComponentC v-else-if="showC"  @button-click="toggleView($event)"/>
    </div>
  </template>
  
  <script>
  import ComponentA from './ComponentA.vue';
  import ComponentB from './ComponentB.vue';
  import ComponentC from './ComponentC.vue';
  
  const DisplayEnum = {
    AEnum: 'AEnum',
    BEnum: 'BEnum',
    CEnum: 'CEnum',
  }
  
  export default {
    name: 'ParentComponent',
    components: {
      ComponentA,
      ComponentB,
      ComponentC
    },
    data() {
      return {
        display: DisplayEnum.AEnum, // or BEnum, or CEnum
      }
    },
    computed: {
      showA() {
        return this.display === DisplayEnum.AEnum;
      },
      showB() {
        return this.display === DisplayEnum.BEnum;
      },
      showC() {
        return this.display === DisplayEnum.CEnum;
      }
    },
    methods: {
      switchDisplay(value) {
        this.display = value;
      }
    }
  }
  </script>