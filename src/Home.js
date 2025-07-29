import React from 'react';

import './Home.css';

const appButtons = [
  { icon: '🫥', label: 'Analytics' },
  { icon: '🫥', label: 'Global' },
  { icon: '🫥', label: 'Lab' },
  { icon: '🫥', label: 'Ideas' },
  { icon: '🫥', label: 'Settings' },
  { icon: '🫥', label: 'Connect' },
  { icon: '🫥', label: 'AI' },
  { icon: '🫥', label: 'Tools' },
  { icon: '🧠', label: 'Intelligence' },
  { icon: '🫥', label: 'Logistics' },
  { icon: '🫥', label: 'Workforce' },
  { icon: '📡', label: 'Network' },
];

// Arrange buttons in honeycomb rows (3-4-5 pattern)
const honeycombRows = [
  [0, 1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10, 11],
];

function Home() {
  return (
    <div className="Home-page">
      <header className="Home-header">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '0.7rem', width: '100%' }}>
          <img src={process.env.PUBLIC_URL + '/saat_logo_white.png'} alt="SAAT Logo" style={{ height: 150, width: 'auto', objectFit: 'contain', flexShrink: 0 }} />
          <span style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '0.04em', color: '#fff', textShadow: '0 2px 8px #15151688' }}>
            SAMEASABOVE TECHNOLOGIES
          </span>
          <img src={process.env.PUBLIC_URL + '/saa_logo_white.png'} alt="SAA Logo" style={{ height: 250, width: 'auto', objectFit: 'contain', flexShrink: 0 }} />
        </div>
      </header>
      <div className="hex-grid">
        {honeycombRows.map((row, rowIdx) => (
          <div className={`hex-row${rowIdx % 2 === 1 ? ' even' : ''}`} key={rowIdx}>
            {row.map((btnIdx) => (
              <div className="hex" key={btnIdx}>
                <div className="hex-content">
                  <span className="hex-icon">{appButtons[btnIdx].icon}</span>
                  <span className="hex-label">{appButtons[btnIdx].label}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="rect-btns">
        <div className="rect-btn coming-soon" tabIndex={-1} aria-disabled="true">
          COMING SOON: The most addicting viral online casino game ever
        </div>
        <a className="rect-btn link-btn" href="https://sameasabove.bigcartel.com/products?page=1" target="_blank" rel="noopener noreferrer">
          SAMEASABOVE.co
        </a>
        <a className="rect-btn offcity-btn" href="/offcity">
          OFF CITY
        </a>
      </div>

      <blockquote className="home-quote">
        <span className="home-quote-text">“No one is above the program.”</span>
        <br />
        <span className="home-quote-author">— The Team</span>
      </blockquote>
    </div>
  );
}

export default Home;
