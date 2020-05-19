import React from 'react'
import './ListCardStyle.css'
import Edit from '../assets/edit.png'


const ListCard=({title, creator, usedBefore, rating, comment})=>{


    return (

        <div className='list-card'>
            <h3>{title}</h3>

            <p>Creator is:{creator}</p>
            <p>Listened to: {usedBefore}s</p>
            <p>Rating:{rating} of 5</p>
            <p>Comment:{comment} </p>
            
            
            <button className='edit-button'>
                <img src={Edit} alt="Edit" className="edit-logo"/>
            </button>
          

            
            <button className='delete-button'>X</button>

        </div>

    )

}

export default ListCard