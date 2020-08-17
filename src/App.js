import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

const clicker = {
  time: 100,
  targetX: 1,
  targetY: 1,
  work: true,
  start: function(){
    this.work = true
    setInterval(()=>{

      if(this.work){
        for(let i = 0; i < 1999; i++){
        document.elementFromPoint(this.targetX, this.targetY).click()
      }
      }else{ 
        clearInterval(this.start)
      }
    
    },this.time)
  },
  stop: function(){
    this.work = false
  }
}
document.getElementsByTagName('body')[0].onclick = function(e){
  let x = e.pageX;
  let y = e.pageY;
  console.log(x, y)
}