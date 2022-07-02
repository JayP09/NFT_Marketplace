import {useState} from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Auctions from "./components/Auctions"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import PopularAuctions from "./components/PopularAuctions";
import Stats from "./components/Stats"
import FolderSection from "./components/FolderSection"
import ScrollingEth from "./components/ScrollingEth";
import Footer from "./components/Footer";

function App() {
  const [navbarSwitch, setNavbarSwitch]  = useState(false)

  const display = navbarSwitch ? "hidden":""

  const SwitchNavbar = () => {
    setNavbarSwitch((prev) => (!prev))
  }

  return (
    <div className="App">
      <div className="h-screen">
        <Navbar switchNavbar={SwitchNavbar} display={display}/>
        <HeroSection display={display}/>
      </div>
      <div className={`${display}`}>
        <Auctions />
        <Section2 />
        <Section3 />
        <PopularAuctions />
        <Stats />
        <FolderSection />
        <ScrollingEth />
        <Footer />
      </div>
    </div>
  );
}

export default App;
