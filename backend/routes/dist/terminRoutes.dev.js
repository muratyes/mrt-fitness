"use strict";

var express = require('express');

var Termin = require('../models/termin');

var router = express.Router(); // Yeni bir termin (randevu) ekleme

router.post('/add', function _callee(req, res) {
  var _req$body, email, datum, zeit, newTermin;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, datum = _req$body.datum, zeit = _req$body.zeit;
          _context.prev = 1;
          newTermin = new Termin({
            email: email,
            datum: datum,
            zeit: zeit
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(newTermin.save());

        case 5:
          res.status(201).json({
            message: 'Randevu başarıyla oluşturuldu.'
          });
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error('Randevu oluşturma hatası:', _context.t0);
          res.status(500).json({
            error: 'Randevu oluşturulurken bir hata oluştu.'
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
});
module.exports = router;
//# sourceMappingURL=terminRoutes.dev.js.map
