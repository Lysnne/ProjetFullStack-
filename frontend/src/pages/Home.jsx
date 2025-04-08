import React from 'react';
import '../styles/Home.css'


export default function Home() {

  const cards = [
    { title: "Trade with trust and assurance", img: "../images/Graphs and a piggy bank.png", alt: "Market Trend" },
    { title: "Create your own personal portfolio", img: "../images/interactive graphs for financial analysis.png", alt: "Volume" },
    { title: "Earn money through smart investments", img: "../images/Сrypto analytics on computer monitor.png", alt: "Volume 2" }
  ];

  return (
    <div className="container py-5" style={{ maxWidth: '80%' }}>
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Market Analytics Simplified</h1>
        <p className="lead">
          Monitor market trends and analyze financial <br />
          data with our intuitive dashboard
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-outline-secondary">Learn More</button>
        </div>
      </div>

      <div className="row g-4">
        {cards.map((card, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 text-center p-3">
              <h5 className="card-title mb-3">{card.title}</h5>
              <img
                src={card.img}
                alt={card.alt}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}