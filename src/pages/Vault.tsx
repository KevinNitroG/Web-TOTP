import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TOTPCard from '@/components/TOTPCard';

function Vault() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-2">
        <TOTPCard
          issuer="github"
          secret=""
          name="KevinNitroGasdfdsddddddddddddddddddddddddddddddddddddddddddd"
          simpleIcons={true}
        />
      </div>
      <Footer />
    </>
  );
}

export default Vault;
