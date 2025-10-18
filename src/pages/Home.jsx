import Accueill from "../components/Accueill";
import Footer from "../components/Footer";
import MapSection from "../components/MapSection";
import Navbar from "../components/Nav";
import TrendingSection from "../components/TredingSection";

const Home = () => {
  return (
    <div
      className="text-white flex flex-col justify-between"
      style={{
        background: "radial-gradient(circle at center, #0B065E 0%, #050414 100%)",
      }}
    >
      {/* Barre de navigation */}
      <header className="">
        <Navbar />
      </header>

      {/* Section principale */}
      <main className="">
        <Accueill />
        <MapSection />
        <TrendingSection />
      </main>

      {/* Pied de page */}
      <footer className="mt-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
