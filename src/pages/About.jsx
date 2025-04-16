import 'react';
import '../styles/AboutUs.css'; 
function About() {
    return (
        <div className="container py-5">
        <h1 className="about-title text-center mb-5">About us</h1>
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
              In the heart of a bustling city, where skyscrapers cast long shadows over busy streets, life unfolds in a vibrant tapestry of cultures, sounds, and stories. Each corner brims with the aroma of diverse cuisines, beckoning passersby to explore new flavors, while street performers share their talents, creating a symphony of music that dances through the air.
              
              Amidst the frenetic energy, moments of serenity can be found in tranquil parks, where individuals escape the chaos, finding solace in nature's embrace. This dynamic interplay of urban life reflects not just a place but a profound celebration of humanity's endless pursuit of connection, creativity, and experience.
            </p>
          </div>
        </div>
      </div>

    );
}

export default About;