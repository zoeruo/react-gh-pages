import logo from './logo.svg';
import './App.css';
import '../dist/output.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="color-change text-3xl font-bold underline">
          Edit <code>src/App.js</code> and save to reload.<br>
          </br>
          CSS style
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
