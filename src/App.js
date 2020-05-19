import React, {useState} from 'react';
import './App.css';
import StartCard from './components/StartCard';
import Logo from './assets/LogoBig.png'
import ListComponent from './components/ListComponent';
import FormComponent from './components/FormComponent';
import { useSelector } from 'react-redux';



function App() {
	const [currentScreen, setCurrentScreen] = useState('welcomeScreen');
	let content= null;
	switch(currentScreen){
		case 'listScreen':
			content = (
				<ListComponent/>
			)	
			break;
		case 'formScreen':
			content = (
				<FormComponent/>
			)
			break;
		case 'welcomeScreen':
			content = (
				<>
					<img src={Logo} alt="Logo" className="logoBig"></img>
					<div className="start-card-wrapper">
						<div className="card first-card">
							<StartCard changeScreen={(param) => setCurrentScreen(param)}/>
						</div>
						<div className="card second-card">
							<StartCard changeScreen={(param) => setCurrentScreen(param)}/>
						</div>
						<div className="card third-card">
							<StartCard changeScreen={(param) => setCurrentScreen(param)}/>
						</div>
					</div>
				</>
			)
			break;
		default:
			break;
	}
	return (
		<div className="App">
			{content}
		</div>
	)
}

export default App;
