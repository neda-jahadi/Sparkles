import React from 'react'
import './ListCardStyle.css'
import Edit from '../assets/edit.png'
import { useSelector, useDispatch } from 'react-redux';
import { musicListActions } from '../features/musicReducer'
import { booksListActions } from '../features/booksReducer'
import { moviesListActions } from '../features/moviesReducer'

const ListCard=({title, creator, usedBefore, rating, comment})=>{
    
    const dispatch = useDispatch();
    const category = useSelector(state=>state.category);

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
    
    const handleDelete=(item)=>{

        if(category==='music'){
            dispatch(musicListActions.removeFromList(item));
        }
        else if (category==='books'){
            dispatch(booksListActions.removeFromList(item));
        }
        else if (category==='movies'){
            dispatch(moviesListActions.removeFromList(item));
        }


    }

    return (

        <div className={'list-card '+colorClass}>
            <h3>{title}</h3>

            <p>{creatorText}: {creator}</p>
            <p>{usedBeforeText}: {usedBefore}</p>
            <p>Rating: {rating} of 5</p>
            <p>Comment: {comment} </p>
            
            
            <button className={'edit-button '+colorClassButton}>
                <img src={Edit} alt="Edit" className="edit-logo"/>
            </button>
          

            {/* skapa onClick dispatch delete from musiclist */}
            <button className={'delete-button '+colorClassButton} onClick={()=>handleDelete(title)}>X</button>

        </div>

    )

}

export default ListCard