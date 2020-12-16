//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from './components/Footer';

export const App = () => {

  return (
    <div className="App">
        <nav>
          <ul>
            <li>App Name</li>
            <li>About the App</li>
            <li>About Me</li>
          </ul>
        </nav>
        <div>
          <Footer></Footer>
        </div>
    </div>
  );
}


export default App;
