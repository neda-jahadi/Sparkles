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
					<div className="start-card-wrapper">

						<input type="radio" id="x1" className="radio" name="x"/>
						<label htmlFor="x1">
							<div className="card first-card">
								<StartCard genre={'music'}/>
							</div>
						</label>

						<input type="radio" id="x2" className="radio" name="x"/>
						<label htmlFor="x2">
							<div className="card second-card">
									<StartCard genre={'books'}/>
							</div>
						</label>

						<input type="radio" id="x3" className="radio" name="x"/>
						<label htmlFor="x3">
							<div className="card third-card">
									<StartCard genre={'movies'}/>
							</div>
						</label>
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
