import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br /><br />
        <p>
          Welcome to <code>Project Ozone</code>
        </p>
        <u><a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="http://samuelbennett.co.uk/ozone/"
        >
          Learn more<br />
        </a>
          <b>Password: <code>OZONEproject</code></b>
        </u>
      </header>
      <div className="Info-block">
        <h3>This is project ozone<br />A smart solution for a nonexistent problem</h3>
        <b><h4>Made by Sam Bennett</h4></b>
      </div>
    </div>
  );
}
export default App;
