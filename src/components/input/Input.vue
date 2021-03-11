<template>
  <input
    class="input"
    placeholder="SteamID e.g. 76561198071267937 or snufkind"
    type="text"
    v-model="inputText"
  />
</template>

<script>
import { inputText } from '../../composables/use-input';

export default {
  name: 'Input',
  components: {},
  props: {
    modelValue: String,
  },
  setup() {
    return { inputText };
  },
};
</script>

<style scoped>
.input {
  height: 40px;
  width: 400px;
  min-width: 30px;
  border: 2px solid rgb(37, 37, 37);
  border-radius: 4px;
  padding: 10px;
  color: rgb(37, 37, 37);
}
</style>
