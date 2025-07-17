import { useQuery } from '@tanstack/react-query';
import { fetchArticles } from '../services/fetchArticles';
import type { Params } from '../types';

export function useArticlesQuery(params: Params) {
  return useQuery({
    queryKey: ['articles', params],
    queryFn: () => fetchArticles(params),
    enabled: (params.q ?? '').length > 0,
    staleTime: 1000 * 60 * 5, // cache 5 menit
  });
}
