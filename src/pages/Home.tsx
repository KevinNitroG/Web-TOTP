import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

function Home() {
  return (
    <div className="grid-row-[auto_1fr_auto] grid h-screen">
      <Navbar />
      {/* hero page */}
      <Footer />
    </div>
  );
}

export default Home;
