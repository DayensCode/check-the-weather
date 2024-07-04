<template>
  <div class="today">
    <h3 class="reused-title">Today’s Weather Forecast...</h3>
    <ul class="list">
      <li class="today-list-item">
        <div class="today-icon-wrapper">
          <img alt="" src="@/assets/icons/IconSnow.svg" />
          <div class="info-wrapper">
            <span>9:00</span>
            <span class="mute">Снежно</span>
          </div>
        </div>
        <span class="today-degrees mute">19°</span>
      </li>
      <li class="today-list-item">
        <div class="today-icon-wrapper">
          <img alt="" src="@/assets/icons/IconSnow.svg" />
          <div class="info-wrapper">
            <span>9:00</span>
            <span class="mute">Снежно</span>
          </div>
        </div>
        <span class="today-degrees mute">19°</span>
      </li>
      <li class="today-list-item">
        <div class="today-icon-wrapper">
          <img alt="" src="@/assets/icons/IconSnow.svg" />
          <div class="info-wrapper">
            <span>9:00</span>
            <span class="mute">Снежно</span>
          </div>
        </div>
        <span class="today-degrees mute">19°</span>
      </li>
      <li class="today-list-item">
        <div class="today-icon-wrapper">
          <img alt="" src="@/assets/icons/IconSnow.svg" />
          <div class="info-wrapper">
            <span>9:00</span>
            <span class="mute">Снежно</span>
          </div>
        </div>
        <span class="today-degrees mute">19°</span>
      </li>
      <li class="today-list-item">
        <div class="today-icon-wrapper">
          <img alt="" src="@/assets/icons/IconSnow.svg" />
          <div class="info-wrapper">
            <span>9:00</span>
            <span class="mute">Снежно</span>
          </div>
        </div>
        <span class="today-degrees mute">19°</span>
      </li>
      <li class="today-list-item">
        <div class="today-icon-wrapper">
          <img alt="" src="@/assets/icons/IconSnow.svg" />
          <div class="info-wrapper">
            <span>9:00</span>
            <span class="mute">Снежно</span>
          </div>
        </div>
        <span class="today-degrees mute">19°</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TodayDetails',
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
  align-items: center;
}

.today-degrees {
  font-size: 24px;
}
</style>
