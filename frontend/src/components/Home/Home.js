import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <div>
      {/* Carousel*/}
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div className="carousel-item">
          <img src="/images/boxer.jpg" alt="Weights" />
          <div className="carousel-text">
            <h2>Erreichen Sie Ihre Ziele für 2025 mit</h2>
            <h3>MRT-Fitness.</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/diet.jpg" alt="Diät" loading="lazy" />
          <div className="carousel-text">
            <h2>Gesund leben mit der richtigen Ernährung</h2>
            <h3>MRT-Fitness.</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/yoga1.jpg" alt="Yoga" loading="lazy" />
          <div className="carousel-text">
            <h2>Verbessern Sie Ihre Seele mit YOGA-Training</h2>
            <h3>MRT-Fitness.</h3>
          </div>
        </div>
      </Carousel>

      {/* Krafttraining */}
      <div className="content-box" style={{ backgroundColor: "#f0f0f0" }}>
        <div
          className="image-box"
          style={{ backgroundImage: 'url("/images/weights.jpg")' }}
        ></div>
        <div className="text-box">
          <h3 className="content-title">Krafttraining</h3>
          <p>
          Krafttraining ist eine effektive Methode, um nicht nur die Muskelmasse zu erhöhen, sondern auch die allgemeine Gesundheit des Körpers zu verbessern. 
          Regelmäßiges Krafttraining stärkt die Muskeln, erhöht die Knochendichte, beschleunigt den Stoffwechsel und reduziert den Körperfettanteil. Es unterstützt auch die Gesundheit des Herzens und kann Haltungsschäden verbessern. Krafttraining steigert nicht nur die physische Stärke, 
          sondern fördert auch die Ausdauer, sodass Sie führen können        </p><br></br>
          
          <Link to="/kraft"> 
        <Button style={{ width: "200px" }} variant="outline-primary">Weitere Informationen</Button>
      </Link>
        </div>
       
      </div>

      {/* Yoga */}
      <div
        className="content-box reverse"
        style={{ backgroundColor: "#e8f5e9" }}
      >
        <div
          className="image-box"
          style={{ backgroundImage: 'url("/images/yoga.jpg")' }}
        ></div>
        <div className="text-box">
          <h3 className="content-title">Yoga und Ruhe</h3>
          <p>Yoga ist eine wunderbare Praxis, die nicht nur den Körper, sondern auch den Geist zur Ruhe bringt. Durch gezielte Atemübungen und entspannende Asanas wird die Flexibilität des Körpers gesteigert und gleichzeitig der Stress abgebaut. 
            Yoga fördert die Achtsamkeit und hilft dabei, innere Balance und Ruhe zu finden. Regelmäßiges Üben kann die Muskeln dehnen, die Haltung verbessern und das allgemeine Wohlbefinden steigern. 
            Es ist eine ideale Methode, um den Körper zu stärken und gleichzeitig den Geist zu beruhigen.</p><br></br>
            <Link to="/yoga"> 
        <Button style={{ width: "200px" }} variant="outline-info">Weitere Informationen</Button>
      </Link>
        </div>
        
      </div>

      {/* Ernährung-diät*/}
      <div className="content-box" style={{ backgroundColor: "#fff3e0" }}>
        <div
          className="image-box"
          style={{ backgroundImage: 'url("/images/healthy.jpg")' }}
        ></div>
        <div className="text-box">
          <h3 className="content-title">Ernährung und Diät</h3>
          <p>
          Gesunde Ernährung und Diätpläne sind entscheidend, um die eigenen Gesundheitsziele zu erreichen.  
          Durch die richtige Kombination von Makro-Mikronährstoffen können Energielevels gesteigert, das Immunsystem gestärkt und das Gewicht effektiv kontrolliert werden. 
          Diätpläne, die individuell auf die Bedürfnisse des Körpers abgestimmt sind, helfen dabei, langfristige Ziele wie Gewichtsverlust, Muskelaufbau oder eine bessere körperliche Verfassung zu erreichen. 
          </p><br></br>
          <Link to="/diet"> 
        <Button style={{ width: "200px" }} variant="outline-warning">Weitere Informationen</Button>
      </Link>
        </div>
      </div>

      {/* Action */}
      <div className="action-box">
        <h3>Werden Sie noch heute aktiv und treten Sie mit uns in Kontakt!</h3>
        <Link to="/uberuns"> 
        <Button style={{ width: "200px" }} variant="primary">Jetzt Mitglied werden</Button>
      </Link>
      </div>
    </div>
  );
}

export default Home;
