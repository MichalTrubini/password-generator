<template>
  <div class="p-4 bg-blackish flex justify-between items-center mb-4 md:mb-8 md:h-[64px]">
    <div class="text-gray uppercase text-base md:text-lg">strength</div>
    <div class="flex gap-4">
      <p class="text-whitish uppercase text-lg md:text-2xl">{{ strength }}</p>
      <div class="flex items-center gap-2">
        <div
          class="w-[10px] h-[28px] border-2 border-whitish"
          :style="{
            'background-color': getStrengthColor(1, 'background'),
            'border-color': getStrengthColor(1, 'border'),
          }"
        ></div>
        <div
          class="w-[10px] h-[28px] border-2 border-whitish"
          :style="{
            'background-color': getStrengthColor(2, 'background'),
            'border-color': getStrengthColor(2, 'border'),
          }"
        ></div>
        <div
          class="w-[10px] h-[28px] border-2 border-whitish"
          :style="{
            'background-color': getStrengthColor(3, 'background'),
            'border-color': getStrengthColor(3, 'border'),
          }"
        ></div>
        <div
          class="w-[10px] h-[28px] border-2 border-whitish"
          :style="{
            'background-color': getStrengthColor(4, 'background'),
            'border-color': getStrengthColor(4, 'border'),
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import assignColor from "../functions/assignColor";

export default {
  name: "TheStrengthValuator",
  data() {
    return {
      strengthColor: "inherit",
    };
  },
  props: {
    strength: {
      type: String,
      required: true,
    },
  },
  methods: {
    getStrengthColor(order, type) {
      return assignColor(this.strength, order, type);
    },
  },
};
</script>
