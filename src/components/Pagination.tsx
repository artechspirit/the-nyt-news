import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, onPageChange }: PaginationProps) => {
  return (
    <>
      {/* Desktop pagination */}
      <button
        aria-label="Previous page"
        disabled={currentPage === 0}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 disabled:opacity-50 cursor-pointer fixed top-1/2 left-0 transform -translate-y-1/2 hidden lg:block"
      >
        <ChevronLeft size={100} />
      </button>

      <button
        aria-label="Next page"
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1  disabled:opacity-50 cursor-pointer  fixed top-1/2 right-0 transform -translate-y-1/2 hidden lg:block"
      >
        <ChevronRight size={100} />
      </button>

      {/* Mobile pagination */}
      <div className="flex justify-between gap-2 lg:hidden">
        <button
          aria-label="Previous page"
          disabled={currentPage === 0}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>

        <button
          aria-label="Next page"
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
};
