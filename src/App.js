import "./App.css";
import Destination from "./components/Destination";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ReadBefore from "./components/ReadBefore";
import Service from "./components/Service";
import Client from "./components/Client";
import Ourgallery from "./components/Ourgallery";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init({ once: true, disable: "mobile" });
    Aos.refresh();
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <Discover />
        <Destination />
        <Service />
        <Ourgallery />
        <Client />
        <ReadBefore />
        <Footer />
      </div>
    </>
  );
}

export default App;
