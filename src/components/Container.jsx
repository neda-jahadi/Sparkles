import React from 'react';
import { categoryActions } from '../features/categoryReducer';
import bookIcon from '../assets/good.png';
import musicIcon from '../assets/music.png';
import movieIcon from '../assets/video-camera.png';
import { useSelector, useDispatch } from 'react-redux';
import './Container.css';

const Container = ({children}) => {

    const category = useSelector( state => state.category );
    const dispatch = useDispatch();

    let musicTab='';
    let bookTab='';
    let movieTab='';

    switch(category){
        case 'music':
            musicTab=' tab-active';
        break;
        case 'books':
            bookTab=' tab-active';
        break;
        case 'movies':
            movieTab=' tab-active';
        break;
        default:
    }

    return(

        <section>
            <nav>
                    <button className={'tab background-red'+musicTab} 
                    onClick={()=> dispatch(categoryActions.choseMusic())}>
                        <img src={musicIcon} alt="Go to music category" className="music-icon"/>
                    </button>

                    <button className={'tab background-yellow'+bookTab} 
                    onClick={()=> dispatch(categoryActions.choseBooks())}>
                        <img src={bookIcon} alt="Go to book category" className="book-icon"/>
                    </button>

                    <button className={'tab background-green'+movieTab} 
                    onClick={()=> dispatch(categoryActions.choseMovies())}>
                        <img src={movieIcon} alt="Go to movie category" className="movie-icon"/>
                    </button>

                </nav>
                {children}
        </section>
    )
}

export default Container;