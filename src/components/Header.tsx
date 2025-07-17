import SearchInput from '../components/SearchInput';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow">
      <a href="/">
        <img
          src={logo}
          alt="Logo"
          className="max-w-[80%] pt-3 m-auto md:max-w-[250px]"
        />
      </a>
      <div className="lg:max-w-5xl mx-auto px-4 pt-2 pb-4 flex items-center justify-between flex-wrap">
        <SearchInput />
      </div>
    </header>
  );
}
