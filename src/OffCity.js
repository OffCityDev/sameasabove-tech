import React from 'react';
import './OffCity.css';

function OffCity() {
  return (
    <div
      className="Home-page offcity-bg"
      style={{
        backgroundImage: "url('/offcity_idea.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'top center',
        minHeight: '180vh', // allow scrolling to see full image
        width: '100vw',
        position: 'relative',
        zIndex: 0,
        overflowY: 'auto'
      }}
    >
      <header className="Home-header">OFF CITY</header>
      {/* <img
        src="/offcity_idea.png"
        alt="Off City concept"
        className="offcity-img"
      /> */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '80vh' }}>
        <div style={{ display: 'flex', gap: '2.5rem', marginBottom: '2.5rem' }}>
          {/* Art Project 1 App Icon */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: 'linear-gradient(135deg, #fffbe6 0%, #a8e063 100%)',
              boxShadow: '0 4px 18px #15151633, 0 0 0 2px #fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 8,
              border: '1.5px solid #d1d1d1',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <span style={{ fontSize: '2.3rem', color: '#43b7be', filter: 'drop-shadow(0 1px 2px #fff8)' }} role="img" aria-label="apple">🍏</span>
            </div>
            <span style={{ fontWeight: 600, color: '#151516', fontSize: '1.15rem', marginTop: 2 }}>Art Project 1</span>
          </div>
          {/* Art Project 2 App Icon */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: 'linear-gradient(135deg, #fffbe6 0%, #a88fd5 100%)',
              boxShadow: '0 4px 18px #15151633, 0 0 0 2px #fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 8,
              border: '1.5px solid #d1d1d1',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <span style={{ fontSize: '2.3rem', color: '#cc2a49', filter: 'drop-shadow(0 1px 2px #fff8)' }} role="img" aria-label="apple">🍏</span>
            </div>
            <span style={{ fontWeight: 600, color: '#151516', fontSize: '1.15rem', marginTop: 2 }}>Art Project 2</span>
          </div>
        </div>
        <blockquote className="offcity-quote">
          <span className="offcity-quote-text">
            “The arts are not a way to make a living. They are a very human way of making life more bearable.”
          </span>
          <br />
          <span className="offcity-quote-author">— Kurt Vonnegut</span>
        </blockquote>
      </div>
    </div>
  );
}

export default OffCity;
