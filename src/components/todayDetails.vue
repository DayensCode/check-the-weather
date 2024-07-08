<template>
  <div class="today">
    <h3 class="reused-title">Today’s Weather Forecast...</h3>
    <ul class="list">
      <li class="today-list-item" v-for="item in hoursValues.values">
        <div class="today-icon-wrapper">
          <img alt="" :src="item.src" />
          <div class="info-wrapper">
            <span>{{ item.time }}</span>
            <span class="mute">{{  item.condition }}</span>
          </div>
        </div>
        <span class="today-degrees mute">{{ item.temp }}°</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'TodayDetails',
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  setup(props) {
    // значения не обновляются пробовала через watch
    const hoursValues = reactive({})
    hoursValues.values = props.data.value.forecast.forecastday[0].hour.map((item) => ({
        time: item.time.split(" ")[1],
        temp: item.temp_c,
        condition: item.condition.text,
        src: item.condition.icon,
    }))

    return {
      hoursValues,
    }
  },
})
</script>

<style scoped>
.today {
  font-size: 18px;
}

.today-list-item {
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.today-list-item:last-of-type {
  padding-bottom: 0;
}

.today-icon-wrapper {
  display: flex;
  align-items: center;
  gap: 35px;
}

.info-wrapper {
  display: flex;
  flex-direction: column;
}

.today-degrees {
  font-size: 24px;
}
</style>
