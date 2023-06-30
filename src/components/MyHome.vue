<template>
  <Slider v-if="showSlider" />
  <MyMenu :manuData="manuData" v-if="!showSlider" /> 
  <button class="center" @click="switchDisplay(false)" v-show="showSlider">Start Ordering</button> 
</template>

<script>
  import Slider from './Carousel.vue';
  import MyMenu from './menu/MyMenu.vue';

  export default {
      name: "my-home",
      data() {
        return {
          showSlider: true,
          manuData: [
            {
                TabName: "Recommendation",
                Dishes : [
                    {
                        title: "招牌蛋炒飯",
                        unit: "一份",
                        imgPath: "../src/image",
                        price: 90
                    },
                    {
                        title: "主廚特調乾拉麵",
                        unit: "一份",
                        imgPath: "../src/image",
                        price: 100
                    },
                    {
                        title: "綜合天婦羅",
                        unit: "大蝦天婦羅*3、地瓜天婦羅*3、蔬菜天婦羅*3 一份9個",
                        imgPath: "../src/image",
                        price: 200
                    },{
                        title: "當日特選餐",
                        unit: "每日特選餐點不同，請至櫃檯詢問謝謝",
                        imgPath: "../src/image",
                        price: 0
                    }
                ]
            },
            {
                TabName: "Classic Combo",
                Dishes : [
                    {
                        title: "單人套餐",
                        unit: "一份主餐+經典炸物+湯品/飲品 二選一",
                        imgPath: "../src/image",
                        price: 230
                    },
                    {
                        title: "雙人套餐",
                        unit: "主餐*2+經典炸物*2+湯品*2+飲品*2",
                        imgPath: "../src/image",
                        price: 420
                    },
                    {
                        title: "四人套餐",
                        unit: "主餐*4+經典炸物*4+湯品*4+飲品*4",
                        imgPath: "../src/image",
                        price: 800
                    },{
                        title: "六人套餐",
                        unit: "主餐*6+經典炸物*6+湯品*6+飲品*6",
                        imgPath: "../src/image",
                        price: 1180
                    }
                ]
            },
            {
                TabName: "a la carte - Side Dish",
                Dishes : [
                    {
                        title: "經典炸物",
                        unit: "一份5個",
                        imgPath: "../src/image",
                        price: 80
                    },
                    {
                        title: "經典炸物",
                        unit: "一份5個",
                        imgPath: "../src/image",
                        price: 80
                    },
                    {
                        title: "經典炸物",
                        unit: "一份5個",
                        imgPath: "../src/image",
                        price: 80
                    },{
                        title: "經典炸物",
                        unit: "一份5個",
                        imgPath: "../src/image",
                        price: 80
                    }
                ]
            },
          ],          
        }
      },
      components: {
        Slider,
        MyMenu
      },
      // computed: {
      //   showA() {
      //     return this.display === DisplayEnum.AEnum;
      //   },
      //   showB() {
      //     return this.display === DisplayEnum.BEnum;
      //   },
      //   showC() {
      //     return this.display === DisplayEnum.CEnum;
      //   }
      // },
      methods: {
        switchDisplay(value) {
          this.showSlider = value;
        }
      }
  };
</script>

<style scoped>
.center {
  margin: 0;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width:150px;
  height:50px;
}
</style>