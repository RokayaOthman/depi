import Header from '../components/layout/header.jsx'
import Footer from '../components/layout/footer.jsx';
export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow">
        {children}
      </main>
    </div>
  );
}