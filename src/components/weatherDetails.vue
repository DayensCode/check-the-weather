<template>
  <h3 class="reused-title">Weather Details...</h3>
  <div class="details">
    <h3 class="title">{{ data.value.current.condition.text }}</h3>
    <ul class="list">
      <li class="list-item mute">
        Temp max
        <div class="icon-wrapper">
          <span class="list-item-value">{{ rounded[0] }}°</span>
          <img alt="" src="@/assets/icons/IconMax.svg" />
        </div>
      </li>
      <li class="list-item mute">
        Temp min
        <div class="icon-wrapper">
          <span class="list-item-value">{{ rounded[1] }}°</span>
          <img alt="" src="@/assets/icons/IconMin.svg" />
        </div>
      </li>
      <li class="list-item mute">
        Humidity
        <div class="icon-wrapper">
          <span class="list-item-value">{{ data.value.current.humidity }}%</span>
          <img alt="" src="@/assets/icons/IconHumidity.svg" />
        </div>
      </li>
      <li class="list-item mute">
        Cloudy
        <div class="icon-wrapper">
          <span class="list-item-value">{{ data.value.current.cloud }}%</span>
          <img alt="" class="icon-cloudy-styled" src="@/assets/icons/IconCloudy.svg" />
        </div>
      </li>
      <li class="list-item mute">
        Wind
        <div class="icon-wrapper">
          <span class="list-item-value">{{ rounded[2] }}km/h</span>
          <img alt="" src="@/assets/icons/IconWind.svg" />
        </div>
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
    const rounded = computed(() => {
      const windSpeed = props.data.value.current.wind_kph
      const maxTemp = props.data.value.forecast.forecastday[0].day.maxtemp_c
      const minTemp = props.data.value.forecast.forecastday[0].day.mintemp_c
      const roundedWind = Math.round(windSpeed)
      const roundedMaxTemp = Math.round(maxTemp)
      const roundedMinTemp = Math.round(minTemp)
      return [roundedMaxTemp, roundedMinTemp, roundedWind]
    })

    return {
      rounded,
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

.icon-wrapper {
  display: flex;
  align-items: center;
  gap: 22px;
}

.icon-cloudy-styled {
  width: 26px;
  height: 26px;
}
</style>
