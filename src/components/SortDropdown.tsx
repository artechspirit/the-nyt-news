interface SortDropdownProps {
  sort: string;
  onChange: (value: string) => void;
}

export const SortDropdown = ({ sort, onChange }: SortDropdownProps) => {
  return (
    <div className="my-4 flex justify-end">
      <label htmlFor="sort" className="sr-only">
        Sort articles
      </label>
      <select
        id="sort"
        value={sort}
        onChange={(e) => onChange(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        <option value="best">Best</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="relevance">Relevance</option>
      </select>
    </div>
  );
};
