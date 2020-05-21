import React from 'react';
import './listcomponent.css';
import smallRedLogo from '../assets/LogoSmallRed.png';
import largeLogo from '../assets/LogoBig.png';
import ListCard from './ListCard';
import { useDispatch,useSelector } from 'react-redux';
import {screenActions} from '../features/screenReducer';
import {categoryActions} from '../features/categoryReducer';
import {listActions} from '../features/musicReducer';

const ListComponent = ({formScreen,startCard}) =>{
    const dispatch = useDispatch();

    const category = useSelector(state => state.category);
    const testLista = useSelector(state => state.musicList);

    let h2 = '', titleText = '', creatorText = '', usedBeforeText = '' , addButtonText = '';
    let colorClass = '';

    switch(category){
        case 'music':
            h2 = 'Music';
            titleText = 'Song Title';
             creatorText = 'Artist';
             usedBeforeText = 'Listened to';
             addButtonText = 'Add music';
             colorClass = 'red'
        break;
        case 'books':
            h2 = 'Book';
            titleText = 'Book Title';
            creatorText = 'Author';
            usedBeforeText = 'Read before';
            addButtonText = 'Add book';
             colorClass = 'yellow';
        break;
        case 'movies':
            h2 = 'Movie';
            titleText = 'Movie Title';
            creatorText = 'Director';
            usedBeforeText = 'Seen';
            addButtonText = 'Add movie';
             colorClass = 'green';
        break;
    }

    const jsxLista=testLista.map((item, index)=><ListCard key={item.title+index} title={item.title} creator={item.creator} usedBefore={item.usedBefore} rating={item.rating} comment={item.comment} />)
     const handleFormScreen = (e) => {
        dispatch(screenActions.formScreen(e));
    }

   
    // colorClass += ' listcomponent-body';
 
    return(
        
        <div className="desktop-mobil">
            
            <div className='desktop-menu'>
                <div className="sort">
                        <div className={`drop-div text-${colorClass} background-${colorClass} `}>Sort</div>
                        <div className={`dropdown-content text-${colorClass} background-${colorClass}`}>
                            <div className={`sortItem-${colorClass}`}>{titleText}</div>
                            <div className={`sortItem-${colorClass}`}>{creatorText}</div>
                            <div className={`sortItem-${colorClass}`}>Rating</div>
                            <div className={`sortItem-${colorClass}`}>{usedBeforeText}</div>
                        </div>
                  
                </div> 
                <div className="listcomponent-input">
                    <input type="text" placeholder="Search" />
                </div>
                {/* <div >
                    
                    <img className='listcomponent-largelogo' src={largeLogo} onClick ={startCard}  alt=" large logo" />
                </div> */}
                
            </div>
           
        
            <main className={`text-${colorClass} background-${colorClass}`}>
                {/* <div className="listcomponent-logo">
                <img className='listcomponent-logo' src={smallRedLogo}  onClick ={startCard} alt=" small red logo" />
                  </div> */}
                <h1>
                   {h2}
                </h1>
                <div className='listcomponent-menu'>
                    <div className="sort">
                        <h2 className={`drop-div text-${colorClass} background-${colorClass}`}>Sort</h2>
                        <div className={`dropdown-content text-${colorClass} background-${colorClass}`}>
                            <div className={`sortItem-${colorClass}`}>{titleText}</div>
                            <div className={`sortItem-${colorClass}`} >{creatorText}</div>
                            <div className={`sortItem-${colorClass}`}>Rating</div>
                            <div className={`sortItem-${colorClass}`}>{usedBeforeText}</div>
                        </div>
                    
                    </div> 
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                
                </div>
                <div className=" main scrollable">

                    {jsxLista}
            

                 </div>
                <div className='add-button'>
                   <button className={`button-${colorClass}`} onClick={handleFormScreen}>{addButtonText}</button>
                </div>
            </main>
        </div>
        
        
    );
}
export default ListComponent;
