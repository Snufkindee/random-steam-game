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
  background-color: #e27d60;
  height: 40px;
  width: 100px;
  border-radius: 4px;
  margin-right: 10px;
  color: white;
  text-align: center;
  transition: 0.5s;
}

.button:hover {
  background-color: #da6241;
}
</style>
