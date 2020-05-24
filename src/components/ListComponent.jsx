import React,{useState} from 'react';
import './listcomponent.css';
import ListCard from './ListCard';
import { useDispatch,useSelector } from 'react-redux';
import {screenActions} from '../features/screenReducer';


const ListComponent = ({formScreen,startCard}) =>{
    const dispatch = useDispatch();

    const category = useSelector(state => state.category);
    const musicList = useSelector(state => state.musicList);
    const moviesList = useSelector(state => state.moviesList);
    const booksList = useSelector(state => state.booksList);

    
    const [mySearch, setMySearch] = useState('');
    const [sorteringNyckel,setSorteringNyckel] = useState('');

    let h2 = '', titleText = '', creatorText = '',
     usedBeforeText = '' , addButtonText = '' , list =[] , copy = [];
    let colorClass = '';
    let sorteringsNyckel = '';
    

    switch(category){
        case 'music':
            h2 = 'Music';
            titleText = 'Song Title';
             creatorText = 'Artist';
             usedBeforeText = 'Listened to';
             addButtonText = 'Add music';
             colorClass = 'red';
             list = musicList; 
        break;
        case 'books':
            h2 = 'Books';
            titleText = 'Book Title';
            creatorText = 'Author';
            usedBeforeText = 'Read before';
            addButtonText = 'Add book';
             colorClass = 'yellow';
             list = moviesList; 
        break;
        case 'movies':
            h2 = 'Movies';
            titleText = 'Movie Title';
            creatorText = 'Director';
            usedBeforeText = 'Seen';
            addButtonText = 'Add movie';
             colorClass = 'green';
             list = booksList; 
        break;
    }

    let search = [...list];
      
    

     if (mySearch !==''){
         
         search =[...list].filter(item=>
            (item.title).toLowerCase().includes(mySearch)||
            (item.creator).toLowerCase().includes(mySearch)||
            (item.comment).toLowerCase().includes(mySearch) ||
            (item.usedBefore).toLowerCase().includes(mySearch) ||
            (item.rating).includes(mySearch)
        );
     }else {
         search = [...list];
     }

     
     if(sorteringNyckel ==='title'){
       
        let sorterade = search.sort((a,b)=>{
            if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
            else if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            else return 0;
        })
        search = sorterade;
    } else if (sorteringNyckel === 'usedBefore') {
        let sorterade = search.sort((a,b)=>{
            if (a.usedBefore.toLowerCase() > b.usedBefore.toLowerCase()) return -1;
            else if (a.usedBefore.toLowerCase() < b.usedBefore.toLowerCase()) return 1;
            else return 0;
        })
        search = sorterade;
    }else
     if (sorteringNyckel === 'creator') {
        let sorterade = search.sort((a,b)=>{
            if (a.creator.toLowerCase() < b.creator.toLowerCase()) return -1;
            else if (a.creator.toLowerCase() > b.creator.toLowerCase()) return 1;
            else return 0;
        })
        search = sorterade;
    }else {
        
        let sorterade = search.sort((a,b)=> Number(a.rating) - Number(b.rating));
        search = sorterade;
    }

    
    
    


    const jsxLista=search.map((item, index)=><ListCard key={item.title+index} title={item.title} creator={item.creator} usedBefore={item.usedBefore} rating={item.rating} comment={item.comment} />)
     const handleFormScreen = (e) => {
        dispatch(screenActions.formScreen(e));
    }

 
    return(
    
           
        
            <main className={`text-${colorClass} background-${colorClass}`}>
               
                <h2>
                   {h2}
                </h2>
                <div className='listcomponent-menu'>
                    <div className={`sort background-${colorClass}`}>
                        <h2 className={`drop-div text-${colorClass} `}>Sort</h2>
                        <div className={`dropdown-content text-${colorClass} background-${colorClass}`}>
                            <div className={`sortItem-${colorClass}`} onClick={()=>{setSorteringNyckel('title'); console.log('sortering is:',sorteringNyckel); }}>{titleText}</div>
                            <div className={`sortItem-${colorClass}`} onClick={()=>{setSorteringNyckel('creator'); console.log('sortering is:',sorteringNyckel); }}>{creatorText}</div>
                            <div className={`sortItem-${colorClass}`} onClick={()=>{setSorteringNyckel('rating'); console.log('sortering is:',sorteringNyckel);}}>Rating</div>
                            <div className={`sortItem-${colorClass}`} onClick={()=>{setSorteringNyckel('usedBefore'); console.log('sortering is:',sorteringNyckel); }}>{usedBeforeText}</div>
                        </div>
                    
                    </div> 
                    <div>
                        <input className={colorClass} type="text" value={mySearch} onChange = {(event)=>setMySearch(event.target.value)} placeholder="Search"></input>
                    </div>
                
                </div>
                <div className=" main scrollable">

                    {jsxLista}
            

                 </div>
                <div className='add-button'>
                   <button className={`button-${colorClass}`} onClick={handleFormScreen}>{addButtonText}</button>

                </div>
            </main>
       
        
        
    );
}
export default ListComponent;