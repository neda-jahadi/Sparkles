import React,{useState} from 'react';
import './FormStyle.css';

import { useDispatch, useSelector } from 'react-redux';
import { listActions } from '../features/listReducer';


const FormComponent = ()=>{

    const category = useSelector(state => state.category);
    console.log(category);

    let h2 = '', titleText = '', creatorText = '', usedBeforeText = '';


    switch(category){
        case 'music':
            h2 = 'Add Music';
            titleText = 'Song Title';
            creatorText = 'Artist';
            usedBeforeText = 'Listened to'
        break;
        case 'books':
            h2 = 'Add Book';
            titleText = 'Book Title';
            creatorText = 'Author';
            usedBeforeText = 'Read before'
        break;
        case 'movies':
            h2 = 'Add Movie';
            titleText = 'Movie Title';
            creatorText = 'Director';
            usedBeforeText = 'Seen'
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
        dispatch(listActions.addToList(newItem));
    }

    return(
        <div className="form-view">
            <form className="background-red text-red">
                <h2>{h2}</h2>

                <label htmlFor="title">{titleText}</label>
                <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)}/>

                <label htmlFor="creator">{creatorText}</label>
                <input id="creator" type="text" value={creator} onChange={e => setCreator(e.target.value)}/>
                <div>

                    <fieldset>
                        <legend>{usedBeforeText}</legend>

                            <label htmlFor="yes">Yes</label>
                            <input id="yes" type="radio" name="usedBefore" onClick={() => setUsedBefore(true)}/>

                            <label htmlFor="no">No</label>
                            <input id="no" type="radio" name="usedBefore" onClick={() => setUsedBefore(false)}/>
                    </fieldset>

                    <div className="rate-div">
                        <label className="rate" htmlFor="rating">Rating 1-5</label>
                        <input type="number" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)}/>
                    </div>
                </div>
                <label htmlFor="comment">Comment</label>
                <textarea  id="comment" cols="30" rows="8" alue={comment} onChange={e => setComment(e.target.value)}></textarea>
                <button onClick={event => addItem(event)}>Submit</button>
            </form>

        </div>

    )
}
export default FormComponent;