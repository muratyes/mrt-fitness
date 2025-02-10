const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Body-Parser-Middleware
app.use(express.json()); // Für JSON-Daten
app.use(bodyParser.json());
app.use(cors());

// MongoDB-Verbindung
mongoose.connect('mongodb://localhost:27017/fitnessDB', {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
})
.then(() => console.log('MongoDB-Verbindung erfolgreich'))
.catch((err) => console.error('MongoDB-Verbindungsfehler:', err));

// Benutzer-Modell
const benutzerSchema = new mongoose.Schema({
  Vorname: { type: String, required: true },
  Nachname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  tel: { type: String },
  Geschlecht: { type: String },
  adresse: { type: String },
  passwort: { type: String, required: true },
});

const Benutzer = mongoose.model('Benutzer', benutzerSchema);

// Termin-Modell
const terminSchema = new mongoose.Schema({
  email: { type: String, ref: 'Benutzer', required: true },
  datum: { type: Date, required: true },
  zeit: { type: String, required: true },
});

const Termin = mongoose.model('Termin', terminSchema);

// Registrierungs-Endpunkt
app.post('/api/auth/register', async (req, res) => {
  const { Vorname, Nachname, email, tel, Geschlecht, adresse, passwort } = req.body;

  try {
    const neuerBenutzer = new Benutzer({ Vorname, Nachname, email, tel, Geschlecht, adresse, passwort });
    await neuerBenutzer.save();
    res.status(201).json({ message: 'Benutzer erfolgreich gespeichert' });
  } catch (err) {
    console.error('Registrierungsfehler:', err);
    res.status(500).json({ error: 'Fehler bei der Registrierung' });
  }
});

// Login-Endpunkt
app.post('/api/auth/login', async (req, res) => {
  const { email, passwort } = req.body;

  try {
    const benutzer = await Benutzer.findOne({ email });
    if (!benutzer) {
      return res.status(400).json({ error: 'Benutzer nicht gefunden' });
    }

    if (benutzer.passwort !== passwort) {
      return res.status(400).json({ error: 'Falsches Passwort' });
    }

    res.status(200).json({
      message: 'Anmeldung erfolgreich',
      name: benutzer.Vorname,
      nachname: benutzer.Nachname,
    });
  } catch (err) {
    console.error('Login-Fehler:', err);
    res.status(500).json({ error: 'Fehler beim Login' });
  }
});

// Termin erstellen Endpunkt
app.post('/api/termin', async (req, res) => {
  const { email, datum, zeit } = req.body;

  console.log("Termin-Daten:", email, datum, zeit);

  try {
    // Benutzerüberprüfung per E-Mail
    const benutzer = await Benutzer.findOne({ email });
    if (!benutzer) {
        console.log("Benutzer nicht gefunden");
      return res.status(404).json({ error: 'Benutzer nicht gefunden' });
    }

    // Neuen Termin erstellen
    const neuerTermin = new Termin({ email, date: new Date(datum), time: zeit });
    await neuerTermin.save();
    console.log("Termin erstellt:", neuerTermin);

    res.status(201).json({ message: 'Termin erfolgreich erstellt', termin: neuerTermin });
  } catch (err) {
    console.error('Fehler beim Erstellen des Termins:', err);
    res.status(500).json({ error: 'Fehler beim Erstellen des Termins' });
  }
});

// Server starten
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});