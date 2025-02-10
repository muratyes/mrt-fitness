
// Import React und notwendige Material-UI-Komponenten
import React, { useState } from "react";
import { Box, TextField, Typography, Button, Link } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

// Stil für das Formularcontainer
const FormularContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "70vh",
  padding: "20px",
  backgroundColor: "#f0f0f0",
  borderRadius: "10px",
  maxWidth: "400px",
  margin: "auto",
});

// Login-Komponente
function Anmeldung() {
  const navigate = useNavigate(); // React-Hook, um zu einer anderen Route zu navigieren
  const [formularDaten, setFormularDaten] = useState({ email: "", passwort: "" }); // Zustand zur Speicherung der Formulardaten


  // Funktion zur Aktualisierung der Eingabefelder
  const handleÄnderung = (e) => {
    const { name, value } = e.target;
    setFormularDaten((vorherigeDaten) => ({ ...vorherigeDaten, [name]: value }));
  };

  // Funktion zur Verarbeitung der Anmeldung
  const handleAbsenden = async () => {
    try {
      const antwort = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formularDaten),
      });

      const daten = await antwort.json();

      if (antwort.ok) {
        alert("Anmeldung erfolgreich!");
        // Speichern der Benutzerdaten aus dem Backend
        localStorage.setItem("user", JSON.stringify({ Vorname: daten.name, Nachname: daten.surname }));
        localStorage.setItem("userEmail", formularDaten.email);
        navigate("/"); // Weiterleitung zur Startseite
      } else {
        alert(daten.error || "Anmeldung fehlgeschlagen!");
      }
    } catch (fehler) {
      console.error("Fehler bei der Anmeldung:", fehler);
      alert("Keine Verbindung zum Server möglich!");
    }
  };

  return (
    <Box sx={{ marginTop: 4 }}>
      <FormContainer>
        <Typography variant="h4" gutterBottom color="primary">
          Login
        </Typography>
        <TextField
          label="E-Mail"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Passwort"
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
          sx={{ marginTop: "20px" }}
          onClick={handleSubmit}
        >
          Anmelden
        </Button>
        <Typography variant="body2" sx={{ marginTop: "20px" }}>
          Noch kein Konto?{" "}
          <Link href="/register" color="secondary" underline="hover">
            Registrieren
          </Link>
        </Typography>
      </FormContainer>
    </Box>
  );
}

export default Login;