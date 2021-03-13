<template>
  <div class="bg-image"></div>
  <RandomPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from './components/input/Input.vue';
import Navigation from './components/navigation/Navigation.vue';
import RandomPage from './views/RandomPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navigation,
    Input,
    RandomPage,
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,300;1,400;1,700&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

.bg-image {
  background-image: url('./assets/bg.jpg');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
  display: block;
  filter: blur(5px);
  transform: scale(1.1);
}
</style>
