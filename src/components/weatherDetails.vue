<template>
  <h3 class="reused-title">Weather Details...</h3>
  <div class="details">
    <h3 class="title">гроза с небольшой моросью</h3>
    <ul class="list">
      <li class="list-item mute">
        Temp max
        <div class="icon-wrapper">
          <span class="list-item-value">19°</span>
          <img alt="" src="@/assets/icons/IconMax.svg" />
        </div>
      </li>
      <li class="list-item mute">
        Temp min
        <div class="icon-wrapper">
          <span class="list-item-value">15°</span>
          <img alt="" src="@/assets/icons/IconMin.svg" />
        </div>
      </li>
      <li class="list-item mute">
        Humadity
        <div class="icon-wrapper">
          <span class="list-item-value">58%</span>
          <img alt="" src="@/assets/icons/IconHumadity.svg" />
        </div>
      </li>
      <li class="list-item mute">
        Cloudy
        <div class="icon-wrapper">
          <span class="list-item-value">86%</span>
          <img alt="" class="icon-cloudy-styled" src="@/assets/icons/IconCloudy.svg" />
        </div>
      </li>
      <li class="list-item mute">
        Wind
        <div class="icon-wrapper">
          <span class="list-item-value">5km/h</span>
          <img alt="" src="@/assets/icons/IconWind.svg" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherDetails',
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
