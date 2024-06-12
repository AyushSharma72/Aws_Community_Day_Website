import React from 'react'
import SpeakerCard from './SpeakerCard'

function Speakers() {
  return (
   <>
    <h1 className='text-[#401f71] font-[Poppins, sans-serif] leading-10 text-3xl font-semibold text-center mt-4'>SPEAKERS</h1>
     <div className='md:px-10 '>
     <div className='flex md:flex-row flex-wrap gap-10 md:gap-20 px-24 md:px-40'>
      <SpeakerCard heading = 'ABC' about = '@Senior developer' image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW85F3Ujr5LIdcYWTutZSuEYzS17M0TG1B5A&s' linkedin = 'https://www.linkedin.com/in/diksha-gupta3094'/>
      <SpeakerCard heading = 'DIk' about = '@Junior developer' image = 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonaskakaroto-736230.jpg&fm=jpg' linkedin = '#'/>
      <SpeakerCard/>
      <SpeakerCard/>
      <SpeakerCard/>
      <SpeakerCard/>
      <SpeakerCard/>
      <SpeakerCard heading = 'ABC' about = '@Senior developer' image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW85F3Ujr5LIdcYWTutZSuEYzS17M0TG1B5A&s' linkedin = 'https://www.linkedin.com/in/diksha-gupta3094'/>

    </div>
     </div>
   </>
  )
}

export default Speakers
