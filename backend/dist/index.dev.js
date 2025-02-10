"use strict";

var express = require('express');

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var cors = require('cors');

var app = express(); // Middleware

app.use(bodyParser.json());
app.use(cors()); // MongoDB bağlantısı

mongoose.connect('mongodb://127.0.0.1:27017/fitnessApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log('MongoDB bağlantısı başarılı!');
})["catch"](function (err) {
  console.error('MongoDB bağlantı hatası:', err);
}); // Basit bir test rotası

app.get('/', function (req, res) {
  res.send('Backend çalışıyor!');
});
var PORT = 5000;
app.listen(PORT, function () {
  console.log("Sunucu ".concat(PORT, " portunda \xE7al\u0131\u015F\u0131yor."));
});
//# sourceMappingURL=index.dev.js.map
