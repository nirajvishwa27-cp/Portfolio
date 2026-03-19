import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090d] text-white selection:bg-amber-200/20">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
