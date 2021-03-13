<template>
  <div class="container">
    <h1 class="title">Pick a random game from your Steam library</h1>
    <div
      v-if="gameList.length <= 0 && !randomIndex && !loading"
      class="img-placeholder"
    ></div>
    <Spinner />
    <img
      class="image"
      v-if="gameList && randomIndex !== null && !loading"
      v-bind:src="gameList[randomIndex].logoURL"
      :alt="gameList[randomIndex].name"
    />
    <span
      class="game-name"
      v-if="gameList && randomIndex !== null && !loading"
      >{{ gameList[randomIndex].name }}</span
    >
  </div>
</template>

<script lang="ts">
import { Ref, ref, watchEffect } from 'vue';
import useGames from '../../composables/use-games';
import Game from '../../types/Game';
import { inputText } from '../../composables/use-input';
import Spinner from '../spinner/Spinner.vue';

export default {
  name: 'GameCard',
  components: { Spinner },
  setup() {
    const { response, error, loading } = useGames();
    const gameList: Ref<Game[]> = ref(response);
    const randomIndex = ref(null);

    watchEffect(() => {
      if (gameList.value.length <= 0) return;
      const max = gameList.value.length - 1;
      randomIndex.value = Math.floor(Math.random() * max);
      console.log('rand', randomIndex.value);
    });

    return {
      gameList,
      error,
      loading,
      randomIndex,
      inputText,
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.title {
  font-family: 'Merriweather', sans-serif;
  font-size: 30px;
  font-style: italic;
  margin-bottom: 40px;
  text-align: center;
  color: #66fcf1;
}

.img-placeholder {
  height: 100px;
  width: 250px;
  border: 3px dashed #45a29e;
}

img {
  height: 100px;
  width: 250px;
}

.game-name {
  margin-top: 20px;
  color: white;
}
</style>
