const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Store responses in memory (for demo purposes)
let responses = [];

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/submit', (req, res) => {
  responses.push(req.body);
  res.render('thankyou', { name: req.body.name });
});

app.get('/results', (req, res) => {
  res.render('results', { responses });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
