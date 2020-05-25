import React,{useState} from 'react'
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
    let content='itemCard'
    
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

    const handleSaveEdit=()=>{

        setEditable(false)

    }

    // <p>{creatorText}:
    // <span className={editable===true ? 'no-edit' : 'edit'}>{creator} </span>
    //     <input type='text' className={editable===true ? 'edit' : 'no-edit'}/>
    // </p>

    const itemCard=(
            <div className={'list-card '+colorClass}>

                <h3>{title}</h3>

                <p>{creatorText}:{creator}</p>
                <p>{usedBeforeText}: {usedBefore}</p>
                <p>Rating: {rating} of 5</p>
                <p>Comment: {comment} </p>
                
                <button className={'edit-button '+colorClassButton} onClick={()=>setEditable(true)}>
                    <img src={Edit} alt="Edit" className="edit-logo"/>
                </button>
            
                <button className={'delete-button '+colorClassButton} onClick={()=>handleDelete(title)}>X</button>
            </div>
    )

    const editCard=(
        <form className='edit-list-card'>
        
            <label htmlFor='title'>Title</label>
            <input type='text' id='title'/>

            <label htmlFor='creator'>{creatorText}</label>
            <input type='text' id='creator'/>

            <label htmlFor='yes'>Yes</label>
            <input type='radio' id='yes'/>
            <label htmlFor='no'>No</label>
            <input type='radio' id='no'/>

            <label htmlFor='rate'>Rating 1-5</label>
            <input type='number'id='rate' min="1" max="5"/>

            <label htmlFor='comment'>Comment</label>
            <input type='textarea' id='comment'/>
     
            <button className={'save-edit-button '+colorClassButton} onClick={handleSaveEdit}>
                Save
            </button>

            <button className={'delete-button '+colorClassButton} onClick={()=>handleDelete(title)}>X</button>

        </form>
    )

    const [editable, setEditable]=useState(false)
    if (editable===false){
        content=itemCard;
    }
    else{
        content=editCard;
    }
    
   
   
  

    return (

        <div>
           

            {content}

        </div>

    )

}

export default ListCard