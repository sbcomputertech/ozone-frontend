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
        <ul><a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="http://samuelbennett.co.uk/ozone/"
        >
          Learn more<br />
          <b>Password: <code>OZONEproject</code></b>
        </a></ul>
      </header>
    </div>
  );
}
export default App;
