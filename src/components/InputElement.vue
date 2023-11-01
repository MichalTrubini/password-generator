<template>
  <div class="flex flex-row-reverse justify-end items-center gap-5">
    <label class="textGroup" :for="id">{{ label }}</label>
    <input
      type="checkbox"
      :id="id"
      v-model="isChecked"
      @change="handleInputChange"
      class="appearance-none border-2 border-whitish w-4 h-4 checked:bg-green checked:border-none customTick"
    />
  </div>
</template>

<script>
export default {
  name: "InputElement",
    data() {
        return {
        isChecked: false,
        };
    },
  props: {
    label: String,
    id: String,
  },
    methods: {
        handleInputChange() {
        this.$emit("emittedInputValue", this.isChecked, this.id);
        },
    },
};
</script>

<style scoped>
.customTick {
  position: relative;
}

.customTick:checked::after {
  position: absolute;
  content: "";
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid black;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
