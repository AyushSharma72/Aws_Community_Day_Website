import React from 'react'
import './Team.css'
function TeamCard(props) {
  return (
    <div className='card-wrapper'>
    <div className="card">
       <div className="card-inner">
       <div className="card-front">
        <img src={props.image} alt="Captain Profile" />
       </div>
       <div className="card-back">
       <div className='content'>
       <h1>AWS Cloud Captain </h1>
       <p>{props.name}</p>
       <p>{props.place}</p>
       <a href={props.linkedin} target='_blank'><i className="fa-brands fa-linkedin text-blue-700 text-3xl mt-2"></i></a>
       </div>
      </div>
    </div>
  </div>      
    </div>
  )
}

export default TeamCard
