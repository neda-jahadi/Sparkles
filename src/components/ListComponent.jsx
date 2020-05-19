import React from 'react';
import './listcomponent.css';
import smallRedLogo from '../assets/LogoSmallRed.png';
import largeLogo from '../assets/LogoBig.png';
import ListCard from './ListCard'
const ListComponent = () =>{
     

    let testLista=[
        {title:'en titel', creator:'en creator', usedBefore:true, rating: 4, comment:'en kommentar'},
        {title:'2 titel', creator:'2 creator', usedBefore:true, rating: 4, comment:'2 kommentar'},
        {title:'3 titel', creator:'3 creator', usedBefore:true, rating: 4, comment:'3 kommentar'},
        {title:'4 titel', creator:'3 creator', usedBefore:true, rating: 4, comment:'3 kommentar'},
        {title:'5 titel', creator:'3 creator', usedBefore:true, rating: 4, comment:'3 kommentar'},
        {title:'5 titel', creator:'3 creator', usedBefore:true, rating: 4, comment:'3 kommentar'},
        {title:'5 titel', creator:'3 creator', usedBefore:true, rating: 4, comment:'3 kommentar'}
    ]

    const jsxLista=testLista.map(item=><ListCard key={item.title} title={item.title} creator={item.creator} usedBefore={item.usedBefore} rating={item.rating} comment={item.comment} />)

 
    return(
        <div className="desktop-mobil">
        <div className="menu-desktop">
            <div className='desktop-menu'>
                <div className="sort">
                        <div className="drop-div">Sort</div>
                        <div className="dropdown-content">
                            <div>Song title</div>
                            <div>Artist</div>
                            <div>Rating</div>
                            <div>Listen</div>
                        </div>
                  
                </div> 
                <div className="listcomponent-input">
                    <input type="text" placeholder="Search" />
                </div>
                <div>
                    <img className='listcomponent-largelogo' src={largeLogo} alt=" large logo" />
                </div>
                
            </div>
        </div>
        <div className="listcomponent-body">
            <div className="listcomponent-logo">
                <img className='listcomponent-logo' src={smallRedLogo} alt=" small red logo" />
            </div>
            <h1>
                Music
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
                <div className="listcomponent-input">
                   <input type="text" placeholder="Search" />
                </div>
                
            </div>
            <div className=" main scrollable">

                    {jsxLista}
            

            </div>
            <div className='add-button'>
               <button>Add music</button>
            </div>
        </div>
        </div>
    );
}
export default ListComponent;

