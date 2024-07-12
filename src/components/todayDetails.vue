<template>
  <div class="today">
    <h3 class="title">Today’s Weather Forecast...</h3>
    <ul class="list">
      <li v-for="item in hoursValues">
        <div class="info-wrapper">
          <!-- тестила работу с икноками как с компонентами -->
          <PngIcon :name="item.src" />
          <div class="info">
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
import { defineComponent, computed } from 'vue'
import PngIcon from '@/components/pngIcon.vue'

export default defineComponent({
  name: 'TodayDetails',
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  components: {
    PngIcon,
  },
  setup(props) {
    const hoursValues = computed(() => {
      const formattedValues = props.data.value.forecast.forecastday[0].hour.map((item) => ({
          time: item.time.split(" ")[1],
          temp: item.temp_c,
          condition: item.condition.text,
          src: item.condition.icon.split('/').slice(-2),
      }))

      return formattedValues
    })

    return {
      hoursValues,
    }
  },
})
</script>

<style lang="scss" scoped>
.today {
  font-size: 18px;

  li {
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:last-of-type {
      padding-bottom: 0;
    }
  }
}

.info-wrapper {
  display: flex;
  align-items: center;
  gap: 35px;

  .info {
    display: flex;
    flex-direction: column;
  }
}

.today-degrees {
  font-size: 24px;
}
</style>
