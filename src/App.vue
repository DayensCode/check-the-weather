<!-- вопрос на счет отладчика вью какой лучше поставить где найти -->
<!-- вопрос вся информация в одном объекте по одному запросу лучше один запрос в App и передать дату каждому компоненту или вызов в онмоунтед в каждом отдельно -->
<template>
  <header>
    <img alt="App logo" class="logo" src="@/assets/icons/logo.svg" width="90" height="48" />
    <MainInfo />
  </header>

  <main>
    <!-- вопрос что за инпут как им пользоваться -->
    <!-- <el-input type="text" name="location" class="location" placeholder="Search Location..." /> -->
    <input v-model="location" type="text" name="location" class="location" placeholder="Search Location..." >
    <WeatherDetails />
    <TodayDetails />
  </main>
</template>

<script>
import { defineComponent, ref } from 'vue'
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
    const location = ref()
    return {
      location,
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

.location {
  width: 100%;
  padding: 14px 0 13px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #FFFFFF;
  margin-bottom: 41px;

  background: url('@/assets/icons/IconSearch.svg') no-repeat right center;
}

.location::after {
  content: '';
}

.location::placeholder {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
}
</style>
