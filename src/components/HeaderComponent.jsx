import React from 'react';
import './headerstyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { screenActions } from '../features/screenReducer';
import bigLogo from '../assets/LogoBig.png';
import arrowBack from '../assets/back-red.png';

const HeaderComponent = () => {

    const dispatch = useDispatch();
    const screen = useSelector(state => state.screen);

    let logoClass = 'logo';

    let content = (<>            
        <img onClick={()=>dispatch(screenActions.homeScreen())} className="go-back" src={arrowBack} alt="Go to previous page"/>

        <img className={logoClass} src={bigLogo} alt="Logo" onClick={()=> dispatch(screenActions.homeScreen())}/>
        </>
    )

    if(screen === 'welcomeScreen'){
        content = 
        <img className={logoClass} src={bigLogo} alt="Logo" onClick={()=> dispatch(screenActions.homeScreen())}/>;

        logoClass = 'logo big';
    }


    return(
        <header>
            {content}
        </header>
    )
}

export default HeaderComponent;