import React from 'react'
import './ListCardStyle.css'
import Edit from '../assets/edit.png'
import { useSelector } from 'react-redux';


const ListCard=({title, creator, usedBefore, rating, comment})=>{
    
   //const dispatch
    const category=useSelector(state=>state.category);
   
    let creatorText='', usedBeforeText='', colorClass='', colorClassButton='';
 
    
    switch (category){

        case 'music':
            creatorText='Artist';
            usedBeforeText='Listened to';
            colorClass='red'
            colorClassButton='red-button'
            break;

        case 'books':
            creatorText='Author';
            usedBeforeText='Read';
            colorClass='yellow'
            colorClassButton='yellow-button'
            break;

        case 'movies':
            creatorText='Producer';
            usedBeforeText='Seen';
            colorClass='green'
            colorClassButton='green-button'
            break;

        default:
  
    }

    return (

        <div className={'list-card '+colorClass}>
            <h3>{title}</h3>

            <p>{creatorText}: {creator}</p>
            <p>{usedBeforeText}: {usedBefore}s</p>
            <p>Rating: {rating} of 5</p>
            <p>Comment: {comment} </p>
            
            
            <button className={'edit-button '+colorClassButton}>
                <img src={Edit} alt="Edit" className="edit-logo"/>
            </button>
          

            
            <button className={'delete-button '+colorClassButton}>X</button>

        </div>

    )

}

export default ListCard