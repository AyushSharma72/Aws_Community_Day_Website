import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      easing: 'ease-in-sine',
      duration: 600,
    });
  }, []);

  return (
    <div className='flex flex-col justify-center items-center flex-wrap' data-aos="fade-zoom-in">
      <h2 className='text-gray-900 font-bold text-2xl leading-8 mt-6 mb-4 m-6 mr-4 ml-4 md:mr-0 text-center'>About AWS Student Community Day 2024</h2>
      <p className='text-gray-700 max-w-[600px] text-justify leading-7 m-4 md:m-0 '>
       <p className='mb-4'>
       AWS Cloud Club Community Days (formerly known as Student
       Symposia) are one-day, student-led events where the content
       and logistics are owned by Cloud Club Captains. Student
       Community Days can be in person, hybrid, or fully online. Its
       content should suit your members, focusing on AWS skills and
       career advice. Student Community Days are a way to bring AWS
       learning onto campus.
       </p>
      
       <p className='mb-4'>
       The event audience is primarily Cloud Club members, but can be
       extended to non-member students, space permitting. Students
       are responsible for the content of the event. If needed, Captains
       may request AWS speaker(s) for their event.
       </p>

       <p className='mb-4'>
       The first Student Symposium was held at the Heinz College in
       Carnegie Mellon University, and was hosted by three Cloud Club
       Captains for a day of learning. It included two tracks: a series of
       guest lectures and a hands-on workshop.
       </p>
    </p>
    </div>
  )
}

export default About
