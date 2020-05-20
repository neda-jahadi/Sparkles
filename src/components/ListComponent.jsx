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
             colorClass = 'background-red text-red'
        break;
        case 'books':
            h2 = 'Book';
            titleText = 'Book Title';
            creatorText = 'Author';
            usedBeforeText = 'Read before';
            addButtonText = 'Add book';
             colorClass = 'background-yellow text-yellow';
        break;
        case 'movies':
            h2 = 'Movie';
            titleText = 'Movie Title';
            creatorText = 'Director';
            usedBeforeText = 'Seen';
            addButtonText = 'Add movie';
             colorClass = 'background-green text-green';
        break;
    }

    const jsxLista=testLista.map((item, index)=><ListCard key={item.title+index} title={item.title} creator={item.creator} usedBefore={item.usedBefore} rating={item.rating} comment={item.comment} />)
     const handleFormScreen = (e) => {
        dispatch(screenActions.formScreen(e));
    }
 
    return(
        
        <div className="desktop-mobil">
        
            <div className='desktop-menu'>
                <div className="sort">
                        <div className="drop-div">Sort</div>
                        <div className="dropdown-content">
                            <div>{titleText}</div>
                            <div>{creatorText}</div>
                            <div>Rating</div>
                            <div>{usedBeforeText}</div>
                        </div>
                  
                </div> 
                <div className="listcomponent-input">
                    <input type="text" placeholder="Search" />
                </div>
                {/* <div >
                    
                    <img className='listcomponent-largelogo' src={largeLogo} onClick ={startCard}  alt=" large logo" />
                </div> */}
                
            </div>
        <div className={colorClass}>
        <div className ="listcomponent-body" >
            {/* <div className="listcomponent-logo">
                <img className='listcomponent-logo' src={smallRedLogo}  onClick ={startCard} alt=" small red logo" />
            </div> */}
            <h1>
                {h2}
            </h1>
            <div className='listcomponent-menu'>
                <div className="sort">
                        <h2 className="drop-div">Sort</h2>
                        <div className="dropdown-content">
                            <div>Song title</div>
                            <div>Artist</div>
                            <div>Rating</div>
                            <div>Listen</div>
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
               <button onClick={handleFormScreen}>{addButtonText}</button>
            </div>
        </div>
        </div>
        </div>
        
    );
}
export default ListComponent;
