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
    const [editable, setEditable]=useState(false)

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
            dispatch(musicListActions.removeFromMusicList(item));
        }
        else if (category==='books'){
            dispatch(booksListActions.removeFromBooksList(item));
        }
        else if (category==='movies'){
            dispatch(moviesListActions.removeFromMoviesList(item));
        }
    }

    const [editTitle, setEditTitle]=useState(title);
    const [editCreator, setEditCreator]=useState(creator);
    const [editUsedBefore, setEditUsedBefore]=useState(usedBefore);
    const [editRating, setEditRating]=useState(rating);
    const [editComment, setEditComment]=useState(comment);

    const handleSaveEdit=()=>{

        if (title===editTitle && creator===editCreator && usedBefore===editUsedBefore && rating===editRating && comment===editComment){
            setEditable(false)
        }

        else{
            let editObject={
                title:title,
                creator:creator,
                editedObject:{
                    title:editTitle,
                    creator:editCreator,
                    usedBefore:editUsedBefore,
                    rating:editRating,
                    comment:editComment
                }
            }

            if(category==='books'){
                dispatch(booksListActions.editBooksList(editObject));
            }
            else if (category==='music'){
                dispatch(moviesListActions.editMusicList(editObject));
            }
            else{
                dispatch(moviesListActions.editMoviesList(editObject))
            }
          

            setEditable(false)

        }

    }

    // <p>{creatorText}:
    // <span className={editable===true ? 'no-edit' : 'edit'}>{creator} </span>
    //     <input type='text' className={editable===true ? 'edit' : 'no-edit'}/>
    // </p>
    //TODO Kolla rating. Om ingen rating, skriv ut 'not rated' (of 5 ska alltså inte vara med)
    //TODO ändra så att titel creator osv är i fetstil
    const itemCard=(
            <div className={'list-card '+colorClass}>

                <h3>{title}</h3>

                <p><span>{creatorText}: </span> {creator}</p>
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
        <div className='edit-list-card'>
        
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' value={editTitle} onChange={event=>setEditTitle(event.target.value)}/>

            <label htmlFor='creator'>{creatorText}</label>
            <input type='text' id='creator' value={editCreator} onChange={event=>setEditCreator(event.target.value)} />

            <label htmlFor='yes'>Yes</label>
            <input type='radio' id='yes' onClick={()=>setEditUsedBefore('yes')}/>
            <label htmlFor='no'>No</label>
            <input type='radio' id='no' onClick={()=>setEditUsedBefore('no')}/>

            <label htmlFor='rate'>Rating 1-5</label>
            <input type='number'id='rate' min="1" max="5" value={editRating} onChange={event=>setEditRating(event.target.value)}/>

            <label htmlFor='comment'>Comment</label>
            <input type='textarea' id='comment' value={editComment} onChange={event=>setEditComment(event.target.value)}/>
     
            <button className={'save-edit-button '+colorClassButton} onClick={handleSaveEdit}>
                Save
            </button>

            <button className={'delete-button '+colorClassButton} onClick={()=>handleDelete(title)}>X</button>

        </div>
    )

    
    if (editable===false){
        content=itemCard;
    }
    else{
        content=editCard;
    }
    
 
    return (

        <>
           
            {content}

        </>

    )

}

export default ListCard