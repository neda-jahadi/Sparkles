import React,{useState} from 'react';
import './listcomponent.css';
import ListCard from './ListCard';
import { useDispatch,useSelector } from 'react-redux';
import {screenActions} from '../features/screenReducer';
import {categoryActions} from '../features/categoryReducer';

let search = [];
const ListComponent = ({formScreen,startCard}) =>{
    const dispatch = useDispatch();

    const category = useSelector(state => state.category);
    const musicList = useSelector(state => state.musicList);
    const moviesList = useSelector(state => state.moviesList);
    const booksList = useSelector(state => state.booksList);

    
    const [mySearch, setMySearch] = useState('');

    let h2 = '', titleText = '', creatorText = '',
     usedBeforeText = '' , addButtonText = '' , list =[] , copy = [], sorteringsNyckel = 'title';
    let colorClass = '';
    

    switch(category){
        case 'music':
            h2 = 'Music';
            titleText = 'Song Title';
             creatorText = 'Artist';
             usedBeforeText = 'Listened to';
             addButtonText = 'Add music';
             colorClass = 'red';
        break;
        case 'books':
            h2 = 'Books';
            titleText = 'Book Title';
            creatorText = 'Author';
            usedBeforeText = 'Read before';
            addButtonText = 'Add book';
             colorClass = 'yellow';
        break;
        case 'movies':
            h2 = 'Movies';
            titleText = 'Movie Title';
            creatorText = 'Director';
            usedBeforeText = 'Seen';
            addButtonText = 'Add movie';
             colorClass = 'green';
        break;
    }

    if(h2 ==='Music'){
        list = musicList;
       
       
    } else if (h2 === 'Movies'){
        list = moviesList;
        
    }else {
        list = booksList;
        
    }
    
    
    const handleSearch =(event) => {
        
        setMySearch(event.target.value);
       
        
    }
     if (mySearch !==''){
         search =[...list].filter(item=>
            (item.title).toLowerCase().includes(mySearch)||
            (item.creator).toLowerCase().includes(mySearch)||
            (item.comment).toLowerCase().includes(mySearch)
        );
     }else {
         search = list;
     }
    
     

    const handleSortTitle = () => {
       sorteringsNyckel = 'title';
    }
    const handleSortCreator = () => {
        sorteringsNyckel = 'creator';
    }
    const handleSortUsedBefore = () => {
        sorteringsNyckel = 'usedBedfore';
    }
    const handleSortRate = () => {
        sorteringsNyckel = 'rating';
    }
     const sorteradeList = () => {
         copy = [...list];
         
         return copy;
     }

    const jsxLista=search.map((item, index)=><ListCard key={item.title+index} title={item.title} creator={item.creator} usedBefore={item.usedBefore} rating={item.rating} comment={item.comment} />)
     const handleFormScreen = (e) => {
        dispatch(screenActions.formScreen(e));
    }

   

    
    
 
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
                    <input type="text" value={mySearch} onChange = {handleSearch} placeholder="Search"></input>
                </div>
            </div>
           
        
            <main className={`text-${colorClass} background-${colorClass}`}>
               
                <h1>
                   {h2}
                </h1>
                <div className='listcomponent-menu'>
                    <div className="sort">
                        <h2 className={`drop-div text-${colorClass} background-${colorClass}`}>Sort</h2>
                        <div className={`dropdown-content text-${colorClass} background-${colorClass}`}>
                            <div className={`sortItem-${colorClass}`} onClick={handleSortTitle}>{titleText}</div>
                            <div className={`sortItem-${colorClass}`} onClick={handleSortCreator}>{creatorText}</div>
                            <div className={`sortItem-${colorClass}`} onClick={handleSortRate}>Rating</div>
                            <div className={`sortItem-${colorClass}`} onClick={handleSortUsedBefore}>{usedBeforeText}</div>
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
