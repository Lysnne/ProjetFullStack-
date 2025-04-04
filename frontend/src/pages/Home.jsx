import React from 'react';
import '../styles/Home.css'


export default function Home() {

  return (
    <div className="container">

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
    </div>
  );
}