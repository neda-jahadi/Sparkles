import React from 'react';
import './listcomponent.css';
import smallRedLogo from '../assets/LogoSmallRed.png';
import largeLogo from '../assets/LogoBig.png';
const ListComponent = () =>{
     

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
            <div className="main scrollable">
                
                   <div>1</div>
                   <div>2</div>
                   <div>3</div>
                   <div>1</div>
                   <div>2</div>
                   <div>3</div>
               
                
                   <div>1</div>
                   <div>2</div>
                   <div>3</div>
                   <div>1</div>
                   <div>2</div>
                   <div>3</div>
                
                   
            </div>
            <div>
               <button>Add music</button>
            </div>
        </div>
        </div>
    );
}
export default ListComponent;
