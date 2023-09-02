<template>
    <div :class="[firstLayerClass]" class="w-full h-full lg:h-screen bg-center bg-clip-border bg-cover bg-no-repeat relative">
        <div :class="[secondLayerClass]" class="relative w-full h-full">
            <img :src="getImagePath(imagePath)" :class="[imageClass]" class="object-cover w-full h-full" alt="" />
        </div>
    </div>
</template>
  
<script>
import { IMAGE_PATH } from '../../script/config.js';
  export default {
    name: "MyImage",
    data() {
      return{
        imgPath:IMAGE_PATH
      };
    },
    props: {
      imagePath: {
        type: String,
        required: true
      },
      firstLayerClass: {
        type: String,
        default: ''
      },
      secondLayerClass: {
        type: String,
        default: ''
      },
      imageClass: {
        type: String,
        default: ''
      }
    },
    methods: {
      getImagePath(path) {
        //return "http://localhost:8080/" + path;
        return `${this.imgPath}`+ path;
      }
    }
  }
  </script>