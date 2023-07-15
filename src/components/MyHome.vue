<template>
  <Navbar :tableNum="tableNum" :title="pageTitle" isHomePage="false" v-show="showSlider" id="navbar"/>
  <MyCarousel v-if="showSlider" />
  <MyMenu :manuData="manuData" v-if="!showSlider" /> 
  <button class="center start-ordering" @click="switchDisplay(false)" v-show="showSlider">Start Ordering</button> 
</template>

<script>
  import MyCarousel from './MyCarousel.vue';
  import MyMenu from './menu/MyMenu.vue';
  import Navbar from './navigationHeaderBar/NavigationHeaderBar.vue';
  export default {
      name: "my-home",
      data() {
        return {
          showSlider: true,
          manuData: [
            {
              SessionID:"",
              TableNum:3,
              PageTitle:"Welcom to xxx restaurant",
              Display:[
                {
                  TabName: "Recommendation",
                  Dishes : [
                    {
                        title: "招牌蛋炒飯",
                        DishKey:"recommend_1",
                        unit: "一份",
                        imgPath: "../src/image",
                        price: 90,
                        Options: [
                          {
                            Type:2,//1=check box, 2=radio button, 3=textBox, 4=count
                            Requirement:true,//0=option, 1=required
                            Key:1,//1=辣度選擇,2=加購,3=備註
                            Name:"辣度選擇",
                            Memo:"Please Select 1 option",
                            OptionVaules:[{
                              ValueName:"不辣",
                              ValueKey:"1",
                              Price:0,
                              BeChoise:false,
                              Content:""
                            },{
                              ValueName:"小辣",
                              ValueKey:"2",
                              Price:0,
                              BeChoise: false,
                              Content:""
                            },{
                              ValueName:"中辣",
                              ValueKey:"3",
                              Price:0,
                              BeChoise: false,
                              Content:""
                            },{
                              ValueName:"大辣",
                              ValueKey:"4",
                              Price:0,
                              BeChoise: false,
                              Content:""
                            }]
                          },
                          {
                            Type:1,
                            Requirement:false,
                            Key:2,
                            Name:"加購",
                            Memo:"Recommendation",
                            OptionVaules:[{
                              ValueName:"Coca Cola",
                              ValueKey:"1",
                              Price:30,
                              BeChoise:false,
                              Content:""
                            },{
                              ValueName:"Apple Sidra",
                              ValueKey:"2",
                              Price:40,
                              BeChoise: false,
                              Content:""
                            },{
                              ValueName:"Pepsi",
                              ValueKey:"3",
                              Price:50,
                              BeChoise: false,
                              Content:""
                            },{
                              ValueName:"Sprite",
                              ValueKey:"4",
                              Price:60,
                              BeChoise: false,
                              Content:""
                            }]
                          },
                          {
                            Type:4,//1=check box, 2=radio button, 3=textBox, 4=count
                            Requirement:false,//0=option, 1=required
                            Key:3,//1=辣度選擇,2=加購,3=備註
                            Name:"加購",
                            Memo:"若超過10人享用,請加選用餐人數",
                            OptionVaules:[{
                              ValueName:"增加人數",
                              ValueKey:"1",
                              Price:200,
                              BeChoise:false,
                              Content:"0"
                            }]
                          },
                          {
                            Type:3,//1=check box, 2=radio button, 3=textBox, 4=count
                            Requirement:false,//0=option, 1=required
                            Key:4,//1=辣度選擇,2=加購,3=備註
                            Name:"備註",
                            Memo:"如有任何需求或打包服務請備註",
                            OptionVaules:[{
                              ValueName:"備註",
                              ValueKey:"1",
                              Price:0,
                              BeChoise:false,
                              Content:""
                            }]
                          },
                        ]
                    },
                    {
                        title: "主廚特調乾拉麵",
                        DishKey:"recommend_2",
                        unit: "一份",
                        imgPath: "../src/image",
                        price: 100,
                    },
                    {
                        title: "綜合天婦羅",
                        DishKey:"recommend_3",
                        unit: "大蝦天婦羅*3、地瓜天婦羅*3、蔬菜天婦羅*3 一份9個",
                        imgPath: "../src/image",
                        price: 200
                    },{
                        title: "當日特選餐",
                        DishKey:"recommend_4",
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
                        DishKey:"classic_1",
                        unit: "一份主餐+經典炸物+湯品/飲品 二選一",
                        imgPath: "../src/image",
                        price: 230
                    },
                    {
                        title: "雙人套餐",
                        DishKey:"classic_2",
                        unit: "主餐*2+經典炸物*2+湯品*2+飲品*2",
                        imgPath: "../src/image",
                        price: 420
                    },
                    {
                        title: "四人套餐",
                        DishKey:"classic_3",
                        unit: "主餐*4+經典炸物*4+湯品*4+飲品*4",
                        imgPath: "../src/image",
                        price: 800
                    },{
                        title: "六人套餐",
                        DishKey:"classic_4",
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
                          DishKey:"side_1",
                          unit: "一份5個",
                          imgPath: "../src/image",
                          price: 80
                      },
                  ]
                },
                {
                  TabName: "a la carte - Rice",
                  Dishes : [
                      {
                          title: "經典炸物",
                          DishKey:"side_1",
                          unit: "一份5個",
                          imgPath: "../src/image",
                          price: 80
                      },
                  ]
                },
                {
                  TabName: "a la carte - Noodles",
                  Dishes : [
                      {
                          title: "經典炸物",
                          DishKey:"side_1",
                          unit: "一份5個",
                          imgPath: "../src/image",
                          price: 80
                      },
                  ]
                },
                {
                  TabName: "a la carte - Soup",
                  Dishes : [
                      {
                          title: "經典炸物",
                          DishKey:"side_1",
                          unit: "一份5個",
                          imgPath: "../src/image",
                          price: 80
                      },
                  ]
                }
              ]
            }
          ]          
        }
      },
      components: {
        MyCarousel,
        MyMenu,
        Navbar
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
      computed:{
        tableNum(){
            return this.manuData[0].TableNum;
        },
        pageTitle() {
          return this.manuData[0].PageTitle;
        }
      },
      methods: {
        switchDisplay(value) {
          this.showSlider = value;
          this.isHomePage = false;
        }
      }
  };
</script>

<style scoped>
.center {
  margin: 0;
  /* position: absolute; */
  position: fixed;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width:150px;
  height:50px;
  bottom: 20px; /* 距離頁面底部的距離 */
}
#navbar {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  /* 其他樣式屬性... */
}

.start-ordering {
  background-color: #1e90ff;
  color: white;
  border: 2px solid #1e90ff;
  border-radius: 5px;
  padding: 10px;
}

Slider {
  margin-top: 60px; /* 根據NavigationHeaderBar的高度調整 */
}
</style>