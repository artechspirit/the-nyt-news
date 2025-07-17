import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
