import React,{useState} from 'react';
import './FormStyle.css';

import { useDispatch, useSelector } from 'react-redux';
import { musicListActions } from '../features/musicReducer';
import {categoryActions} from '../features/categoryReducer';
import bookIcon from '../assets/good.png';
import musicIcon from '../assets/music.png';
import movieIcon from '../assets/video-camera.png';


const FormComponent = ()=>{

    const category = useSelector(state => state.category);
    let h2 = '', titleText = '', creatorText = '', usedBeforeText = '';
    let colorFormClass = '';
    let colorInputClass='';
    let musicTab=''
    let bookTab=''
    let movieTab=''
   

    switch(category){
        case 'music':
            h2 = 'Add Music';
            titleText = 'Song Title';
            creatorText = 'Artist';
            usedBeforeText = 'Listened to';
            colorFormClass = 'background-red text-red';
            colorInputClass='input-background-red';
            musicTab=' tab-active'
        break;
        case 'books':
            h2 = 'Add Book';
            titleText = 'Book Title';
            creatorText = 'Author';
            usedBeforeText = 'Read before';
            colorFormClass = 'background-yellow text-yellow';
            colorInputClass='input-background-yellow';
            bookTab=' tab-active';
        break;
        case 'movies':
            h2 = 'Add Movie';
            titleText = 'Movie Title';
            creatorText = 'Director';
            usedBeforeText = 'Seen';
            colorFormClass = 'background-green text-green';
            colorInputClass='input-background-green';
            movieTab=' tab-active';
        break;
    }

   	const [title, setTitle] = useState('')
    const [creator, setCreator] = useState('');
    const [usedBefore, setUsedBefore] = useState(null);
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
        dispatch(musicListActions.addToList(newItem));
    }
 

    return(

    <>   

        <div className="form-view">

            <nav>
                <button className={'tab background-red'+musicTab} onClick={()=> dispatch(categoryActions.choseMusic())}><img src={musicIcon} alt="Go to music category" className="music-icon"/></button>   
                <button className={'tab background-yellow'+bookTab} onClick={()=> dispatch(categoryActions.choseBooks())}><img src={bookIcon} alt="Go to book category" className="book-icon"/></button>
                <button className={'tab background-green'+movieTab} onClick={()=> dispatch(categoryActions.choseMovies())}><img src={movieIcon} alt="Go to movie category" className="movie-icon"/></button>

            </nav>
     
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
                             <input className={colorInputClass} id="yes" type="radio" name="usedBefore" onClick={() => setUsedBefore(true)} />

                            <label htmlFor="no">No</label>
                             <input className={colorInputClass} id="no" type="radio" name="usedBefore" onClick={() => setUsedBefore(false)}/>
                    </fieldset>

                    <div className="rate-div">
                        <label className="rate" htmlFor="rating">Rating 1-5</label>
                         <input className={colorInputClass} type="number" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)}/>
                    </div>
                </div>
                <label htmlFor="comment">Comment</label>
                <textarea className={colorInputClass}  id="comment" cols="30" rows="8" alue={comment} onChange={e => setComment(e.target.value)}></textarea>
                <button onClick={event => addItem(event)}>Submit</button>
            </form>

        </div>
    </>

    )
}
export default FormComponent;