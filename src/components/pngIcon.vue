<template>
  <img alt="" :src="iconPath" />
</template>

<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'PngIcon',
  props: {
    name: Array,
  },
  setup(props) {
    let iconPath = computed(() => {
        return `https://cdn.weatherapi.com/weather/64x64/${ props.name[0] }/${ props.name[1] }`
    })

    return {
      iconPath,
    }
  }
})
</script>
