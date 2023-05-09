import './GamingLibraryCrad.css';
import React from 'react'
import  {SecondaryButton} from './Buttons/Buttons.js'; 
/* because i ts secondary it must be exported as secondary {} */

const GamingLibraryCrad = (props) => {
  return (
    <div className='gaming-library-card'>
        <ul>
            <li> <img src="{props.image}" alt=" default image" /> {/* img mrtkhdmch het bin guillemets */}
            </li>
            <li> <h4> {props.title}  </h4> <span>{props.category}</span> </li>
            <li> <h4>Date added </h4> <span>{props.date_added}</span> </li>
            <li> <h4>Hours Played</h4> <span> {props.hours_played} </span> </li>
        <SecondaryButton>
            Download
        </SecondaryButton>
        </ul>
      
    </div>
  )
}

export default GamingLibraryCrad;
