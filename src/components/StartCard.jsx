import React from 'react';
import './StartCard.css';
import Music from '../assets/music.png'
import { useSelector } from 'react-redux';

const StartCard = ({changeScreen}) => {
	const list = useSelector(state => state.list)
	const lista = list.map(item => (
		<p key={item.title} className="list-item text-red">{item.title} - {item.creator}</p>	
	))

	return(
		<div className="container">
			<div className="start-card background-red">
				<img src={Music} alt="Icon" width="36px" height="51px" className="icon"/>
				<h2 className="title text-red">Music</h2>
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