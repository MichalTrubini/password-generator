<template>
  <div
    class="w-full min-h-screen flex justify-center items-center flex-col px-4"
  >
    <TheHeader />
    <Form></Form>
  </div>
</template>
<script>
import Form from "./components/TheForm.vue";
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "App",
  components: { Form, TheHeader },
};
</script>

<style>

@font-face {
  font-family: 'JetBrains Mono';
  src: url('./assets/JetBrainsMono-Bold.ttf') format('truetype');
  font-weight: 1000; 
  font-stretch: 200;
  font-display: swap;
}

body {
  font-family: "JetBrains Mono", monospace;
  font-weight: 700;
  background: linear-gradient(180deg, #14131b 0%, #08070b 100%);
}

.textGroup {
  font-size: 1rem;
  color: #e6e5ea;
}

@media screen and (min-width: 768px) {
  .textGroup {
    font-size: 1.125rem;
  }
}
</style>
```
