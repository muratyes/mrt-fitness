import React, { useState } from "react";
import { Box, TextField, Typography, Card } from "@mui/material";
import { Button } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Hauptkomponente für den Ernährungsplan
const ErnaehrungsPlan = () => {
  // Zustand für die Körpergröße
  const [groesse, setGroesse] = useState(""); // Körpergröße in Zentimetern
  // Zustand für das Gewicht
  const [gewicht, setGewicht] = useState(""); // Gewicht in Kilogramm
  // Zustand für den Taillenumfang
  const [taille, setTaille] = useState(""); // Taillenumfang in Zentimetern
  // Zustand für den berechneten BMI-Wert
  const [bmi, setBmi] = useState(null); // Null bedeutet, dass noch kein BMI berechnet wurde
  // Zustand für das Ergebnis des Taillenumfangs
  const [tailleErgebnis, setTailleErgebnis] = useState(""); // Text, der das Risiko basierend auf dem Taillenumfang beschreibt
  // Zustand für den aktiven Diätplan
  const [aktiverPlan, setAktiverPlan] = useState(null); // Null bedeutet, dass noch kein Plan ausgewählt wurde

  /**
   * Funktion zur Berechnung des BMI und der Risikoanalyse
   */
  const berechneErgebnis = () => {
    // Konvertieren der Körpergröße in Meter
    const groesseMeter = parseFloat(groesse) / 100;
    // Konvertieren des Gewichts und Taillenumfangs in Zahlen
    const gewichtFloat = parseFloat(gewicht);
    const tailleFloat = parseFloat(taille);

    // Validierung der Eingaben
    if (groesseMeter === 0 || gewichtFloat === 0 || tailleFloat === 0) {
      alert("Bitte füllen Sie alle Felder korrekt aus."); // Warnung, wenn Felder leer oder ungültig sind
      return;
    }

    if (isNaN(groesseMeter) || isNaN(gewichtFloat) || isNaN(tailleFloat)) {
      alert("Bitte füllen Sie alle Felder korrekt aus."); // Warnung, wenn die Eingabe keine Zahl ist
      return;
    }

    // Berechnung des BMI
    const berechneterBmi = (gewichtFloat / (groesseMeter * groesseMeter)).toFixed(2);
    setBmi(berechneterBmi); // Speichern des BMI im Zustand

    // Bestimmen der BMI-Kategorie
    let bmiErgebnis = "";
    if (berechneterBmi < 18.5) {
      bmiErgebnis = "Untergewicht"; // Kategorie für Untergewicht
      setAktiverPlan(1); // Zuordnung eines passenden Diätplans
    } else if (berechneterBmi < 24.9) {
      bmiErgebnis = "Normalgewicht"; // Kategorie für Normalgewicht
      setAktiverPlan(3); // Zuordnung eines passenden Diätplans
    } else if (berechneterBmi < 29.9) {
      bmiErgebnis = "Übergewicht"; // Kategorie für Übergewicht
      setAktiverPlan(2); // Zuordnung eines passenden Diätplans
    } else {
      bmiErgebnis = "Adipositas"; // Kategorie für Fettleibigkeit
      setAktiverPlan(2); // Zuordnung eines passenden Diätplans
    }

    // Risikoanalyse basierend auf dem Taillenumfang
    let tailleErgebnisText = "";
    if (tailleFloat > 102) {
      tailleErgebnisText = "Hohes Risiko"; // Hohes Risiko für gesundheitliche Probleme
    } else if (tailleFloat > 94) {
      tailleErgebnisText = "Mittleres Risiko"; // Mittleres Risiko
    } else {
      tailleErgebnisText = "Geringes Risiko"; // Geringes Risiko
    }

    // Kombinieren der BMI-Kategorie mit dem Risiko basierend auf dem Taillenumfang
    setTailleErgebnis(`${bmiErgebnis}, ${tailleErgebnisText}`); // Ergebnistext speichern
  };

  // Liste der verfügbaren Ernährungspläne
  const plaene = [
    "Low-Carb-Diät: Ernähren Sie sich protein- und gesunde fettreich.",
    "Mittelmeer-Diät: Erhöhen Sie den Verzehr von Olivenöl, Gemüse, Obst und Fisch.",
    "Ballaststoffreiche Diät: Konsumieren Sie Vollkornprodukte, Hülsenfrüchte und Gemüse.",
    "Vegane Diät: Konzentrieren Sie sich auf Gemüse, Obst, Hülsenfrüchte und pflanzliche Proteine.",
    "Intervallfasten: Essen Sie zu bestimmten Zeiten am Tag.",
    "Ausgewogene Diät: Konsumieren Sie maßvoll aus allen Lebensmittelgruppen."
  ];

  /**
   * Funktion zum Zurücksetzen des Formulars
   */
  const formZuruecksetzen = () => {
    setGroesse(""); // Körpergröße zurücksetzen
    setGewicht(""); // Gewicht zurücksetzen
    setTaille(""); // Taillenumfang zurücksetzen
    setBmi(null); // BMI zurücksetzen
    setTailleErgebnis(""); // Ergebnistext zurücksetzen
    setAktiverPlan(null); // Aktiven Plan zurücksetzen
  };



  return (
    <Box sx={{ marginTop: 4 }}>
    <Box>
   
      <Box sx={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Ernährung und Diät Plan
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <TextField
            label="Größe (cm)"
            value={groesse}
            onChange={(e) => setGroesse(e.target.value)}
            variant="outlined"
          />
          <TextField
            label="Gewicht (kg)"
            value={gewicht}
            onChange={(e) => setGewicht(e.target.value)}
            variant="outlined"
          />
          <TextField
            label="Taillenumfang (cm)"
            value={taille}
            onChange={(e) => setTaille(e.target.value)}
            variant="outlined"
          />
          <Button style={{ width: "180px" }} variant="primary" onClick={berechneErgebnis}>
            Berechnen
          </Button>
          <Button style={{ width: "180px" }} variant="warning" onClick={formZuruecksetzen}>
            Zurücksetzen
          </Button>
        </Box>

        {bmi && (
          <Box sx={{ marginTop: "20px" }}>
            <Typography variant="h6" sx={{ color: "#FF5722" }}>
              Body-Mass-Index (BMI): {bmi}
            </Typography>
            <Typography variant="h6">Taillenumfang Ergebnis: {tailleErgebnis}</Typography>
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {plaene.map((plan, index) => (
            <Card
              key={index}
              sx={{
                padding: "20px",
                backgroundColor: aktiverPlan === Math.ceil((index + 1) / 2) ? "#FFD1DC" : "#f0f0f0",
                color: aktiverPlan === Math.ceil((index + 1) / 2) ? "black" : "gray",
                width: "200px",
              }}
            >
              <Typography variant="body1">{plan}</Typography>
            </Card>
          ))}
        </Box>
      </Box>
          <br></br>
      <Typography variant="sup" sx={{margin:"20px 0 0 20px",padding:"20px",fontSize:"10px",color: "#aaa" }}>Body-Mass-Index (BMI):  National Institutes of Health (NIH). "Assessing Your Weight: BMI and Waist Circumference." 2016. https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmi_tbl.htm</Typography>
      
    </Box>
    </Box>  

  );
};

export default ErnaehrungsPlan;
