import type { SortType } from '../types';

export function formatDateToShortString(
  isoDate: string = new Date().toISOString()
): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}

export function getValidSortParam(
  value: string | null,
  fallback: SortType = 'newest'
): SortType {
  const validValues: SortType[] = ['best', 'newest', 'oldest', 'relevance'];
  return validValues.includes(value as SortType)
    ? (value as SortType)
    : fallback;
}
