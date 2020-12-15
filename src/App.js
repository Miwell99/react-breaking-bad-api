//import logo from './logo.svg';
import './App.css';
import React from 'react';

export const App = () =>{
  return (
    <div className="App">
      <body>
        <nav>
          <ul>
            <li>App Name</li>
            <li>About the App</li>
            <li>About Me</li>
          </ul>
        </nav>
        <div></div>
        <footer>
          <p>Develop by Miguel González Bravo &copy; {getYear}</p>
        </footer>
      </body>
    </div>
);
}  


export default App;
