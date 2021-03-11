<template>
  <form @submit.prevent="onSubmit" class="form">
    <Button />
    <Input />
  </form>
</template>

<script>
import Button from '../button/Button.vue';
import Input from '../input/Input.vue';
import useGames from '../../composables/use-games';
import { inputText } from '../../composables/use-input';
export default {
  name: 'Form',
  components: { Button, Input },
  setup() {
    const { fetchGames, response } = useGames();
    const onSubmit = async () => {
      await fetchGames(inputText.value);
      console.log(response.value);
    };

    return {
      onSubmit,
    };
  },
};
</script>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

@media only screen and (max-width: 960px) {
  .form {
    flex-direction: column-reverse;
  }

  Button {
    margin-top: 15px;
  }
}
</style>
