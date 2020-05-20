import React, { useState } from 'react';
import './StartCard.css';
import Music from '../assets/music.png'
import Movies from '../assets/video-camera.png'
import Books from '../assets/good.png'
import { useSelector } from 'react-redux';

const StartCard = ({changeScreen, genre}) => {

	const list = useSelector(state => state.list)
	let title = '';
	let icon = null;
	let color = null;
	let lista = null;
	switch(genre){
		case 'Music': 
			title = 'Music';
			icon = Music; 
			color = 'red'
			break;
		case 'Books': 
			title = 'Books';
			icon = Books;
			color = 'yellow'
			break;
		case 'Movies':
			color = 'green'
			title = 'Movies';
			icon = Movies;
			break;
		default:
			color = 'green'
			title = 'Movies';
			icon = Movies; 
			break;
			
	}
	if(list.length === 0){
		lista = <p className={`text-${color}`}>No list items</p> 
	}
	else{
		let fiveLatestItems = list.slice(Math.max(list.length - 5, 0))
		lista = fiveLatestItems.map((item,index) => (
		<p key={item.title+index} className={`list-item text-${color}`}>{item.title} - {item.creator}</p>	
		))
	}
	
	return(
		<div>
			<div className={`start-card background-${color}`}>
				<div className="title-container">
					<h2 className={`title text-${color}`}>{title}</h2>
					<img src={icon} alt="Icon" width="30em" height="40em" className="icon"/>
				</div>
			
				{lista}
				<div className="btn-container">
					<button className={`btn-list button-${color}`} onClick={()=>changeScreen('listScreen')}>{title} list</button>
					<button className={`btn-add button-${color}`} onClick={()=>changeScreen('formScreen')}>Add {title}</button>
				</div>
				
			</div>
		</div>
		
	)
}

export default StartCard ;