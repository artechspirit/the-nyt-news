import { api } from '../lib/api';
import type { Article, Params } from '../types';

export async function fetchArticles(params: Params): Promise<Article[]> {
  const res = await api.get('articlesearch.json', { params });

  const docs = res.data.response.docs;

  if (!Array.isArray(docs)) return [];

  return docs.slice(0, 20);
}
