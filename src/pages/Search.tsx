import { useSearchParams } from 'react-router-dom';
import { useArticlesQuery } from '../hooks/useArticlesQuery';
import type { Article } from '../types';
import { ArticleCardSkeleton } from '../components/ArticleCardSkeleton';
import { ArticleCard } from '../components/ArticleCard';
import { SortDropdown } from '../components/SortDropdown';
import { Pagination } from '../components/Pagination';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get('q') || '';
  const page = parseInt(searchParams.get('page') || '0');
  const sort = searchParams.get('sort') || 'newest';
  const { data, isLoading, isError } = useArticlesQuery({
    q,
    page,
    sort,
  });

  const updateParam = (key: string, value: string | number) => {
    window.scrollTo({ top: 0 });
    searchParams.set(key, value.toString());
    setSearchParams(searchParams);
  };

  return (
    <>
      <div className="flex justify-between flex-row items-center mb-1.5">
        <h2 className="text-xl font-semibold">Search Results for "{q}"</h2>
        <SortDropdown
          sort={sort}
          onChange={(val) => updateParam('sort', val)}
        />
      </div>

      {isError && (
        <p className="text-red-500">Failed to fetch articles. Try again.</p>
      )}
      {!isLoading && data?.length === 0 && (
        <p className="text-nyt-gray">No articles found.</p>
      )}

      <div className="space-y-4">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <ArticleCardSkeleton key={index} />
            ))
          : data?.map((article: Article, index: number) => (
              <ArticleCard
                key={article._id}
                title={article.headline.main}
                author={article.byline.original}
                abstract={article.abstract}
                date={article.pub_date}
                web_url={article.web_url}
                isLast={index === data.length - 1}
                multimedia={article.multimedia}
              />
            ))}
      </div>

      <Pagination
        currentPage={page}
        onPageChange={(p) => updateParam('page', p)}
      />
    </>
  );
}
