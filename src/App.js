// import logo from './logo.svg';
import './App.css';


import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Highlighted link in the bottom right corner */}
      <Link
        to="/home"
        style={{
          position: 'fixed',
          bottom: 18,
          right: 18,
          minWidth: 90,
          minHeight: 44,
          padding: '0.5rem 1.2rem',
          zIndex: 20,
          background: 'linear-gradient(90deg, #cc2a49 0%, #43b7be 100%)',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '1.08rem',
          borderRadius: 8,
          boxShadow: '0 4px 18px #15151644',
          border: '2px solid #fffbe6',
          textDecoration: 'none',
          letterSpacing: '0.04em',
          transition: 'transform 0.18s, box-shadow 0.18s',
        }}
        onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.08) rotate(-2deg)'; e.currentTarget.style.boxShadow = '0 8px 32px #cc2a49bb'; }}
        onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 18px #15151644'; }}
      >
        AN IDEA
      </Link>
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
