"use strict";

// Mongoose Bibliothek einbinden (für die Interaktion mit MongoDB)
var mongoose = require('mongoose'); // Asynchrone Funktion zum Aufbau der Datenbankverbindung


var connectDB = function connectDB() {
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect('mongodb://localhost:27017/fitnessDB', {
            useNewUrlParser: true,
            // Neuen URL-Parser verwenden (veraltet, kann entfernt werden)
            useUnifiedTopology: true // Neue Server Discovery- und Monitoring-Engine verwenden (veraltet, kann entfernt werden)

          }));

        case 3:
          console.log('MongoDB-Verbindung erfolgreich'); // Erfolgsmeldung in der Konsole ausgeben

          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          // Fehlerbehandlung: Verbindungsfehler
          console.error('MongoDB-Verbindungsfehler:', _context.t0); // Fehlermeldung in der Konsole ausgeben

          process.exit(1); // Prozess mit Fehlercode 1 beenden (zeigt einen Fehler an)

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
}; // Funktion zum Exportieren, um sie in anderen Modulen zu verwenden


module.exports = connectDB;
//# sourceMappingURL=db.dev.js.map
