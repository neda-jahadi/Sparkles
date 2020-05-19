import React from 'react'
import './ListCardStyle.css'
import Edit from '../assets/edit.png'


const ListCard=()=>{


    return (

        <div className='list-card'>
            <h3>Perfect-Simple Plan</h3>

            <p>Listened to: Yes</p>
            <p>Rating: 3 of 5</p>
            <p>Best song ever!!! </p>
            
            
            <button className='edit-button'>
                <img src={Edit} alt="Edit" className="edit-logo"/>
            </button>
          

            
            <button className='delete-button'>X</button>

        </div>

    )

}

export default ListCard