import React, { useState } from 'react';
import './App.css';
import StartCard from './components/StartCard';
import Logo from './assets/LogoBig.png'
import ListComponent from './components/ListComponent';
import FormComponent from './components/FormComponent';
import { useSelector } from 'react-redux';
import HeaderComponent from './components/HeaderComponent';


// const [currentScreen, setCurrentScreen] = useState('welcomeScreen');

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
							<StartCard/>
						</div>
						<div className="card second-card">
							<StartCard/>
						</div>
						<div className="card third-card">
							<StartCard/>
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
