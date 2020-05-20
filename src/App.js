import React, { useState } from 'react';
import './App.css';
import StartCard from './components/StartCard';
import Logo from './assets/LogoBig.png'
import ListComponent from './components/ListComponent';
import FormComponent from './components/FormComponent';
import ListCard from './components/ListCard'
import { useSelector } from 'react-redux';
import HeaderComponent from './components/HeaderComponent';

function App() {


	const currentScreen = useSelector(state => state.screen);
	let showHeader = <HeaderComponent/>;

	let content = null;

	switch(currentScreen){
		case 'listScreen':
			content = <ListComponent/>
			break;
		case 'formScreen':
			content = <FormComponent/>
			break;
		case 'welcomeScreen':
			content = (
				<>
					<img src={Logo} alt="Logo" className="logoBig"></img>
					<div className="start-card-wrapper">
						<div className="card first-card">
							<StartCard genre={'music'}/>
						</div>
						<div className="card second-card">
							<StartCard genre={'books'}/>
						</div>
						<div className="card third-card">
							<StartCard genre={'movies'}/>
						</div>
					</div>
				</>
			)
			showHeader = null;
			break;
		default:
			break;
	}
	return (
		<div className="App">
			{showHeader}
			{content}
		</div>
	)
}

export default App;
