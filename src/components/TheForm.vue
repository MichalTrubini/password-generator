<template>
  <form class="max-w-[540px] w-full" @submit.prevent="submitForm">
    <div
      class="relative w-full bg-darkGray flex justify-between p-4 md:py-5 md:px-8"
    >
      <input
        :value="password"
        readonly
        class="text-whitish bg-inherit text-2xl outline-none md:text-3xl"
      />
      <img :src="copyIcon" alt="copy password" @click="copyPassword" />
      <p
        v-if="copiedClicked"
        class="text-green text-sm absolute bottom-1 right-3"
      >
        Copied!
      </p>
    </div>
    <div class="p-4 bg-darkGray mt-4 md:p-8">
      <TheSlider @emittedSliderValue="emittedSliderValue" />
      <div class="flex flex-col gap-4 mb-8">
        <InputElement
          label="Include Uppercase Letters"
          id="uppercase"
          @emittedInputValue="emittedInputValue"
        />
        <InputElement
          label="Include Lowercase Letters"
          id="lowercase"
          @emittedInputValue="emittedInputValue"
        />
        <InputElement
          label="Include Numbers"
          id="numbers"
          @emittedInputValue="emittedInputValue"
        />
        <InputElement
          label="Include Symbols"
          id="symbols"
          @emittedInputValue="emittedInputValue"
        />
      </div>
      <TheStrengthValuator />
      <button class="w-full p-4 bg-green uppercase text-darkGray text-base">
        <p class="inline">generate</p>
        <img :src="arrowIcon" alt="generate" class="inline pl-4" />
      </button>
    </div>
  </form>
</template>

<script>
import arrowIcon from "../assets/arrow.svg";
import copyIcon from "../assets/copy.svg";
import TheSlider from "./TheSlider.vue";
import TheStrengthValuator from "./TheStrengthValuator.vue";
import InputElement from "./InputElement.vue";
import generatePassword from "../functions/generatePassword";

export default {
  name: "Form",
  components: { TheSlider, TheStrengthValuator, InputElement },
  data() {
    return {
      password: "PTx1f5DaFX",
      copiedClicked: false,
      sliderValue: 10,
      checkedInputs: {
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
      },
      arrowIcon,
      copyIcon,
    };
  },
  methods: {
    submitForm() {
      console.log(generatePassword(this.sliderValue, this.checkedInputs));
      this.password = generatePassword(this.sliderValue, this.checkedInputs);
    },
    emittedSliderValue(value) {
      this.sliderValue = value;
    },
    emittedInputValue(value, id) {
      this.checkedInputs[id] = value;
    },
    copyPassword() {
      this.copiedClicked = true;
      navigator.clipboard.writeText(this.password);
      setTimeout(() => {
        this.copiedClicked = false;
      }, 1500);
    },
  },
};
</script>
