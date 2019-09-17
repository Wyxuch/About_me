import React from 'react'
import './scss/App.scss';
import Nav from './Nav';

function Header() {
    return (
      <header className="Header">
          <div className='Header_left'>
              
            <div>
                <h1 className='Type'>Hi, I'm Jarek</h1>
                <p>Junior Front-end Developer</p>
            </div>
                <h3>"I can use Javascript, what is your superpower?"</h3>
              
              <Nav/>
          </div>
          <div  className='Header_img' alt='cartoon header'/>
      </header> 
    );
  }

export default Header;