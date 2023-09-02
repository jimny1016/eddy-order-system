<template>
  <div v-if="!isLoading">
    <Navbar :tableNum="tableNum" :title="pageTitle" isHomePage="false" v-show="showSlider" id="navbar"/>
    <MyCarousel v-if="showSlider" @showMyMenu="switchDisplay"/>
    <MyMenu :manuData="manuData" v-if="!showSlider" /> 
  </div>
</template>

<script>
  import MyCarousel from './MyCarousel.vue';
  import MyMenu from './menu/MyMenu.vue';
  import Navbar from './navigationHeaderBar/NavigationHeaderBar.vue';
  import axios from 'axios';
  import { GET_API_URL } from '../script/config.js';

  export default {
      name: "my-home",
      data() {
        return {
          getApiUrl:GET_API_URL,
          showSlider: true,
          manuData: null,
          isLoading: true,
        }
      },
      created () {
        console.log('created');
        this.makeGetRequest();
      },
      components: {
        MyCarousel,
        MyMenu,
        Navbar
      },
      computed:{
        tableNum(){
            return this.manuData[0].tableNum;
        },
        pageTitle() {
          return this.manuData[0].pageTitle;
        }
      },
      methods: {
        switchDisplay(value) {
          this.showSlider = value;
          this.isHomePage = false;
        },
        makeGetRequest() {
          //http://localhost:5126/weatherforecast/GetWeatherForecast2
          axios.get(`${this.getApiUrl}`)
            .then(response => {
              console.log(response.data);
              this.manuData = [response.data];
              this.isLoading = false;
            })
            .catch(error => {
              console.error(error);
            });
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