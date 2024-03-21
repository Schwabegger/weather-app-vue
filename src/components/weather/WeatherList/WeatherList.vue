<template>
  <h3 class="header">{{ forecastheader }}</h3>
  <!-- <div>
    <WeatherListItem v-for="item in forecast" :key="item.id" :weather="item" />
  </div> -->
  <div class="forecast-list">
    <WeatherListItem v-for="item in forecast" :weatherItem="item" />
  </div>
</template>

<script>
import { PropType } from 'vue';
import WeatherItem from './WeatherListItem/WeatherItem.ts';
import WeatherListItem from './WeatherListItem/WeatherListItem.vue';

export default {
  name: 'WeatherList',
  props: {
    forecast: {
      type: Array as PropType<WeatherItem[]>,
      required: true
    }
  },
  components: {
    WeatherListItem
  }
}
</script>