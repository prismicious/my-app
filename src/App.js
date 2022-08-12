import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <p>print env secret to HTML</p>
<p>Secret: {process.env.REACT_APP_SECRET_KEY}</p>
<p>Nuclear launch codes: {process.env.REACT_APP_NUCLEAR_LAUNCH_CODES}</p>
      
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
