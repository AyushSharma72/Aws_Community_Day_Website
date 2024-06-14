import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/herosection";
import Eventhighlights from "./components/eventhighlights";
import Whyjoinus from "./components/whyjoinus";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Team from "./components/Team";
import Venue from "./components/Venue";

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Eventhighlights />
      <About />
      <Whyjoinus />
      <Speakers />
      <Venue />
      <Team/>
     
    </>
  );
}

export default App;
