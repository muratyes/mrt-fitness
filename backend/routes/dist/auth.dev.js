"use strict";

var express = require('express');

var router = express.Router();

var verifyToken = require('../middleware/auth'); // Token doğrulama middleware'i


var Termin = require('../models/termin'); // Termin modelini import et
// Termin oluşturma işlemi


router.post('/termin', verifyToken, function _callee(req, res) {
  var _req$body, email, datum, time, termin;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, email = _req$body.email, datum = _req$body.datum, time = _req$body.time; // Burada token doğrulandıktan sonra, termin kaydını oluştur

          termin = new Termin({
            email: email,
            datum: datum,
            time: time
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(termin.save());

        case 5:
          res.status(201).json({
            message: 'Termin erfolgreich erstellt'
          });
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(500).json({
            message: 'Termin oluşturulurken bir hata oluştu'
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = router;
//# sourceMappingURL=auth.dev.js.map
