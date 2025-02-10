const express = require('express');
const Termin = require('../models/termin');

const router = express.Router();

// Yeni bir termin (randevu) ekleme
router.post('/add', async (req, res) => {
 const { email, datum, zeit } = req.body;

 try {
  const newTermin = new Termin({ email, datum, zeit });
  await newTermin.save();
  res.status(201).json({ message: 'Randevu başarıyla oluşturuldu.' });
 } catch (err) {
  console.error('Randevu oluşturma hatası:', err);
  res.status(500).json({ error: 'Randevu oluşturulurken bir hata oluştu.' });
 }
});

module.exports = router;