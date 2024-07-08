<template>
  <div class="info">
    <span class="degrees">{{ roundedDegrees }}°</span>
    <div class="place">
      <h1 class="city" >{{ data.value.location.name }}</h1>
      <h2 class="date">{{ formattedDate }}</h2>
    </div>
    <img alt="" class="cloudy" src="@/assets/icons/IconCloudy.svg" />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'MainInfo',
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  setup(props) {
    // вопрос на счет копьютед когда компьютед когда обычная функция
    const formattedDate = computed(() => {
      const dateString = props.data.value.location.localtime
      const date = new Date(dateString)
      const formattedTime = date.toLocaleTimeString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
      return formattedTime
    })

    const roundedDegrees = computed(() => {
      const degrees = props.data.value.current.temp_c
      const roundedDegrees = Math.round(degrees)
      return roundedDegrees
    })

    return {
      roundedDegrees,
      formattedDate,
    }
  },
})
</script>

<style scoped>
.info {
  display: flex;
  gap: 10px;
}

.degrees {
  font-size: 143px;
}

.place {
  align-self: center;
}

.city {
  font-size: 60px;
}

.cloudy {
  align-self: center;
}
</style>
