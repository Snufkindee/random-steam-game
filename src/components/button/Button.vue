<template>
  <button type="submit" class="button">Search</button>
</template>

<script>
export default {
  name: 'Input',
};
</script>

<style scoped>
.button {
  background: transparent;
  height: 40px;
  width: 100px;
  border-radius: 4px;
  margin-right: 10px;
  color: white;
  text-align: center;
  transition: 0.5s;
  border: 2px solid #66fcf1;
}

.button:hover {
  background-color: #45a29e;
  border-color: #45a29e;
}
</style>
