import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/herosection";
import Eventhighlights from "./components/eventhighlights";
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
      {/* <About />
      <Speakers />
      <Team />
      <Venue /> */}
    </>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter , useLocation} from 'react-router-dom';
// import { Element, Events, scrollSpy, scroller } from 'react-scroll';
// import Herosection from "./components/herosection";
// import Navbar from "./components/Navbar";
// import About from './components/About';
// import Speakers from './components/Speakers';
// import Team from './components/Team';
// import Venue from './components/Venue';

// const ScrollToElement = () => {
//   const location = useLocation();

//   React.useEffect(() => {
//     if (location.hash) {
//       scroller.scrollTo(location.hash.substring(1), {
//         duration: 800,
//         delay: 0,
//         smooth: 'easeInOutQuart',
//         offset: -70,
//       });
//     }
//   }, [location]);

//   return null;
// };

// function App() {

//   React.useEffect(() => {
//     Events.scrollEvent.register('begin', function() {
//       console.log("begin", arguments);
//     });

//     Events.scrollEvent.register('end', function() {
//       console.log("end", arguments);
//     });

//     scrollSpy.update();

//     return () => {
//       Events.scrollEvent.remove('begin');
//       Events.scrollEvent.remove('end');
//     };
//   }, []);

//   return (
//     <BrowserRouter>
//       <ScrollToElement />
//       <Navbar/>
//       <Element name="home"><Herosection /></Element>
//       <Element name="about"><About/></Element>
//       <Element name="speakers"><Speakers/></Element>
//       <Element name="team"><Team/></Element>
//       <Element name="venue"><Venue/></Element>
//     </BrowserRouter>
//   );
// }

// export default App;
