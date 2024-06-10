import React from 'react'
import AWSImage from '../assets/AWSLogo.png'
function Navbar() {


  return (

    <div className="bg-[#7C5AED] p-2 fixed w-full">
    <div className="flex flex-col md:flex-row justify-between items-center">
    <img className="h-[90px] w-[180px]  mb-4 md:mb-0" src={AWSImage} alt="AWS Community Day  Logo" />
    <ul className="text-white flex flex-col md:flex-row items-center gap-4 md:gap-10 font-semibold pr-10">
      <li className="cursor-pointer hover:underline">Home</li>
      <li className="cursor-pointer hover:underline">About</li>
      <li className="cursor-pointer hover:underline">Speakers</li>
      <li className="cursor-pointer hover:underline">Team</li>
      <li className="cursor-pointer hover:underline">Venue</li>
    </ul>
  </div>
</div>

  )
}
export default Navbar





// import React from 'react';
// import { Link as ScrollLink } from 'react-scroll';
// import { useLocation } from 'react-router-dom';

// function Navbar() {
//   const location = useLocation();

//   const getActiveClass = (hash) => {
//     return location.hash === hash ? 'underline' : '';
//   };

//   return (
//     <div className="bg-[#7C5AED]   w-full fixed">
//       <div className="flex flex-col md:flex-row justify-between items-center">
//         <img className="h-[100px] w-[200px] pl-3 mb-4 md:mb-0" src="https://aws-community-day.nz/images/aws_cd_nz.png" alt="AWS Community Day NZ Logo" />
//         <ul className="text-white flex flex-col md:flex-row items-center gap-4 md:gap-10 font-semibold pr-10">
//           <li className={`cursor-pointer hover:underline ${getActiveClass('#home')}`}>
//             <ScrollLink to="home" smooth={true} duration={800} offset={-70}>
//               Home
//             </ScrollLink>
//           </li>
//           <li className={`cursor-pointer hover:underline ${getActiveClass('#about')}`}>
//             <ScrollLink to="about" smooth={true} duration={800} offset={-70}>
//               About
//             </ScrollLink>
//           </li>
//           <li className={`cursor-pointer hover:underline ${getActiveClass('#speakers')}`}>
//             <ScrollLink to="speakers" smooth={true} duration={800} offset={-70}>
//               Speakers
//             </ScrollLink>
//           </li>
//           <li className={`cursor-pointer hover:underline ${getActiveClass('#team')}`}>
//             <ScrollLink to="team" smooth={true} duration={800} offset={-70}>
//               Team
//             </ScrollLink>
//           </li>
//           <li className={`cursor-pointer hover:underline ${getActiveClass('#venue')}`}>
//             <ScrollLink to="venue" smooth={true} duration={800} offset={-70}>
//               Venue
//             </ScrollLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;



