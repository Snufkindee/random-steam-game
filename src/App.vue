<template>
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

<style>
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

body {
  background-color: #41b3a3;
}
</style>
