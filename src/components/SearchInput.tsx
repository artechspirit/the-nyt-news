import { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { Search, X } from 'lucide-react';

export default function SearchInput() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  // Autofocus on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (location.pathname !== '/' && query === '') {
      navigate('/');
    }
  }, [navigate, location, query]);

  const handleSearch = () => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
    inputRef.current?.blur();
  };

  // Handle Enter key for instant search
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.length > 0) {
      handleSearch();
    }
  };

  // Clear input
  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  return (
    <div className="w-full max-w-xl mx-auto relative">
      <label htmlFor="search" className="sr-only">
        Search articles
      </label>
      <input
        id="search"
        ref={inputRef}
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black pr-10"
        autoComplete="off"
        autoFocus
      />
      {query && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={handleClear}
          className="absolute right-10 flex justify-end items-center top-0 w-12 h-12 text-gray-400 hover:text-black focus:outline-none cursor-pointer"
        >
          <X size={20} className="-mt-1.5" />
        </button>
      )}
      <Search
        className="text-nyt-black absolute right-3 top-2.5 cursor-pointer"
        size={24}
        onClick={handleSearch}
      />
    </div>
  );
}
