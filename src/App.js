// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/saa_logo_white.png'} className="App-logo" alt="logo" />
        <p>
          SAMEASABOVE TECHNOLOGIES LTD. {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="/BUILDING"
          target="_blank"
          rel="noopener noreferrer"
        >
          UNDER CONSTRUCTION
        </a>
      </header>
    </div>
  );
}

export default App;
