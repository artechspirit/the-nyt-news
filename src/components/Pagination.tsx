import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, onPageChange }: PaginationProps) => {
  return (
    <>
      <button
        disabled={currentPage === 0}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 disabled:opacity-50 cursor-pointer fixed top-1/2 left-0 transform -translate-y-1/2"
      >
        <ChevronLeft size={100} />
      </button>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1  disabled:opacity-50 cursor-pointer  fixed top-1/2 right-0 transform -translate-y-1/2"
      >
        <ChevronRight size={100} />
      </button>
    </>
  );
};
