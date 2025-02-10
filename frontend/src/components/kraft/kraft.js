import React, { useState } from "react";
import "./kraft.css";

function KraftTrainingPage() {
  const [selectedSection, setSelectedSection] = useState("yeniBaslayanlar");

  const content = {
    yeniBaslayanlar: (
      <div className="main-content">
        <h2 style={{ color: "orange" }}>Trainingsprogramm für Anfänger</h2>
<p>Ziel: Die Bewegungsabläufe erlernen, die Hauptmuskelgruppen trainieren, und die Ausdauer steigern.</p>
<h3 style={{ color: "orange" }}>Tag 1: Ganzkörpertraining</h3>
<p><ul>
 <li>Aufwärmen (10–15 Minuten): Leichtes Gehen oder Radfahren.</li>
 <li>Kniebeugen (Körpergewicht): 3 Sätze x 12 Wiederholungen</li>
 <li>Liegestütze (Start im Knien): 3 Sätze x 8-10 Wiederholungen</li>
 <li> Kurzhantelrudern (mit leichten Gewichten): 3 Sätze x 12 Wiederholungen (beide Arme)</li>
 <li>Plank (statische Pose): 3 Sätze x 20-30 Sekunden</li>
 <li>Rudergerät: 10 Minuten moderates Tempo</li>
 <li>Abkühlen (5–10 Minuten): Dehnbewegungen (Strecken der Beine, des Rückens und der Arme).</li></ul></p>
<h3 style={{ color: "orange" }}>Tag 2: Ganzkörper + Cardio</h3>
<p><ul>
<li>Aufwärmen (10–15 Minuten): zügiges Gehen oder Radfahren.</li>
<li>Ausfallschritte (Körpergewicht): 3 Sätze x 10 Wiederholungen (beide Beine)</li>
<li>Schulterdrücken mit Kurzhanteln: 3 Sätze x 10-12 Wiederholungen</li>
<li>Glute Bridge: 3 Sätze x 15 Wiederholungen</li>
<li>Deadbug (Bauchmuskelübung): 3 Sätze x 10 Wiederholungen</li>
<li>Cardio (Crosstrainer oder Laufband): 15–20 Minuten leichtes bis moderates Tempo</li>
<li>Abkühlen (5–10 Minuten): Ganzkörperdehnung.</li></ul></p>

        <div className="video-container">
          <h3>Training Video</h3>
          <iframe
            src="/images/anfanger.mp4"
            title="Training Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    ),
    ortaSeviye: (
      <div className="main-content">
      <h2 style={{ color: "orange" }}>Trainingsprogramm für die Mittelstufe</h2>
 <p>Ziel: Den Muskelaufbau beschleunigen, Kraftaufbau durch Einsatz von mehr Gewicht.</p>
 <h3 style={{ color: "orange" }}>Tag 1: Oberkörper und Cardio</h3>
 <p><ul>
 <li>Aufwärmen (10–15 Minuten): Leichtes Joggen auf dem Laufband.</li>
 <li>Bankdrücken: 4 Sätze x 8-10 Wiederholungen </li>
 <li>Klimmzüge (unterstützt oder frei): 3 Sätze x maximale Wiederholungen</li>
 <li>Schulterdrücken mit Kurzhanteln: 4 Sätze x 10 Wiederholungen</li> 
 <li> Vorgebeugtes Rudern (Langhantel oder Kurzhantel): 3 Sätze x 12 Wiederholungen</li>
 <li>Cardio (HIIT – Intervalltraining): 20 Minuten (1 Minute Sprint, 1 Minute Gehen).</li>
 <li>Abkühlen (5–10 Minuten): Dehnbewegungen (Dehnen von Schultern, Brust und Rücken).</li></ul></p>
 <h3 style={{ color: "orange" }}>Tag 2: Unterkörper + Bauch</h3>
 <p><ul>
 <li>Aufwärmen (10–15 Minuten): Radfahren oder Gehen in leichtem Tempo.</li>
 <li>Kniebeugen (Langhantel oder Kurzhantel): 4 Sätze x 8-10 Wiederholungen</li>
 <li>Rumänisches Kreuzheben: 3 Sätze x 10 Wiederholungen</li>
 <li>Walking Lunges (mit Gewichten): 3 Sätze x 12 Schritte (für beide Beine)</li>
 <li>Beinpresse: 4 Sätze x 12-15 Wiederholungen </li>
 <li>Beinheben im Hängen (an der Klimmzugstange): 3 Sätze x 10 Wiederholungen</li>
 <li>Cardio (Laufband oder Fahrrad): 15–20 Minuten moderates Tempo.</li>
 <li>Abkühlen (5–10 Minuten): Dehnen der Hüfte, der Beine und des Rückens.</li></ul></p>
        <div className="video-container">
          <h3>Antrenman Videosu</h3>
          <iframe
            src="/images/mittelstufe.mp4"
            title="mittel-Stufe Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    ),
    genelTavsiyeler: (
      <div className="main-content">
     <h2 style={{ color: "orange" }}>Allgemeine Empfehlungen</h2>
 <p>- Wärmen Sie sich vor jedem Training auf und entspannen Sie Ihre Muskulatur zum Abschluss mit Dehnübungen.</p>
 <p>- Vergessen Sie nicht, ausreichend Eiweiß und Wasser zu sich zu nehmen..</p>
 <p>- Gönnen Sie Ihren Muskeln an Ihren Ruhetagen eine aktive Erholung durch leichte Aktivitäten (Spazierengehen, Yoga).</p>
 <p>- Für das Mittelstufenprogramm können schwerere Lasten erforderlich sein; Achten Sie deshalb zur Gewährleistung der Sicherheit darauf, mit der richtigen Form zu arbeiten.</p>
 <p>- Achten Sie darauf, mindestens einen Tag pro Woche auszuruhen.</p>
 <p>Indem Sie diese Programme befolgen, können Sie in 3 Monaten stärker werden, Muskelmasse aufbauen und Ihre Körperzusammensetzung verbessern!</p>
      </div>
    ),
  };

  return (
    <div className="kraft-training-page">
      <div className="sidebar">
        <button onClick={() => setSelectedSection("yeniBaslayanlar")}>
        Neueinsteiger
        </button>
        <button onClick={() => setSelectedSection("ortaSeviye")}>
        Mittelstufe
        </button>
        <button onClick={() => setSelectedSection("genelTavsiyeler")}>
        Allgemeine Empfehlungen
        </button>
      </div>
      <div className="content-area">{content[selectedSection]}</div>
    </div>
  );
}

export default KraftTrainingPage;
