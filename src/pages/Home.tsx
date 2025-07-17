import ilustration from '../assets/ilustration.svg';

export default function Home() {
  return (
    <section className=" bg-white pt-4 flex items-center justify-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Side – Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold font-body md:mb-8 text-nyt-black">
            Discover News from The New York Times
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl mb-8">
            Search the most influential articles from The New York Times. Fast,
            beautiful, and powered by React.
          </p>
        </div>

        {/* Right Side – Illustration */}
        <div className="flex justify-center md:justify-end">
          <img
            src={ilustration}
            alt="Illustration"
            draggable={false}
            className="w-full max-w-[80%] md:mx-auto md:-mt-28 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
