export const ArticleCardSkeleton = () => {
  return (
    <div className="animate-pulse border-b flex flex-wrap border-gray-300 pb-4 pt-2 mb-6">
      <div className="w-full md:w-1/3">
        <div className="h-48 bg-gray-300 rounded w-full" />
      </div>
      <div className="w-full md:w-2/3 md:pl-4 mt-3 md:mt-0">
        <div className="h-9 bg-gray-300 rounded w-3/4 mb-3.5" />
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-3.5" />
        <div className="h-6 bg-gray-200 rounded w-1/6 mb-3.5" />
        <div className="h-6 bg-gray-200 rounded w-full mb-3.5" />
        <div className="h-6 bg-gray-200 rounded w-5/6" />
      </div>
    </div>
  );
};
