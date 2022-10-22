import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="dark">
      <div className="flex flex-col min-h-screen dark:bg-slate-900 dark:text-white">
        <Header />
        <main className="flex-1 max-w-4xl w-full mx-auto">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}