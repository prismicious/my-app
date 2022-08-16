import logo from './logo.svg';
import './App.css';
import secrets from './passwordfile.json'
function App() {
  return (

    <div className="App">
      <p>print env secret to HTML</p>
      <p> Secret: {secrets.api_key} </p>
      <p>Nuclear launch codes: {secrets.nuclearlaunchcodes}</p>

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
