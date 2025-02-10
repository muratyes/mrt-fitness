// Mongoose Bibliothek einbinden (für die Interaktion mit MongoDB)
const mongoose = require('mongoose');

// Asynchrone Funktion zum Aufbau der Datenbankverbindung
const connectDB = async () => {
  try {
    // Verbindung zur MongoDB-Datenbank herstellen (fitnessDB Datenbank)
    await mongoose.connect('mongodb://localhost:27017/fitnessDB', {
      useNewUrlParser: true, // Neuen URL-Parser verwenden (veraltet, kann entfernt werden)
      useUnifiedTopology: true, // Neue Server Discovery- und Monitoring-Engine verwenden (veraltet, kann entfernt werden)
    });
    console.log('MongoDB-Verbindung erfolgreich'); // Erfolgsmeldung in der Konsole ausgeben
  } catch (error) {
    // Fehlerbehandlung: Verbindungsfehler
    console.error('MongoDB-Verbindungsfehler:', error); // Fehlermeldung in der Konsole ausgeben
    process.exit(1); // Prozess mit Fehlercode 1 beenden (zeigt einen Fehler an)
  }
};

// Funktion zum Exportieren, um sie in anderen Modulen zu verwenden
module.exports = connectDB;