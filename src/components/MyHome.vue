<template>
  <Navbar :tableNum="tableNum" :title="pageTitle" isHomePage="false" v-show="showSlider" id="navbar"/>
  <Slider v-if="showSlider" />
  <MyMenu :manuData="manuData" v-if="!showSlider" /> 
  <button class="center start-ordering" @click="switchDisplay(false)" v-show="showSlider">Start Ordering</button> 
</template>

<script>
  import Slider from './Carousel.vue';
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
                                OptionButtonType:2,//0=empty, 1=check box, 2=radio button
                                OptionRequirement:1,//0=option, 1=required
                                OptionKey:1,//1=辣度選擇,2=加購,3=備註
                                OptionMemo:"Please Select 1 option",
                                OptionVaule:[{
                                  OptionValueName:"不辣",
                                  OptionValueKey:"1",
                                  OptionExtend:0,//0=empty, 1=count, 2=textbox
                                  OptionPrice:""
                                },{
                                  OptionValueName:"小辣",
                                  OptionValueKey:"2",
                                  OptionExtend:0,//0=empty, 1=count, 2=textbox
                                  OptionPrice:""
                                },{
                                  OptionValueName:"中辣",
                                  OptionValueKey:"3",
                                  OptionExtend:0,//0=empty, 1=count, 2=textbox
                                  OptionPrice:""
                                },{
                                  OptionValueName:"大辣",
                                  OptionValueKey:"4",
                                  OptionExtend:0,//0=empty, 1=count, 2=textbox
                                  OptionPrice:""
                                }]
                              },
                              {
                                OptionButtonType:1,//0=empty, 1=check box, 2=radio button
                                OptionRequirement:0,//0=option, 1=required
                                OptionKey:2,//1=辣度選擇,2=加購,3=備註
                                OptionMemo:"Recommendation",
                                OptionVaule:[{
                                  OptionValueName:"Coca Cola",
                                  OptionValueKey:"1",
                                  OptionExtend:0,//0=empty, 1=count, 2=textbox
                                  OptionPrice:30
                                },{
                                  OptionValueName:"Apple Sidra",
                                  OptionValueKey:"2",
                                  OptionExtend:0,//0=empty, 1=count, 2=textbox
                                  OptionPrice:40
                                },{
                                  OptionValueName:"Pepsi",
                                  OptionValueKey:"3",
                                  OptionExtend:0,//0=empty, 1=count, 2=textbox
                                  OptionPrice:50
                                },{
                                  OptionValueName:"Sprite",
                                  OptionValueKey:"4",
                                  OptionExtend:0,//0=empty, 1=count, 2=textbox
                                  OptionPrice:60
                                }]
                              },
                              {
                                OptionButtonType:1,//0=empty, 1=check box, 2=radio button
                                OptionRequirement:0,//0=option, 1=required
                                OptionKey:2,//1=辣度選擇,2=加購,3=備註
                                OptionMemo:"若超過10人享用,請加選用餐人數",
                                OptionVaule:[{
                                  OptionValueName:"增加人數",
                                  OptionValueKey:"1",
                                  OptionExtend:1,//0=empty, 1=count, 2=textbox
                                  OptionPrice:200
                                }]
                              }
                            ]
                        },
                        {
                            title: "主廚特調乾拉麵",
                            DishKey:"recommend_2",
                            unit: "一份",
                            imgPath: "../src/image",
                            price: 100,
                            Options: [
                              {
                                OptionButtonType:2,//0=empty, 1=check box, 2=radio button
                                OptionRequirement:1,//0=option, 1=required
                                OptionKey:1,//1=辣度選擇,2=加購,3=備註
                                OptionMemo:"Please Select 1 option",
                                OptionVaule:[{
                                  OptionValueName:"不辣",
                                  OptionValueKey:"1",
                                  OptionExtend:0,//0=empty, 1=count, 2=textbox
                                  OptionPrice:""
                                },{
                                  OptionValueName:"小辣",
                                  OptionValueKey:"2",
                                  OptionExtend:0,//0=empty, 1=count, 2=textbox
                                  OptionPrice:""
                                },{
                                  OptionValueName:"中辣",
                                  OptionValueKey:"3",
                                  OptionExtend:0,//0=empty, 1=count, 2=textbox
                                  OptionPrice:""
                                },{
                                  OptionValueName:"大辣",
                                  OptionValueKey:"4",
                                  OptionExtend:0,//0=empty, 1=count, 2=textbox
                                  OptionPrice:""
                                }]
                              },
                              {
                                OptionButtonType:1,//0=empty, 1=check box, 2=radio button
                                OptionRequirement:0,//0=option, 1=required
                                OptionKey:2,//1=辣度選擇,2=加購,3=備註
                                OptionMemo:"Recommendation",
                                OptionVaule:[{
                                  OptionValueName:"Coca Cola",
                                  OptionValueKey:"1",
                                  OptionExtend:0,//0=empty, 1=count, 2=textbox
                                  OptionPrice:30
                                },{
                                  OptionValueName:"Apple Sidra",
                                  OptionValueKey:"2",
                                  OptionExtend:0,//0=empty, 1=count, 2=textbox
                                  OptionPrice:40
                                },{
                                  OptionValueName:"Green Tea",
                                  OptionValueKey:"3",
                                  OptionExtend:0,//0=empty, 1=count, 2=textbox
                                  OptionPrice:50
                                }]
                              },
                              {
                                OptionButtonType:1,//0=empty, 1=check box, 2=radio button
                                OptionRequirement:0,//0=option, 1=required
                                OptionKey:2,//1=辣度選擇,2=加購,3=備註
                                OptionMemo:"若超過10人享用,請加選用餐人數",
                                OptionVaule:[{
                                  OptionValueName:"增加人數",
                                  OptionValueKey:"1",
                                  OptionExtend:1,//0=empty, 1=count, 2=textbox
                                  OptionPrice:200
                                }]
                              },
                              {
                                OptionButtonType:0,//0=empty, 1=check box, 2=radio button
                                OptionRequirement:0,//0=option, 1=required
                                OptionKey:3,//1=辣度選擇,2=加購,3=備註
                                OptionMemo:"如有任何需求或打包服務請備註",
                                OptionVaule:[{
                                  OptionValueName:"",
                                  OptionValueKey:"1",
                                  OptionExtend:2,//0=empty, 1=count, 2=textbox
                                  OptionPrice:""
                                }]
                              }
                            ]
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
                        {
                            title: "經典炸物",
                            DishKey:"side_2",
                            unit: "一份5個",
                            imgPath: "../src/image",
                            price: 80
                        },
                        {
                            title: "經典炸物",
                            DishKey:"side_3",
                            unit: "一份5個",
                            imgPath: "../src/image",
                            price: 80
                        },{
                            title: "經典炸物",
                            DishKey:"side_4",
                            unit: "一份5個",
                            imgPath: "../src/image",
                            price: 80
                        }
                    ]
                },
                {
                    TabName: "a la carte - Rice",
                    Dishes : [
                        {
                            title: "經典炸物",
                            DishKey:"rice_1",
                            unit: "一份5個",
                            imgPath: "../src/image",
                            price: 80
                        }
                    ]
                },
                {
                    TabName: "a la carte - Noodle",
                    Dishes : [
                        {
                            title: "經典炸物",
                            DishKey:"noodle_1",
                            unit: "一份5個",
                            imgPath: "../src/image",
                            price: 80
                        }
                    ]
                },
                {
                    TabName: "a la carte - Soup",
                    Dishes : [
                        {
                            title: "經典炸物",
                            DishKey:"soup_1",
                            unit: "一份5個",
                            imgPath: "../src/image",
                            price: 80
                        }
                    ]
                },
                {
                    TabName: "a la carte - Beverage",
                    Dishes : [
                        {
                            title: "經典炸物",
                            DishKey:"beverage_1",
                            unit: "一份5個",
                            imgPath: "../src/image",
                            price: 80
                        }
                    ]
                }
              ]
            },
          ]          
        }
      },
      components: {
        Slider,
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