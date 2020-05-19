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
				<div className="App">
					<ListComponent/>
				</div>
			)	
			break;
		case 'formScreen':
			content = (
				<div className="App">
					<FormComponent/>
				</div>
			)
			break;
		case 'welcomeScreen':
			content = (
				<div className="App">
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
				</div>
			)
			break;
		default:
			break;
	}
	return (
		content
	)
}

export default App;
