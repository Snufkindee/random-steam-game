import { toRefs, reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
  response: [],
  error: null,
  loading: false,
});

export default function useGames() {
  const URL_PREFIX = import.meta.env.VITE_API_URL;
  const fetchGames = async (id: string) => {
    state.loading = true;
    await axios
      .get(URL_PREFIX + 'api/get-games?id=' + id)
      .then((res) => {
        state.response = res.data;
        console.log('useGames.ts', res.data[20].name);
      })
      .catch((err) => (state.error = err))
      .finally(() => (state.loading = false));
  };

  return { ...toRefs(state), fetchGames };
}
