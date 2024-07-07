<!-- вопрос на счет отладчика вью какой лучше поставить где найти -->
<!-- вопрос вся информация в одном объекте по одному запросу лучше один запрос в App и передать дату каждому компоненту или вызов в онмоунтед в каждом отдельно -->
<template>
  <header>
    <img alt="App logo" class="logo" src="@/assets/icons/logo.svg" width="90" height="48" />
    <MainInfo :data="weatherData" v-if="weatherData.value" />
  </header>

  <main>
    <!-- сделано чтобы страница не перерендеривалась -->
    <form class="location-form" @submit.prevent="handleSubmit()">
      <!-- вопрос что за инпут как им пользоваться -->
      <!-- <el-input type="text" name="location" class="location" placeholder="Search Location..." /> -->
      <input v-model="location.value" type="text" name="location" class="location" autocomplete="off" placeholder="Search Location..." @input="handleLocationInput">
      <!-- вопрос сначала сделала через псевдоэлемент можно ли было привязать онклик к after -->
      <button type="submit" class="location-button">
        <img alt="" src="@/assets/icons/IconSearch.svg" />
      </button>
    </form>
    <WeatherDetails />
    <TodayDetails />
  </main>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue'
import { getWeather } from '@/services/weatherService'
import MainInfo from '@/components/mainInfo.vue'
import WeatherDetails from '@/components/weatherDetails.vue'
import TodayDetails from '@/components/todayDetails.vue'

// вопрос как импортировать vue иконки если входная точка ниже и использовать их через <IconSnow />
export default defineComponent({
  components: {
    MainInfo,
    WeatherDetails,
    TodayDetails,
  },
  setup() {
    // вопрос когда реф когда реактив
    const location = reactive({
      value: ''
    })
    const weatherData = reactive({})

    onMounted(async () => {
      weatherData.value = await getWeather('Saint-Petersburg')
    })

    // вопрос точно ли это надо
    const handleLocationInput = (event) => {
      location.value = event.target.value
    }

    const handleSubmit = async () => {
      if (location.value !== '' && location.value.length > 2) {
        try {
          const data = await getWeather(location.value)
          weatherData.value = data
        } catch (error) {
          console.error('Error fetching weather data:', error)
        } finally {
          location.value = ''
        }
      }
    }

    return {
      location,
      weatherData,
      handleLocationInput,
      handleSubmit,
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

.location-form {
  display: flex;
  padding-top: 14px;
}

.location {
  width: 100%;
  padding-bottom: 13px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #FFFFFF;
  margin-bottom: 41px;
  font-size: 20px;
  color: #FFFFFF;
}

.location:focus {
  outline: none;
}

.location::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.location-button {
  align-self: flex-start;
  background-color: transparent;
  border: none;
}
</style>
