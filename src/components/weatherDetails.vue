<template>
  <h3 class="title">Weather Details...</h3>
  <div class="details">
    <h3>{{ data.value.current.condition.text }}</h3>
    <ul class="list">
      <li class="mute" v-for="(item) in weatherData">
        {{  item.name  }}
        <span>{{ item.value }}</span>
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

<style lang="scss" scoped>
.details {
  padding-bottom: 86px;
  margin-bottom: 40px;
  border-bottom: 1px solid #FFFFFF;

  h3 {
    text-transform: uppercase;
    font-size: 18px;
    padding-bottom: 30px;
  }

  li {
    padding-bottom: 30px;
    display: flex;
    justify-content: space-between;

    &:last-of-type {
      padding-bottom: 0;
    }

    span {
      color: #FFFFFF;
    }
  }
}
</style>
