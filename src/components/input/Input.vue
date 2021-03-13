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

<style lang="scss" scoped>
.input {
  max-height: 40px;
  width: 400px;
  min-width: 30px;
  border: 2px solid #66fcf1;
  border-radius: 4px;
  padding: 10px;
  color: white;
  background: transparent;

  @media only screen and (max-width: 420px) {
    width: 250px;
  }
}

input::placeholder {
  color: #45a29e;
}
</style>
