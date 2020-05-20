import React,{useState} from 'react';
import './FormStyle.css';

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/listReducer';
import HeaderComponent from './HeaderComponent';


const FormComponent = ()=>{

   	const [title, setTitle] = useState('')
    const [creator, setCreator] = useState('');
    const [usedBefore, setUsedBefore] = useState(null);
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    
    const dispatch = useDispatch();
	// användes för test const list = useSelector(state => state.list)	

    const addItem = (event) =>{

		event.preventDefault();

        let newItem = {
            title: title, 
            creator: creator,
            usedBefore: usedBefore,
            rating: rating,
            comment:comment
		} 		
        dispatch(actions.addToList(newItem));
    }



    return(
        <div className="form-view">
            <form className="background-red text-red">
                <h2>Add music</h2>

                <label htmlFor="title">Song Title</label>
                <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)}/>

                <label htmlFor="creator">Artist</label>
                <input id="creator" type="text" value={creator} onChange={e => setCreator(e.target.value)}/>
                <div>

                    <fieldset>
                        <legend>Listened to</legend>

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