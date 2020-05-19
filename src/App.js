import React from 'react';
import './App.css';
import StartCard from './components/StartCard';
import Logo from './assets/LogoBig.png'
import ListComponent from './components/ListComponent';
import FormComponent from './components/FormComponent';
import { useSelector } from 'react-redux';



function App() {
	return (
		<div className="App">
			{/* <img src={Logo} alt="Logo" className="logoBig"></img> */}
			{/* <div className="start-card-wrapper">
				<div className="card first-card">
					<StartCard/>
				</div>
				<div className="card second-card">
					<StartCard/>
				</div>
				<div className="card third-card">
					<StartCard/>
				</div>
			</div> */}
			{/* <FormComponent/> */}
			{/* <ListCard/> */}
			 <ListComponent /> 
		</div>
	)
}

export default App;
