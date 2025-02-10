import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Button, Box, TextField } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from "react-router-dom";

// Hauptfunktion für die YogaSeite
function YogaSeite() {
    // Zustand für das Datum des Termins
    const [datum, setDatum] = useState(new Date()); // Standardwert: aktuelles Datum
    // Zustand für die Uhrzeit des Termins
    const [zeit, setZeit] = useState('12:00'); // Standardwert: 12:00 Uhr
    // Zustand für die E-Mail des eingeloggten Benutzers
    const [userEmail, setUserEmail] = useState(null); // Wird aus dem localStorage geladen
    // Zustand für die Rückmeldung nach der Terminbuchung
    const [appointmentMessage, setAppointmentMessage] = useState('');

    /**
     * useEffect-Hook zur Überprüfung, ob der Benutzer eingeloggt ist
     * Wird beim ersten Rendern der Komponente ausgeführt.
     */
    useEffect(() => {
        const storedUserEmail = localStorage.getItem('userEmail'); // Holen der Benutzer-E-Mail aus localStorage
        console.log(storedUserEmail); // Debugging: Zeigt die geladene E-Mail im Konsolenlog
        if (storedUserEmail) {
            setUserEmail(storedUserEmail); // Speichern der E-Mail im Zustand
        }
    }, []);

    /**
     * Handler-Funktion zur Aktualisierung des ausgewählten Datums
     * @param {Date} neuesDatum - Das neu ausgewählte Datum
     */
    const handleDatumÄnderung = (neuesDatum) => {
        setDatum(neuesDatum); // Aktualisiert den Zustand mit dem neuen Datum
    };

    /**
     * Handler-Funktion zur Aktualisierung der ausgewählten Zeit
     * @param {Event} event - Das Eingabe-Event des Zeit-Feldes
     */
    const handleZeitÄnderung = (event) => {
        setZeit(event.target.value); // Aktualisiert den Zustand mit der neuen Zeit
    };

    /**
     * Funktion zur Verarbeitung der Terminbuchung
     * Sendet die Termin-Daten an den Server.
     */
    const handleAbsenden = async () => {
        // Überprüfen, ob der Benutzer eingeloggt ist
        if (!userEmail) {
            alert('Bitte loggen Sie sich ein, um einen Termin zu buchen.'); // Hinweis für nicht eingeloggte Benutzer
            // navigate("/login"); // Navigieren zur Login-Seite (auskommentiert)
            return;
        }

        // Erstellen des Termin-Objekts
        const terminDetails = {
            email: userEmail, // E-Mail des Benutzers
            datum: datum.toISOString(), // Datum im ISO-Format (für Konsistenz)
            time: zeit, // Ausgewählte Uhrzeit
        };
        console.log("Termin verisi gönderiliyor:", terminDetails); // Debugging: Anzeige der gesendeten Daten

        try {
            // Senden der Termin-Daten an die API
            const response = await fetch('http://localhost:5000/api/termin', {
                method: 'POST', // HTTP-Methode POST
                headers: {
                    'Content-Type': 'application/json', // Datenformat JSON
                },
                body: JSON.stringify(terminDetails), // Konvertierung des Termin-Objekts in JSON
            });

            if (response.ok) {
                // Erfolgreiche Terminbuchung
                alert(`Ihr Termin wurde für den ${datum.toLocaleDateString()} um ${zeit} Uhr gebucht!`); // Erfolgsmeldung
                setAppointmentMessage(`Ihr Termin wurde für den ${datum.toLocaleDateString()} um ${zeit} Uhr gebucht!`); // Nachricht aktualisieren
            } else {
                // Fehlgeschlagene Terminbuchung
                alert('Es gab ein Problem bei der Buchung des Termins. Bitte versuchen Sie es erneut.'); // Fehlermeldung
            }
        } catch (error) {
            // Fehlerbehandlung bei der Anfrage
            console.error('Fehler beim Speichern des Termins:', error); // Konsolenlog für Debugging
            alert('Es gab ein Problem bei der Buchung des Termins. Bitte versuchen Sie es erneut.'); // Fehlermeldung
        }
    };


    return (
        <Box sx={{ marginTop: 4 }}>
        <Container>
          <Grid container spacing={3}>
            {/* Yoganın Faydaları */}
            <Grid item xs={12}>
              <div className="content-box" style={{ backgroundColor: "#f0f0f0" }}>
                <div className="img-box">
                  <video controls width="590">
                <source src="/images/yoga.mp4" type="video/mp4" />
                </video></div>
                <div className="text-box">
                  <h3 className="content-title">Yoga und Flexibilität</h3>
                  <p>
                    Yoga ist eine Praxis, die die Flexibilität des Körpers erhöht, den Geist beruhigt und die allgemeine Gesundheit verbessert.
                    Regelmäßiges Yoga kann helfen, Stress abzubauen, Muskeln zu stärken und die Flexibilität zu steigern.
                    Darüber hinaus hilft Yoga, die Atemkontrolle zu verbessern und die geistige Konzentration zu steigern. Entdecken Sie Ihren inneren Frieden und befreien Sie sich mit Yoga.
                  </p>
                </div>
              </div>
            </Grid>
      
            {/* Araya boşluk */}
            <Box sx={{ mt: 6 }}></Box>
      
            <Grid container spacing={2} direction="row" sx={{ marginLeft: 12 }}>
              {/* Yoga Tavsiyeleri Sağ Tarafta */}
              <Grid item xs={12} md={6} sx={{ marginTop: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ color: "orange"}}>
    Yoga Empfehlungen
</Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    width: "100%",
                    textAlign: "justify",
                  }}
                >
                  <p>
                    - Versuchen Sie, regelmäßig Yoga zu machen. <br/>
                    - Auch wenn Sie Anfänger sind, haben Sie Geduld.<br/>
                    - Versuchen Sie, täglich mindestens 15-30 Minuten Yoga zu machen.<br/>
                    - Denken Sie daran, tief zu atmen.<br/><br/>
                    * Wenn Sie mit uns zusammenarbeiten möchten, vereinbaren Sie bitte einen Termin Ihrer Wahl.
                  </p>
                </Typography>
              </Grid>
      
              {/* Randevu Takvimi ve Saat Seçici Sol Tarafta */}
              <Grid item xs={12} md={6} sx={{ marginTop: 2 }}>
                <Typography variant="h5" gutterBottom>
                  Termin buchen
                </Typography>
                <Box>
                  <Calendar
                    onChange={handleDatumÄnderung}
                    value={datum}
                   className="custom-calendar"

                  />
                </Box>
                <TextField
                  label="Wählen Sie eine Uhrzeit"
                  type="time"
                  value={zeit}
                  onChange={handleZeitÄnderung}
                  inputProps={{
                    step: 300, // 5 Minuten Schritt
                  }}
                  fullWidth
                  sx={{ marginTop: 2, width: "66%" }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAbsenden}
                  sx={{ marginTop: 2,  display: "block" ,  width:"66%" }} 
                >
                  Termin bestätigen
                </Button>
      
                {/* Randevu onayı mesajı */}
                {appointmentMessage && (
                  <Typography variant="body1" color="error" sx={{ marginTop: 2 }}>
                    {appointmentMessage}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
    );
}

export default YogaSeite;
