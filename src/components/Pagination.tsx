import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,

  onPageChange,
}: PaginationProps) => {
  return (
    <div className="fixed flex justify-between gap-2 my-6 left-0 right-0 top-1/2 transform -translate-y-1/2 px-20">
      <button
        disabled={currentPage === 0}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 disabled:opacity-50 cursor-pointer"
      >
        <ChevronLeft size={100} />
      </button>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1  disabled:opacity-50 cursor-pointer"
      >
        <ChevronRight size={100} />
      </button>
    </div>
  );
};
