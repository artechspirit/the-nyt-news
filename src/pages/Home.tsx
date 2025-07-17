import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-semibold mb-4">
        Welcome to NYT Article Search
      </h2>
      <button
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        onClick={() => navigate('/search')}
      >
        Start Searching
      </button>
    </div>
  );
}
