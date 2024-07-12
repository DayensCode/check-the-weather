<template>
  <form class="location-form" @submit.prevent="handleSubmit()">
    <!-- вопрос что за инпут как им пользоваться (библиотека?)-->
    <!-- <el-input type="text" name="location" class="location" placeholder="Search Location..." /> -->
    <input v-model="location.value" type="text" name="location" autocomplete="off" placeholder="Search Location..." @input="handleLocationInput">
    <!-- вопрос сначала сделала через псевдоэлемент можно ли было привязать онклик к after -->
    <button type="submit">
      <img alt="" src="@/assets/icons/IconSearch.svg" />
    </button>
  </form>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { getWeather } from '@/services/weatherService'

export default defineComponent({
  name: 'LocationForm',
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  setup(props) {
    // вопрос когда реф когда реактив
    const location = reactive({
      value: ''
    })

    // вопрос точно ли это надо или можно реализовать двухстороннее связывание проще
    // пока что без отладчика не видно связалось ли
    const handleLocationInput = (event) => {
      location.value = event.target.value
    }

    const handleSubmit = async () => {
      if (location.value !== '' && location.value.length > 2) {
        try {
          const data = await getWeather(location.value)
          // вопрос по emit когда надо когда нет
          props.data.value = data
        } catch (error) {
          console.error('Error fetching weather data:', error)
        } finally {
          location.value = ''
        }
      }
    }

    return {
      location,
      handleLocationInput,
      handleSubmit,
    }
  },
})
</script>

<style lang="scss" scoped>
.location-form {
  display: flex;
  padding-top: 14px;

  input  {
    width: 100%;
    padding-bottom: 13px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #FFFFFF;
    margin-bottom: 41px;
    font-size: 20px;
    color: #FFFFFF;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  button {
    align-self: flex-start;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s linear;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
