import 'react';
import '../styles/AboutUs.css'; 
function About() {
    return (
        <div className="container py-5">
        <h1 className="about-title text-center mb-5">À propos d'Assetra</h1>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/images/about_image.png"
              alt="Team working"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <p className="about-text">
            Dans un monde où les finances jouent un rôle central dans nos vies, il est crucial de les comprendre pour mieux bâtir son avenir. C'est pour cette raison qu'Assetra a vu le jour : une plateforme conçue pour aider les utilisateurs, même sans connaissances financières, à prendre des décisions éclairées.
            Notre mission est simple : démocratiser l'accès à l'investissement et à l'éducation financière, grâce à des outils intuitifs, des simulateurs performants et une interface accessible à tous. Que ce soit pour calculer ses impôts, simuler un placement ou comprendre le marché des actions, Assetra guide chaque utilisateur pas à pas.
            Sur notre site, chaque fonctionnalité a été pensée pour vous accompagner dans votre parcours financier, avec clarté, simplicité et sécurité. Parce que gérer son argent ne devrait jamais être une source de stress, mais un levier pour grandir.
            </p>
          </div>
        </div>
      </div>

    );
}

export default About;