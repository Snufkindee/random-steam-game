<template>
  <img class="bg-image" v-lazy="img" />
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
  setup() {
    const img =
      'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

    return { img };
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

html,
body {
  display: inline-block;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
}

.bg-image {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(7px);
  transform: scale(1.1);
}
</style>
