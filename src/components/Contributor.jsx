import React from 'react'
import './Contributor.css'
import imagess from '../assets/profile.jpeg'
function Contributor(props) {
  return (
   <>
  
    <div class="Contributor_card">
    <img src={props.image} alt="Profile image" />
    <div class="card__content">
      <p class="card__title">{props.name}</p>
      <p class="card__description">{props.position}</p>
      <a href= {props.linkedin} target='_blank'><i className="fa-brands fa-linkedin text-blue-700 text-3xl pl-14 mt-3"></i></a>
    </div>
  </div>
   </>
 
    
  )
}

export default Contributor
