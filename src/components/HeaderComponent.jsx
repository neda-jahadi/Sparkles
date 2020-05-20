import React from 'react';
import './headerstyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { screenActions } from '../features/screenReducer';

const HeaderComponent = () => {

    const dispatch = useDispatch();
    const screen = useSelector(state => state.screen);

    let goBackBtn = null;
    let logo = <img className="logo" src="assets/LogoSmallRed.png" alt="Logo" onClick={()=> dispatch(screenActions.homeScreen())}/>

    switch(screen){
        case 'formScreen':
            goBackBtn = <img onClick={()=>dispatch(screenActions.listScreen())} className="go-back" src="assets/back-red.png" alt="Go to previous page"/>
            break;
        
        case 'listScreen':
            goBackBtn = <img onClick={()=>dispatch(screenActions.homeScreen())} className="go-back" src="assets/back-red.png" alt="Go to previous page"/>
            break;
        default:
            goBackBtn = null;
            logo = null;
    }

    return(
        <header>
            {goBackBtn}
            {logo}
        </header>
    )
}

export default HeaderComponent;