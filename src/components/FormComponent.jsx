import React,{useState} from 'react';
import './FormStyle.css';
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { musicListActions } from '../features/musicReducer';
import { booksListActions } from '../features/booksReducer';
import { moviesListActions } from '../features/moviesReducer';
import {categoryActions} from '../features/categoryReducer';
import bookIcon from '../assets/good.png';
import musicIcon from '../assets/music.png';
import movieIcon from '../assets/video-camera.png';

const FormComponent = ()=>{
    const {register, handleSubmit, errors } = useForm();
    const [usedBefore, setUsedBefore] = useState(null);
	const dispatch = useDispatch();


    const onSubmit = (data) => {

    if(category === 'music'){
        console.log('category', category);
        dispatch(musicListActions.addToMusicList(data));
    } 
    else if(category === 'books'){
        console.log('category', category);
        dispatch(booksListActions.addToBooksList(data));
    }
    else if(category === 'movies'){
        console.log('category', category);
        dispatch(moviesListActions.addToMoviesList(data));
    }
}

    const category = useSelector( state => state.category );
    let h2 = '', titleText = '', creatorText = '', usedBeforeText = '';
    let colorFormClass = '';
    let colorInputClass='';
	let musicTab='';
    let bookTab='';
    let movieTab='';
    let buttonClass='';
    let errorClass='';

    switch(category){
        case 'music':
            h2 = 'Add Music';
            titleText = 'Song Title';
            creatorText = 'Artist';
            usedBeforeText = 'Listened to';
            colorFormClass = 'text-red';
            colorInputClass='input-background-red';
            musicTab=' tab-active';
            buttonClass=' button-red';
            errorClass=' error-red';
        break;
        case 'books':
            h2 = 'Add Book';
            titleText = 'Book Title';
            creatorText = 'Author';
            usedBeforeText = 'Read before';
            colorFormClass = 'text-yellow';
            colorInputClass='input-background-yellow';
            bookTab=' tab-active';
            buttonClass=' button-yellow';
            errorClass=' error-yellow';
        break;
        case 'movies':
            h2 = 'Add Movie';
            titleText = 'Movie Title';
            creatorText = 'Director';
            usedBeforeText = 'Seen';
            colorFormClass = 'text-green';
            colorInputClass='input-background-green';
            movieTab=' tab-active';
            buttonClass=' button-green';
            errorClass=' error-green';
        break;
        default:
    }

    return(
		<div className="form-view">
            <nav>
                <button className={'tab background-red'+musicTab} onClick={()=> dispatch(categoryActions.choseMusic())}><img src={musicIcon} alt="Go to music category" className="music-icon"/></button>   
                <button className={'tab background-yellow'+bookTab} onClick={()=> dispatch(categoryActions.choseBooks())}><img src={bookIcon} alt="Go to book category" className="book-icon"/></button>
                <button className={'tab background-green'+movieTab} onClick={()=> dispatch(categoryActions.choseMovies())}><img src={movieIcon} alt="Go to movie category" className="movie-icon"/></button>

            </nav>

            <form className={colorFormClass} onSubmit={handleSubmit(onSubmit)}>

            

            
                <h2>{h2}</h2>

                <label htmlFor="title">{titleText}</label>
                <input className={colorInputClass} id="title" type="text" ref={register({ required: true, minLength:2, maxLength:30 })} name="title"/>
                
                
                {errors.title && errors.title.type === 'required' && <p className={errorClass}>Title is required</p>}
                {errors.title && errors.title.type === "minLength" && <p className={errorClass}>This field required min length of 2</p>}

                
                
                <label htmlFor="creator">{creatorText}</label>
                    <input className={colorInputClass} id="creator" type="text"  ref={register({maxLength:30})} name="creator"/>
                <div>

                    <fieldset>
                        <legend>{usedBeforeText}</legend>

                            <label htmlFor="yes">Yes</label>
                            <input className={colorInputClass} id="yes" type="radio" name="usedBefore" value='yes' onClick={()=> setUsedBefore(true)} ref={register}/>

                            <label htmlFor="no">No</label>
                            <input className={colorInputClass} id="no" type="radio" name="usedBefore"  value="no" onClick={()=> setUsedBefore(false)} ref={register}/>
                    </fieldset>

                    <div className="rate-div">
                        <label className="rate" htmlFor="rating">Rating 1-5</label>
                        <input className={colorInputClass} type="number" min="1" max="5" ref={register( {required:usedBefore}) } name="rating"/>
                        {errors.rating && errors.rating.type === 'required' && <span className={errorClass}>Rating is required</span>}
                    </div>
                </div>
                <label htmlFor="comment">Comment</label>
                <textarea className={colorInputClass}  id="comment" cols="30" rows="8" ref={register} name="comment"/>
                <input type="submit" className={buttonClass + " submit-button"}/>
            </form>
		</div>
    )
}
export default FormComponent;