<template>
  <div>
    <button @click="makeGetRequest">發送 GET 請求</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
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