export const ArticleCardSkeleton = () => {
  return (
    <div className="animate-pulse border-b border-gray-300 pb-4 pt-2 mb-6">
      <div className="h-7 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/6 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-full mb-2" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
    </div>
  );
};
