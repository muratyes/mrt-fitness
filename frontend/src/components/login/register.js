import React, { useState } from "react";
import { Box, TextField, Typography, Button, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { styled } from "@mui/system";

const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  padding: "20px",
  backgroundColor: "#f0f0f0",
  borderRadius: "10px",
  maxWidth: "400px",
  margin: "auto",
});

// Komponente für die Registrierung eines neuen Benutzers
const Register = () => {
  // Zustand für die Formulardaten, um Eingaben des Benutzers zu speichern
  const [formData, setFormData] = useState({
    Vorname: "", // Vorname des Benutzers
    Nachname: "", // Nachname des Benutzers
    email: "", // E-Mail-Adresse des Benutzers
    tel: "", // Telefonnummer des Benutzers
    Geschlecht: "Male", // Geschlecht des Benutzers (Standardwert: Male)
    address: "", // Adresse des Benutzers
    password: "", // Passwort des Benutzers
  });

  /**
   * Funktion zur Aktualisierung der Eingabefelder
   * Wird bei jeder Eingabeänderung ausgelöst, um die Formulardaten im Zustand zu aktualisieren.
   * @param {Event} e - Das Eingabe-Event
   */
  const handleChange = (e) => {
    const { name, value } = e.target; // Extrahiert den Namen und den Wert der geänderten Eingabe
    setFormData((prev) => ({ ...prev, [name]: value })); // Aktualisiert die Formulardaten im Zustand
  };

  /**
   * Funktion zur Verarbeitung des Formulars
   * Wird aufgerufen, wenn der Benutzer das Formular absendet.
   * Die Funktion erstellt ein neues Benutzerobjekt und sendet es an den Server.
   * @param {Event} e - Das Submit-Event
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Verhindert das Standardverhalten des Formulars (Seiten-Reload)
  
    const newUser = {
      Vorname: formData.Vorname, // Übernahme des Vornamens aus dem Zustand
      Nachname: formData.Nachname, // Übernahme des Nachnamens aus dem Zustand
      email: formData.email, // Übernahme der E-Mail-Adresse aus dem Zustand
      tel: formData.tel, // Übernahme der Telefonnummer aus dem Zustand
      Geschlecht: formData.Geschlecht, // Übernahme des Geschlechts aus dem Zustand
      address: formData.address, // Übernahme der Adresse aus dem Zustand
      password: formData.password, // Übernahme des Passworts aus dem Zustand
    };
  
    try {
      // Sende eine POST-Anfrage an den Server, um die Benutzerdaten zu registrieren
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST', // HTTP-Methode: POST
        headers: {
          'Content-Type': 'application/json', // Gibt an, dass die Daten im JSON-Format gesendet werden
        },
        body: JSON.stringify(newUser), // Konvertiert das Benutzerobjekt in einen JSON-String
      });
  
      if (response.ok) {
        // Erfolgreiche Registrierung
        alert('Registrierung erfolgreich erstellt'); // Erfolgsmeldung
      } else {
        // Fehler bei der Registrierung
        alert('Datensatz konnte nicht erstellt werden'); // Fehlermeldung
      }
    } catch (error) {
      // Fehlerbehandlung bei der Anfrage
      console.error('Bei der Registrierung ist ein Fehler aufgetreten:', error);
    }
  };

   
  return (
    <Box sx={{ marginTop: 4 }}>
      <Box>
        <FormContainer>
          <Typography variant="h4" gutterBottom color="primary">
            Register
          </Typography>

          <TextField
            label="Vorname"
            name="Vorname" 
            value={formData.Vorname}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <TextField
            label="Nachname"
            name="Nachname" 
            value={formData.Nachname}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <TextField
            label="Tel"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
            type="tel"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <FormControl variant="outlined" margin="normal" fullWidth>
            <InputLabel>Geschlecht</InputLabel>
            <Select
              name="Geschlecht" 
              value={formData.Geschlecht}
              onChange={handleChange}
              label="Gender"
            >
              <MenuItem value="Male">Männer</MenuItem>
              <MenuItem value="Female">Weblich</MenuItem>
              <MenuItem value="Other">Divers</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <TextField
            label="Password"
            name="password" 
            type="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            sx={{ marginTop: "20px" }}
          >
            Register
          </Button>
        </FormContainer>
      </Box>
    </Box>
  );
};

export default Register;
