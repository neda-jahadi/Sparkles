import React,{useState} from 'react';
import './FormStyle.css';

import { useDispatch, useSelector } from 'react-redux';
import { musicListActions } from '../features/musicReducer';
import { booksListActions } from '../features/booksReducer';
import { moviesListActions } from '../features/moviesReducer';


const FormComponent = ()=>{

    const category = useSelector( state => state.category );
    let h2 = '', titleText = '', creatorText = '', usedBeforeText = '';
    let colorFormClass = '';
    let colorInputClass='';
    let buttonColor=''
   

    switch(category){
        case 'music':
            h2 = 'Add Music';
            titleText = 'Song Title';
            creatorText = 'Artist';
            usedBeforeText = 'Listened to';
            colorFormClass = 'text-red';
            colorInputClass='input-background-red';
            buttonColor='button-red'
        break;
        case 'books':
            h2 = 'Add Book';
            titleText = 'Book Title';
            creatorText = 'Author';
            usedBeforeText = 'Read before';
            colorFormClass = 'text-yellow';
            colorInputClass='input-background-yellow';
            buttonColor='button-yellow'
        break;
        case 'movies':
            h2 = 'Add Movie';
            titleText = 'Movie Title';
            creatorText = 'Director';
            usedBeforeText = 'Seen';
            colorFormClass = 'text-green';
            buttonColor='button-green'
            colorInputClass='input-background-green';
        break;
        default:
    }

   	const [title, setTitle] = useState('')
    const [creator, setCreator] = useState('');
    const [usedBefore, setUsedBefore] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    
    const dispatch = useDispatch();

    const addItem = (event) =>{

		event.preventDefault();

        let newItem = {
            title: title, 
            creator: creator,
            usedBefore: usedBefore,
            rating: rating,
            comment:comment
        }
        if(category==='music'){
            dispatch(musicListActions.addToList(newItem));
        } 
        else if(category==='books'){
            dispatch(booksListActions.addToList(newItem));
        }
        else if(category==='movies'){
            dispatch(moviesListActions.addToList(newItem));
        }
    }

    return(

            <form className={colorFormClass}>
            
                <h2>{h2}</h2>

                <label htmlFor="title">{titleText}</label>
                <input className={colorInputClass} id="title" type="text" value={title} onChange={e => setTitle(e.target.value)}/>

                <label htmlFor="creator">{creatorText}</label>
                    <input className={colorInputClass} id="creator" type="text" value={creator} onChange={e => setCreator(e.target.value)}/>
                <div>

                    <fieldset>
                        <legend>{usedBeforeText}</legend>

                            <label htmlFor="yes">Yes</label>
                             <input className={colorInputClass} id="yes" type="radio" name="usedBefore" onClick={() => setUsedBefore('yes')} />

                            <label htmlFor="no">No</label>
                             <input className={colorInputClass} id="no" type="radio" name="usedBefore" onClick={() => setUsedBefore('no')}/>
                    </fieldset>

                    <div className="rate-div">
                        <label className="rate" htmlFor="rating">Rating 1-5</label>
                        <input className={colorInputClass} type="number" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)}/>
                    </div>
                </div>
                <label htmlFor="comment">Comment</label>
                <textarea className={colorInputClass}  id="comment" cols="30" rows="8" alue={comment} onChange={e => setComment(e.target.value)}></textarea>
                <button className={buttonColor} onClick={event => addItem(event)}>Submit</button>
            </form>
    )
}
export default FormComponent;