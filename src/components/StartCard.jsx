import React from 'react';
import './StartCard.css';
import Music from '../assets/music.png'
import { useSelector } from 'react-redux';

const StartCard = ({changeScreen}) => {
	let lista = null;

	const list = useSelector(state => state.list)
	if(list.length == 0){
		lista = <p className="text-red">No list items</p> 
	}
	else{
		let fiveLatestItems = list.slice(Math.max(list.length - 5, 0))
		lista = fiveLatestItems.map(item => (
		<p key={item.title} className="list-item text-red">{item.title} - {item.creator}</p>	
		))
	}
	
	return(
		<div>
			<div className="start-card background-red">
				<div className="title-container">
					<h2 className="title text-red">Music</h2>
					<img src={Music} alt="Icon" width="26px" height="41px" className="icon"/>
				</div>
			
				{lista}
				<div className="btn-continer">
				
					<button className="btn-list" onClick={()=>changeScreen('listScreen')}>Music</button>
					<button className="btn-add" onClick={()=>changeScreen('formScreen')}>Add music</button>
				</div>
				
			</div>
		</div>
		
	)
}

export default StartCard ;