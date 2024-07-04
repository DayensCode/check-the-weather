<script setup>
import IconCloudy from './components/icons/IconCloudy.vue'
import IconMax from './components/icons/IconMax.vue'
import IconMin from './components/icons/IconMin.vue'
import IconHumadity from './components/icons/IconHumadity.vue'
import IconWind from './components/icons/IconWind.vue'
import IconSnow from './components/icons/IconSnow.vue'
</script>

<template>
  <header>
    <img alt="App logo" class="logo" src="./assets/logo.svg" width="90" height="48" />
    <div class="info">
      <span class="degrees">16</span>
      <div class="place">
        <h1 class="city">London</h1>
        <h2 class="date">06:09 - Monday, 9 Sep ‘23</h2>
      </div>
      <IconCloudy class="cloudy"/>
    </div>
  </header>

  <main>
    <input type="text" name="location" class="location" placeholder="Введите местоположение...">
    <div class="details">
      <h3 class="title">гроза с небольшой моросью</h3>
      <ul class="list">
        <li class="list-item mute">
          Максимальная
          <div class="icon-wrapper">
            <span class="list-item-value">19°</span>
            <IconMax />
          </div>
        </li>
        <li class="list-item mute">
          Минимальная
          <div class="icon-wrapper">
            <span class="list-item-value">15°</span>
            <IconMin />
          </div>
        </li>
        <li class="list-item mute">
          Влажность
          <div class="icon-wrapper">
            <span class="list-item-value">58%</span>
            <IconHumadity />
          </div>
        </li>
        <li class="list-item mute">
          Видимость
          <div class="icon-wrapper">
            <span class="list-item-value">86%</span>
            <IconCloudy class="icon-cloudy-styled"/>
          </div>
        </li>
        <li class="list-item mute">
          Ветер
          <div class="icon-wrapper">
            <span class="list-item-value">5km/h</span>
            <IconWind />
          </div>
        </li>
      </ul>
    </div>
    <div class="today">
      <h3 class="today-title">Прогноз погоды на сегодня...</h3>
      <ul class="list">
        <li class="today-list-item">
          <div class="today-icon-wrapper">
            <IconSnow />
            <div class="info-wrapper">
              <span>9:00</span>
              <span class="mute">Снежно</span>
            </div>
          </div>
          <span class="today-degrees mute">19°</span>
        </li>
        <li class="today-list-item">
          <div class="today-icon-wrapper">
            <IconSnow />
            <div class="info-wrapper">
              <span>9:00</span>
              <span class="mute">Снежно</span>
            </div>
          </div>
          <span class="today-degrees mute">19°</span>
        </li>
        <li class="today-list-item">
          <div class="today-icon-wrapper">
            <IconSnow />
            <div class="info-wrapper">
              <span>9:00</span>
              <span class="mute">Снежно</span>
            </div>
          </div>
          <span class="today-degrees mute">19°</span>
        </li>
        <li class="today-list-item">
          <div class="today-icon-wrapper">
            <IconSnow />
            <div class="info-wrapper">
              <span>9:00</span>
              <span class="mute">Снежно</span>
            </div>
          </div>
          <span class="today-degrees mute">19°</span>
        </li>
        <li class="today-list-item">
          <div class="today-icon-wrapper">
            <IconSnow />
            <div class="info-wrapper">
              <span>9:00</span>
              <span class="mute">Снежно</span>
            </div>
          </div>
          <span class="today-degrees mute">19°</span>
        </li>
        <li class="today-list-item">
          <div class="today-icon-wrapper">
            <IconSnow />
            <div class="info-wrapper">
              <span>9:00</span>
              <span class="mute">Снежно</span>
            </div>
          </div>
          <span class="today-degrees mute">19°</span>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    padding: 37px 117px 85px;
    height: 100vh;
    background-image: url('./components/images/bg-weather.png');
    background-repeat: no-repeat;
    background-size: cover;
    color: #FFFFFF;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

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

    background: url('./components/icons/IconSearch.svg') no-repeat right center;
  }

  .location::after {
    content: '';
  }

  .location::placeholder {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.7);
  }

  .details {
    padding-bottom: 86px;
    margin-bottom: 40px;
    border-bottom: 1px solid #FFFFFF; 
  }

  .title {
    text-transform: uppercase;
    font-size: 18px;
    padding: 107px 0 30px;
  }

  .list {
    padding:  0;
    list-style: none;
    font-size: 18px;
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

  .today {
    font-size: 18px;
  }

  .today-title {
    padding-bottom: 56px;
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
    align-items: center;
  }

  .mute {
    color: rgba(255, 255, 255, 0.7);
  }

  .today-degrees {
    font-size: 24px;
  }
}
</style>
