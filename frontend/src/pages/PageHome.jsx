
import '../css/styles.css'
export default function PageHome() {
  return (
    <div className="container">
      <header>
        <a href="/" className="logo">Assetra</a>
        <nav className='items'>
          <a href="" className='itemsdans'>Home</a>
          <a href="" className='itemsdans'>about us</a>
          <a href="" className='itemsdans'>Markets</a>
          <a href="" className='itemsdans'>Tools</a>
          <a href="" className='itemsdans'>Support</a>

        </nav>
        <button className="btn btn-primary">Sign up</button>
      </header>

      <main>
        <div className="hero-content">
          <h1>Market Analytics Simplified</h1>
          <p>Monitor market trends and analyze financial data with our intuitive dashboard</p>
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
        <div className="charts">
          <div className="chart">
            <div className="chart-title">
              <span>Market Trend</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3V21H21" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 15L9 9L13 13L21 5" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="chart-placeholder"></div>
          </div>
          <div className="chart">
            <div className="chart-title">
              <span>Volume</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3V21H21" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 15L9 9L13 13L21 5" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="chart-placeholder"></div>
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