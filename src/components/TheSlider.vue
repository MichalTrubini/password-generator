<template>
  <div class="flex justify-between items-center">
    <p class="textGroup">Character Length</p>
    <p class="text-green text-2xl md:text-3xl">{{ sliderValue }}</p>
  </div>
  <div class="mb-10 mt-6 md:mt-9">
    <Slider v-model="sliderValue" class="w-14rem hover:cursor-pointer" :min="0" :max="20" @change="emitValue"/>
  </div>
</template>

<script>
import Slider from "primevue/slider";
import "primevue/resources/themes/vela-green/theme.css";

export default {
  name: "App",
  components: {
    Slider,
  },
  data() {
    return {
      sliderValue: 0,
    };
  },
  emits: ['emittedSliderValue'],
  methods: {
    emitValue() {
      this.$emit("emittedSliderValue", this.sliderValue);
    },
  },
};
</script>

<style scoped>
:deep(.p-slider .p-slider-range) {
    background-color: #A4FFAF;
}

:deep(.p-slider .p-slider-handle) {
    background-color: #fff;
    border: 2px solid #fff;
}

:deep(.p-slider .p-slider-handle:hover) {
    background-color: inherit;
    border: 2px solid #A4FFAF;
    cursor: pointer;
}

</style>