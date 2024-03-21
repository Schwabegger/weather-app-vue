<template>
  <div class="weather-list-item">
    <img :src="weatherItem.icon" alt="Weather icon" />
    <div class="weather-list-item__day">{{ weatherItem.day }}</div>
    <div class="weather-list-item__temp">
      <span>{{ weatherItem.tempmin }}°{{ weatherItem.unit }}</span>
      <span> - </span>
      <span>{{ weatherItem.tempmax }}°{{ weatherItem.unit }}</span>
    </div>
  </div>
</template>

<script>
import { WeatherItem } from './WeatherItem.ts';

export default
  {
    name: 'WeatherListItem',
    props: {
      weatherItem: WeatherItem
    }
  }
</script>

<style scoped>
.weather-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.weather-list-item__day {
  font-size: 1.5em;
}

.weather-list-item__temp {
  font-size: 1.5em;
}

.weather-list-item img {
  width: 50px;
  height: 50px;
}
</style>