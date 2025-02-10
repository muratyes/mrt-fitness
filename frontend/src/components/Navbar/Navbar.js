import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import "../../index.css";

// Die Navbar-Komponente definiert die Navigation der Anwendung
const Navbar = () => {
  const navigate = useNavigate(); // useNavigate wird verwendet, um Navigation zu ermöglichen
  const user = JSON.parse(localStorage.getItem("user")); // Der Benutzer wird aus dem LocalStorage abgerufen

  // Funktion, um den Benutzer auszuloggen
  const handleLogout = () => {
    // Entfernt die Benutzerinformationen aus dem LocalStorage
    localStorage.removeItem("user");
    // Leitet den Benutzer zur Login-Seite weiter
    navigate("/login");
  };

  // Stil für die Menülinks
  const MenuLink = styled(Link)(({ theme }) => ({
    textDecoration: "none", // Entfernt die Standard-Unterstreichung der Links
    color: "navy", // Legt die Schriftfarbe fest
    fontWeight: "bold", // Macht die Schrift fett
    padding: "5px 0", // Fügt Innenabstand hinzu
    display: "inline-block", // Macht den Link blockförmig
    position: "relative",
    transition: "color 0.3s ease, transform 0.3s ease", // Animationsübergänge bei Hover
    "&:hover": {
      color: "orange", // Ändert die Farbe beim Hover
      transform: "scale(1.1)", // Vergrößert den Link leicht beim Hover
    },
  }));

  return (
    <nav>
      {/* Logo der Seite */}
      <Link to="/">
        <img src="images/logo.png" alt="MRT-Fitness" className="logo" />
      </Link>

      {/* Hauptmenü */}
      <Box component="ul" sx={{ display: "flex", listStyle: "none" }}>
        {/* Home-Link */}
        <Box component="li" sx={{ margin: "0 15px" }}>
          <MenuLink to="/">| Home |</MenuLink>
        </Box>

        {/* Yoga-Link */}
        <Box component="li" sx={{ margin: "0 15px" }}>
          <MenuLink to="/yoga">| Yoga |</MenuLink>
        </Box>

        {/* Ernährung-Diät-Link */}
        <Box component="li" sx={{ margin: "0 15px" }}>
          <MenuLink to="/diet">| Ernährung-Diät |</MenuLink>
        </Box>

        {/* Krafttraining-Link */}
        <Box component="li" sx={{ margin: "0 15px" }}>
          <MenuLink to="/kraft">| Kraffttraining |</MenuLink>
        </Box>

        {/* Über Uns-Link */}
        <Box component="li" sx={{ margin: "0 15px" }}>
          <MenuLink to="/uberuns">| Über Uns |</MenuLink>
        </Box>
      </Box>

      {/* Rechte Seite der Navigationsleiste */}
      <div className="navbar-right">
        {/* Benutzerinformationen oder Authentifizierungsoptionen */}
        {user ? (
          <div className="user-info">
            {/* Begrüßung mit Benutzername */}
            <Typography variant="body1">
              Hi, {user.Vorname} {user.Nachname}
            </Typography>
            {/* Logout-Button */}
            <Button
              onClick={handleLogout}
              variant="outlined"
              color="primary"
              sx={{ marginLeft: 2 }}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="auth-buttons">
            {/* Login-Button */}
            <Link to="/login">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  marginRight: 1,
                  fontSize: "0.8rem", // Schriftgröße
                  padding: "0px 6px", // Innenabstand
                  width: "70px", // Button-Breite
                }}
              >
                Login
              </Button>
            </Link>

            {/* Registrierungs-Button */}
            <Link to="/register">
              <Button
                variant="outlined"
                color="secondary"
                sx={{
                  fontSize: "0.8rem", // Schriftgröße
                  padding: "0px 8px", // Innenabstand
                  width: "70px", // Button-Breite
                }}
              >
                Sign Up
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
