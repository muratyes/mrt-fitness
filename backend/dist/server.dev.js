"use strict";

var express = require('express');

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var cors = require('cors');

var app = express(); // Body-Parser-Middleware

app.use(express.json()); // Für JSON-Daten

app.use(bodyParser.json());
app.use(cors()); // MongoDB-Verbindung

mongoose.connect('mongodb://localhost:27017/fitnessDB', {//useNewUrlParser: true,
  //useUnifiedTopology: true,
}).then(function () {
  return console.log('MongoDB-Verbindung erfolgreich');
})["catch"](function (err) {
  return console.error('MongoDB-Verbindungsfehler:', err);
}); // Benutzer-Modell

var benutzerSchema = new mongoose.Schema({
  Vorname: {
    type: String,
    required: true
  },
  Nachname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  tel: {
    type: String
  },
  Geschlecht: {
    type: String
  },
  adresse: {
    type: String
  },
  passwort: {
    type: String,
    required: true
  }
});
var Benutzer = mongoose.model('Benutzer', benutzerSchema); // Termin-Modell

var terminSchema = new mongoose.Schema({
  email: {
    type: String,
    ref: 'Benutzer',
    required: true
  },
  datum: {
    type: Date,
    required: true
  },
  zeit: {
    type: String,
    required: true
  }
});
var Termin = mongoose.model('Termin', terminSchema); // Registrierungs-Endpunkt

app.post('/api/auth/register', function _callee(req, res) {
  var _req$body, Vorname, Nachname, email, tel, Geschlecht, adresse, passwort, neuerBenutzer;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, Vorname = _req$body.Vorname, Nachname = _req$body.Nachname, email = _req$body.email, tel = _req$body.tel, Geschlecht = _req$body.Geschlecht, adresse = _req$body.adresse, passwort = _req$body.passwort;
          _context.prev = 1;
          neuerBenutzer = new Benutzer({
            Vorname: Vorname,
            Nachname: Nachname,
            email: email,
            tel: tel,
            Geschlecht: Geschlecht,
            adresse: adresse,
            passwort: passwort
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(neuerBenutzer.save());

        case 5:
          res.status(201).json({
            message: 'Benutzer erfolgreich gespeichert'
          });
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error('Registrierungsfehler:', _context.t0);
          res.status(500).json({
            error: 'Fehler bei der Registrierung'
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
}); // Login-Endpunkt

app.post('/api/auth/login', function _callee2(req, res) {
  var _req$body2, email, passwort, benutzer;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, passwort = _req$body2.passwort;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Benutzer.findOne({
            email: email
          }));

        case 4:
          benutzer = _context2.sent;

          if (benutzer) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            error: 'Benutzer nicht gefunden'
          }));

        case 7:
          if (!(benutzer.passwort !== passwort)) {
            _context2.next = 9;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            error: 'Falsches Passwort'
          }));

        case 9:
          res.status(200).json({
            message: 'Anmeldung erfolgreich',
            name: benutzer.Vorname,
            nachname: benutzer.Nachname
          });
          _context2.next = 16;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          console.error('Login-Fehler:', _context2.t0);
          res.status(500).json({
            error: 'Fehler beim Login'
          });

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 12]]);
}); // Termin erstellen Endpunkt

app.post('/api/termin', function _callee3(req, res) {
  var _req$body3, email, datum, zeit, benutzer, neuerTermin;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body3 = req.body, email = _req$body3.email, datum = _req$body3.datum, zeit = _req$body3.zeit;
          console.log("Termin-Daten:", email, datum, zeit);
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(Benutzer.findOne({
            email: email
          }));

        case 5:
          benutzer = _context3.sent;

          if (benutzer) {
            _context3.next = 9;
            break;
          }

          console.log("Benutzer nicht gefunden");
          return _context3.abrupt("return", res.status(404).json({
            error: 'Benutzer nicht gefunden'
          }));

        case 9:
          // Neuen Termin erstellen
          neuerTermin = new Termin({
            email: email,
            date: new Date(datum),
            time: zeit
          });
          _context3.next = 12;
          return regeneratorRuntime.awrap(neuerTermin.save());

        case 12:
          console.log("Termin erstellt:", neuerTermin);
          res.status(201).json({
            message: 'Termin erfolgreich erstellt',
            termin: neuerTermin
          });
          _context3.next = 20;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](2);
          console.error('Fehler beim Erstellen des Termins:', _context3.t0);
          res.status(500).json({
            error: 'Fehler beim Erstellen des Termins'
          });

        case 20:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 16]]);
}); // Server starten

var PORT = 5000;
app.listen(PORT, function () {
  console.log("Server l\xE4uft auf Port ".concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
