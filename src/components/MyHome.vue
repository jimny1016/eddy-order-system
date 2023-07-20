<template>
  <Navbar :tableNum="tableNum" :title="pageTitle" isHomePage="false" v-show="showSlider" id="navbar"/>
  <MyCarousel v-if="showSlider" @showMyMenu="switchDisplay"/>
  <MyMenu :manuData="manuData" v-if="!showSlider" /> 
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
                      isCombo: false,
                      Options: [
                        {
                          Type:2,//1=check box, 2=radio button, 3=textBox, 4=count, 5=combo
                          Requirement:true,//0=option, 1=required
                          Key:1,
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
                          Type:4,
                          Requirement:false,
                          Key:3,
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
                          Type:3,
                          Requirement:false,
                          Key:4,
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
                        isCombo: false
                    },
                    {
                        title: "綜合天婦羅",
                        DishKey:"recommend_3",
                        unit: "大蝦天婦羅*3、地瓜天婦羅*3、蔬菜天婦羅*3 一份9個",
                        imgPath: "../src/image",
                        price: 200,
                        isCombo: false
                    },{
                        title: "當日特選餐",
                        DishKey:"recommend_4",
                        unit: "每日特選餐點不同，請至櫃檯詢問謝謝",
                        imgPath: "../src/image",
                        price: 0,
                        isCombo: false
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
                        price: 230,
                        isCombo: true,
                        Options: [
                          {
                            Type:5,
                            Requirement:true,
                            Key:1,
                            Name:"主餐1選擇",
                            Memo:"Please Select 1 option",
                            OptionVaules:[
                              {
                                title: "招牌蛋炒飯",
                                DishKey:"recommend_1",
                                unit: "一份",
                                imgPath: "../src/image",
                                price: 90,
                                BeChoise:false,
                                Options: [
                                  {
                                    Type:2,
                                    Requirement:true,
                                    Key:1,
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
                                    Type:3,
                                    Requirement:false,
                                    Key:4,
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
                                BeChoise:false,
                              },
                              {
                                title: "綜合天婦羅",
                                DishKey:"recommend_3",
                                unit: "大蝦天婦羅*3、地瓜天婦羅*3、蔬菜天婦羅*3 一份9個",
                                imgPath: "../src/image",
                                price: 200,
                                BeChoise:false,
                              },{
                                title: "當日特選餐",
                                DishKey:"recommend_4",
                                unit: "每日特選餐點不同，請至櫃檯詢問謝謝",
                                imgPath: "../src/image",
                                price: 0,
                                BeChoise:false,
                              }
                            ]
                          },
                          {
                            Type:5,
                            Requirement:true,
                            Key:2,
                            Name:"炸物1選擇",
                            Memo:"Please Select 1 option",
                            OptionVaules:[
                              {
                                title: "炸鹹酥雞",
                                DishKey:"recommend_1",
                                unit: "一份",
                                imgPath: "../src/image",
                                price: 0,
                                Options: [
                                  {
                                    Type:2,
                                    Requirement:true,
                                    Key:1,
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
                                    Type:3,
                                    Requirement:false,
                                    Key:4,
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
                                title: "炸魷魚",
                                DishKey:"recommend_2",
                                unit: "一份",
                                imgPath: "../src/image",
                                price: 10,
                                Options: [
                                  {
                                    Type:2,
                                    Requirement:true,
                                    Key:1,
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
                                    Type:3,
                                    Requirement:false,
                                    Key:4,
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
                            ]
                          },
                          {
                            Type:5,
                            Requirement:true,
                            Key:3,
                            Name:"湯品/飲料 1選擇",
                            Memo:"Please Select 1 option",
                            OptionVaules:[
                              {
                                title: "主廚濃湯",
                                DishKey:"recommend_1",
                                unit: "一份",
                                imgPath: "../src/image",
                                price: 0,
                                Options: [
                                  {
                                    Type:2,
                                    Requirement:true,
                                    Key:1,
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
                                    Type:3,
                                    Requirement:false,
                                    Key:4,
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
                                title: "精選紅茶",
                                DishKey:"recommend_2",
                                unit: "一杯",
                                imgPath: "../src/image",
                                price: 10,
                                Options: [
                                  {
                                    Type:2,
                                    Requirement:true,
                                    Key:1,
                                    Name:"冰量選擇",
                                    Memo:"Please Select 1 option",
                                    OptionVaules:[{
                                      ValueName:"去冰",
                                      ValueKey:"1",
                                      Price:0,
                                      BeChoise:false,
                                      Content:""
                                    },{
                                      ValueName:"少冰",
                                      ValueKey:"2",
                                      Price:0,
                                      BeChoise: false,
                                      Content:""
                                    },{
                                      ValueName:"正常冰",
                                      ValueKey:"3",
                                      Price:0,
                                      BeChoise: false,
                                      Content:""
                                    }]
                                  },
                                  {
                                    Type:3,
                                    Requirement:false,
                                    Key:4,
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
                            ]
                          },
                        ]
                    },
                    {
                        title: "雙人套餐",
                        DishKey:"classic_2",
                        unit: "主餐*2+經典炸物*2+湯品*2+飲品*2",
                        imgPath: "../src/image",
                        price: 420,
                        isCombo: true
                    },
                    {
                        title: "四人套餐",
                        DishKey:"classic_3",
                        unit: "主餐*4+經典炸物*4+湯品*4+飲品*4",
                        imgPath: "../src/image",
                        price: 800,
                        isCombo: true
                    },{
                        title: "六人套餐",
                        DishKey:"classic_4",
                        unit: "主餐*6+經典炸物*6+湯品*6+飲品*6",
                        imgPath: "../src/image",
                        price: 1180,
                        isCombo: true
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
                          price: 80,
                          isCombo: false
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
                          price: 80,
                          isCombo: false
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
                          price: 80,
                          isCombo: false
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
                          price: 80,
                          isCombo: false
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
  #navbar {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 9999;
    /* 其他樣式屬性... */
  }

</style>