import { toRefs, reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
  response: [],
  error: null,
  loading: true,
});

export default function useGames() {
  const fetchGames = async (id: string) => {
    await axios
      .get('/api/get-games?id=' + id)
      .then((res) => {
        state.response = res.data;
        state.loading = true;
        console.log('useGames.ts', res.data[20].name);
      })
      .catch((err) => (state.error = err))
      .finally(() => (state.loading = false));
  };

  return { ...toRefs(state), fetchGames };
}