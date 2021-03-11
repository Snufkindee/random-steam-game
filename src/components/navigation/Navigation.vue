<template>
  <nav class="navigation">
    <p class="logo">Random Steam Game</p>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navigation',
  components: {},
});
</script>

<style scoped>
.navigation {
  display: flex;
  align-items: center;
  opacity: 1;
  height: 3rem;
}

.navigation p {
  margin-left: 30px;
  margin-top: 30px;
  font-family: 'Merriweather';
  font-style: italic;
  font-size: 1.2rem;
  color: white;
}
</style>
