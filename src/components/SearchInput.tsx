import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import { Search } from 'lucide-react';

export default function SearchInput() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery] = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery.length > 0) {
      navigate(`/search?q=${encodeURIComponent(debouncedQuery)}`);
    }

    if (debouncedQuery.length === 0) {
      navigate('/');
    }
  }, [debouncedQuery, navigate]);

  return (
    <div className="w-full max-w-xl mx-auto relative">
      <input
        id="search"
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
      />
      <Search className="text-nyt-black absolute right-3 top-2.5" size={24} />
    </div>
  );
}
