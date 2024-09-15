import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/herosection";
import Eventhighlights from "./components/eventhighlights";
const Whyjoinus = React.lazy(() => import("./components/whyjoinus"));
import About from "./components/About";
import Sponsers from "./components/Sponsers";
const TeamList = React.lazy(() => import("./components/Team/TeamList"));
const Venue = React.lazy(() => import("./components/Venue"));
const Faq = React.lazy(() => import("./components/Faq"));
import SpeakersList from './components/Speakers/SpeakersList'
import Voulanteers from './components/voulanteers/Voulanteers'
import Footer from "./components/Footer";
import ClipLoader from "react-spinners/ClipLoader";
import SocialIcons from "./components/SocialIcons";
import ContributorList from "./components/Contributors/ContributorList";

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
          <SpeakersList />
          <Sponsers />
          <TeamList />
          <ContributorList/>
          <Voulanteers />
          <Venue />
          <Faq />
          <Footer />
          <SocialIcons />
        </>
      )}
    </>
  );
}

export default App;
