import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './components/navBar/navBar.js';
import Footer from './components/footer/footer.js';
import NavBar2 from './components/navBar2/navBar.js';

function App() {
  return (
    <div className="App">
    <div id='navBar' className="navbar">
    <NavBar />
    </div>
    <footer id='footerDiv'>
      <Footer />
    </footer>
    </div>
  );
}

// ReactDOM.render(<Footer />, document.getElementById('footerDiv'))
export default App;
