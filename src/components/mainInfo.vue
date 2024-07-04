<template>
  <div class="info">
    <span class="degrees">16</span>
    <div class="place">
      <h1 class="city">London</h1>
      <h2 class="date">06:09 - Monday, 9 Sep ‘23</h2>
    </div>
    <img alt="" class="cloudy" src="@/assets/icons/IconCloudy.svg" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
// import { getWeather } from '@/services/weatherService'

export default defineComponent({
  name: 'MainInfo',
  // setup() {
  //   const data = ref()
  //   const data = reactive(
  //           {}
  //       )
  //   onMounted(async () => {
  //     data.value = await getWeather('Saint-Petersburg')
  //     console.log(data.value)
  //   })

  // }
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
