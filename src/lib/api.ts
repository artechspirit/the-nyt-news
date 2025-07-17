import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_NYT_BASE_URL!,
  params: {
    'api-key': import.meta.env.VITE_NYT_API_KEY!,
  },
});
