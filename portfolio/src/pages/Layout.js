import React from 'react';
import './Layout.css';
import logo from '../media/tm.svg';



const Layout =({children}) =>{
    return(
        <>
        
        <div className='header'>
            
            <header>
            <div style={{display: "flex", flexDirection: "row"}}>

              {/* <div className='logo'>LOGO</div> */}
              <img src={logo} alt="logo" className='logo'/>
              <div className='components' style={{display: "flex", flexDirection: "row"}}>
              <a className='list' href='#1'> Option 1</a>
              <a className='list' href='#2'> Option 2</a>
              <a className='list' href='#3'> Option 3</a>
              <a className='list' href='#4'> Option 4</a>


                <button className='cta'> Resume</button>

                
              </div>
             
              </div>
              
              </header> 
        </div>
        <main>{children}</main>
        <div> this is bottom</div>
        </>
    )
}

export default Layout;