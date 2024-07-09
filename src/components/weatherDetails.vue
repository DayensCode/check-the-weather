<template>
  <h3 class="reused-title">Weather Details...</h3>
  <div class="details">
    <h3 class="title">{{ data.value.current.condition.text }}</h3>
    <ul class="list">
      <li class="list-item mute" v-for="(item) in weatherData">
        {{  item.name  }}
        <span class="list-item-value">{{ item.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'WeatherDetails',
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  setup(props) {
    const weatherData = computed(() => {
      const tempMax = { name: 'Temp max', value: `${Math.round(props.data.value.forecast.forecastday[0].day.maxtemp_c)}°`}
      const tempMin = { name: 'Temp min', value: `${Math.round(props.data.value.forecast.forecastday[0].day.mintemp_c)}°`}
      const humidity = { name: 'Humidity', value: `${props.data.value.current.humidity}%`}
      const cloudy = { name: 'Cloudy', value: `${props.data.value.current.cloud}%`}
      const wind = { name: 'Wind', value: `${Math.round(props.data.value.current.wind_kph)}km/h`}

      return [tempMax, tempMin, humidity, cloudy, wind]
    })

    return {
      weatherData,
    }
  },
})
</script>

<style scoped>
.details {
  padding-bottom: 86px;
  margin-bottom: 40px;
  border-bottom: 1px solid #FFFFFF; 
}

.title {
  text-transform: uppercase;
  font-size: 18px;
  padding-bottom: 30px;
}

.list-item {
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
}

.list-item:last-of-type {
  padding-bottom: 0;
}

.list-item-value {
  color: #FFFFFF;
}

.icon-cloudy-styled {
  width: 26px;
  height: 26px;
}
</style>
