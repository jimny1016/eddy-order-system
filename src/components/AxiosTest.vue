<template>
  <div>
    <button @click="makePostRequest">發送 POST 請求</button>
    <button @click="makeGetRequest">發送 GET 請求</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    makePostRequest(){
      const data ={neme:'John', age:25};
      //'http://eddy123.com.tw/api/{controller}/{action}'
      axios.post('http://localhost:5126/weatherforecast/ReceiveData',data)
      .then(response=>{console.log(response.data)})
      .catch(error=>{console.error(error);});
    },
    makeGetRequest() {
      axios.get('http://localhost:5126/weatherforecast/GetWeatherForecast2')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>