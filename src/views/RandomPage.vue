<template>
  <Navigation />
  <div class="content">
    <GameCard />

    <div class="search">
      <Form />
    </div>
  </div>
</template>

<script>
import Navigation from '../components/navigation/Navigation.vue';
import Form from '../components/form/Form.vue';
import GameCard from '../components/game-card/GameCard.vue';

export default {
  name: 'RandomPage',
  components: { Navigation, Form, GameCard },
};
</script>

<style scoped>
.content {
  position: fixed;
  height: 100px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
}

.search {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

.game-card {
  margin-top: 20px;
  z-index: -1;
}
</style>
