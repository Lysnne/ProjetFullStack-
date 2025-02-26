import { useState } from 'react';
import '../css/styles.css'

export default function PageHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container">
      <header>
        <div className='layout'>
          <a href="/" className="logo">Assetra</a>
        </div>
        <nav className={`items ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className='itemsdans'>Home</a>
          <a href="/markets" className='itemsdans'>Markets</a>
          <a href="/about" className='itemsdans'>About us</a>
          <a href="/support" className='itemsdans'>Support</a>
        </nav>
        <div className="header-right">
          <button 
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <button className="btn btn-primary">Sign up</button>
        </div>
      </header>

      <main>
        <div className="hero-content">
          <h1>Market Analytics Simplified</h1>
          <p>Monitor market trends and analyze financial <br />data with our intuitive dashboard</p>
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
        <div className="charts">
          <div className="chart">
            <div className="chart-title">
              <span>Market Trend</span>
              <img src='../images/Graphs and a piggy bank.png' alt="" className='imagess' />
            </div>
          </div>
          <div className="chart">
            <div className="chart-title">
              <span>Volume</span>
              <img src='../images/interactive graphs for financial analysis.png' alt="" className='imagess' />
            </div>
          </div>
          <div className="chart">
            <div className="chart-title">
              <span>Volume</span>
              <img src='../images/Сrypto analytics on computer monitor.png' alt="" className='imagess' />
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="partners">
          <span className="partner">AlphaWave</span>
          <span className="partner">FusionX</span>
          <span className="partner">OptiCore</span>
          <span className="partner">MaxiWave</span>
          <span className="partner">StellarCore</span>
        </div>
      </footer>
    </div>
  );
}