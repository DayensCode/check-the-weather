<!-- вопрос на счет отладчика вью какой лучше поставить где найти -->
<template>
  <header>
    <img alt="App logo" class="logo" src="@/assets/icons/logo.svg" width="90" height="48" />
    <MainInfo :data="weatherData" v-if="weatherData.value" />
  </header>

  <main>
    <LocationForm :data="weatherData" />
    <WeatherDetails :data="weatherData" v-if="weatherData.value" />
    <TodayDetails :data="weatherData" v-if="weatherData.value" />
  </main>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue'
import { getWeather } from '@/services/weatherService'
import MainInfo from '@/components/mainInfo.vue'
import WeatherDetails from '@/components/weatherDetails.vue'
import TodayDetails from '@/components/todayDetails.vue'
import LocationForm from '@/components/locationForm.vue'

export default defineComponent({
  components: {
    MainInfo,
    WeatherDetails,
    TodayDetails,
    LocationForm,
  },
  setup() {
    const weatherData = reactive({})

    onMounted(async () => {
      weatherData.value = await getWeather('Saint-Petersburg')
    })

    return {
      weatherData,
    }
  },
})
</script>

<style scoped>
header {
  padding: 37px 117px 85px;
  height: 100vh;
  background-image: url('@/assets/images/bg-weather.png');
  background-repeat: no-repeat;
  background-size: cover;
  color: #FFFFFF;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo {
  display: block;
}

main {
  padding: 37px 137px 23px 35px;
  position: absolute;
  top: 0;
  right: 0;
  color: #FFFFFF;

  height: 100vh;
  width: 526px;
  overflow-y: scroll;
  background: #102c2b66;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.14);
}
</style>
