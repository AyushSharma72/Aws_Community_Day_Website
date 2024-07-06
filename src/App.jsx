import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/herosection";
import Eventhighlights from "./components/eventhighlights";
import Whyjoinus from "./components/whyjoinus";
import About from "./components/About";
import Sponsers from "./components/Sponsers";
import Speakers from "./components/Speakers";
import Team from "./components/Team";
import Venue from "./components/Venue";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import ClipLoader from "react-spinners/ClipLoader";
function App() {
  const [loading, Setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      Setloading(false);
    }, 1500);
  });
  return (
    <>
      {loading ? (
        <div className="bg-white h-screen flex justify-center items-center">
          <ClipLoader size={50} />
        </div>
      ) : (
        <>
          <Navbar />
          <Herosection />
          <Eventhighlights />
          <About />
          <Whyjoinus />
          {/* <Speakers /> */}
          <Sponsers />
          <Team />
          <Venue />
          <Faq />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
