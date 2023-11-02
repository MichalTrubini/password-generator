<template>
  <form class="max-w-[540px] w-full" @submit.prevent="submitForm">
    <div
      class="relative w-full bg-darkGray flex justify-between p-4 md:py-5 md:px-8"
    >
      <input
        :value="password"
        placeholder="PTx1f5DaFX"
        readonly
        class="text-whitish w-[90%] outputInput bg-inherit text-2xl outline-none md:text-3xl"
      />
      <img :src="copyIcon" alt="copy password" @click="copyPassword" class="hover:cursor-pointer copyIcon"/>
      <p
        v-if="copiedClicked"
        class="text-green text-xs absolute bottom-[2px] right-0 md:text-sm md:bottom-1 md:right-3"
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
      <TheStrengthValuator :strength="strength"/>
      <button class="w-full p-4 bg-green uppercase text-darkGray text-base hover:cursor-pointer hover:bg-inherit hover:outline-green hover:outline-2p hover:outline hover:text-green">
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
import zxcvbn from 'zxcvbn';

export default {
  name: "Form",
  components: { TheSlider, TheStrengthValuator, InputElement },
  data() {
    return {
      password: "",
      copiedClicked: false,
      sliderValue: 0,
      strength: '',
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
      this.password = generatePassword(this.sliderValue, this.checkedInputs);
      this.evaluatePasswordStrength(this.password);
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
    evaluatePasswordStrength(password) {
      const result = zxcvbn(password);
      const score = result.score;
      this.strength = (score === 0 || score === 1) ? 'too weak' : score === 2 ? 'weak' : score === 3 ? 'medium' : 'strong';
      console.log(result.score);
    },
  },
};
</script>

<style scoped>

.outputInput::placeholder {
    color: rgba(230, 229, 234, 0.25)
}

button:hover img {
    filter: brightness(0) saturate(100%) invert(92%) sepia(8%) saturate(2388%) hue-rotate(61deg) brightness(114%) contrast(101%);
}

.copyIcon:hover {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7466%) hue-rotate(162deg) brightness(104%) contrast(112%);
}

</style>