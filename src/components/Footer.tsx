export default function Footer() {
  return (
    <footer className="border-t py-6 px-4 text-center text-sm text-gray-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://developer.nytimes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            New York Times API
          </a>
          <a
            href="https://github.com/artechspirit/the-nyt-news"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
